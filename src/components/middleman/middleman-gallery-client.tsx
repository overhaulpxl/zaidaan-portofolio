"use client";

import { useState, useMemo, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FaDiscord, FaFacebook, FaCheck, FaTimes, FaChevronLeft, FaChevronRight, FaCalendarAlt, FaSearch } from "react-icons/fa";
import type { TestimonialItem } from "@/types/middleman";

type Props = {
  items: TestimonialItem[];
  totalCount: number;
};

const PAGE_SIZE = 36;
const DISCORD_USERNAME = "c10h14n2overdose";
const DISCORD_NICKNAME = "lui";
const FACEBOOK_URL = "https://www.facebook.com/zxxllz/";
const DEFAULT_STORAGE_BASE_URL =
  "https://pwjonnqmksqfbbxrbikm.supabase.co/storage/v1/object/public/testimonials";
const STORAGE_BASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL?.replace(/\/$/, "") || DEFAULT_STORAGE_BASE_URL;

// Deter casual right-click/drag image saving (best effort; a determined user
// can still screenshot/devtools, watermark remains the real protection)
const blockImageInteraction = (e: React.SyntheticEvent) => {
  e.preventDefault();
};

const ALL_MONTHS = [
  { num: "01", label: "JAN" },
  { num: "02", label: "FEB" },
  { num: "03", label: "MAR" },
  { num: "04", label: "APR" },
  { num: "05", label: "MAY" },
  { num: "06", label: "JUN" },
  { num: "07", label: "JUL" },
  { num: "08", label: "AUG" },
  { num: "09", label: "SEP" },
  { num: "10", label: "OCT" },
  { num: "11", label: "NOV" },
  { num: "12", label: "DEC" },
];

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function MiddlemanGalleryClient({ items, totalCount: initialTotalCount }: Props) {
  const isClient = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const [selectedMonth, setSelectedMonth] = useState<string>("ALL");
  const [searchDate, setSearchDate] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const totalCount = items?.length || initialTotalCount || 0;

  // Calculate category counts
  const internationalCount = useMemo(() => {
    return items.filter((item) => item.category === "international").length;
  }, [items]);
  const highValueCount = useMemo(() => {
    return items.filter((item) => Boolean(item.highValue)).length;
  }, [items]);
  const domesticCount = totalCount - internationalCount;

  // Extract distinct years from manifest
  const availableYears = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => {
      const year = item.year || item.month?.slice(0, 4) || (item.date ? item.date.slice(0, 4) : null);
      if (year && /^\d{4}$/.test(year)) set.add(year);
    });
    return Array.from(set).sort().reverse();
  }, [items]);

  // Calculate year counts for currently selected category
  const yearCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    items.forEach((item) => {
      const itemCategory = item.category || "domestic";
      if (selectedCategory === "INTERNATIONAL" && itemCategory !== "international") return;
      if (selectedCategory === "DOMESTIC" && itemCategory === "international") return;
      if (selectedCategory === "HIGH_VALUE" && !item.highValue) return;

      const yr = item.year || item.month?.slice(0, 4) || (item.date ? item.date.slice(0, 4) : "");
      if (yr && /^\d{4}$/.test(yr)) {
        counts[yr] = (counts[yr] || 0) + 1;
      }
    });
    return counts;
  }, [items, selectedCategory]);

  // Calculate month counts for currently selected year & category
  const monthCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    items.forEach((item) => {
      const itemCategory = item.category || "domestic";
      const itemYear = item.year || item.month?.slice(0, 4) || (item.date ? item.date.slice(0, 4) : "");
      if (selectedCategory === "INTERNATIONAL" && itemCategory !== "international") return;
      if (selectedCategory === "DOMESTIC" && itemCategory === "international") return;
      if (selectedCategory === "HIGH_VALUE" && !item.highValue) return;
      if (selectedYear !== "ALL" && itemYear !== selectedYear) return;

      const m = item.month ? item.month.slice(5, 7) : item.date ? item.date.slice(5, 7) : "";
      if (m && /^\d{2}$/.test(m)) {
        counts[m] = (counts[m] || 0) + 1;
      }
    });
    return counts;
  }, [items, selectedCategory, selectedYear]);

  // Handle Discord copy
  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  // Filter items based on category, year, month & date query
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const itemCategory = item.category || "domestic";
      const itemYear = item.year || item.month?.slice(0, 4) || (item.date ? item.date.slice(0, 4) : "");
      const itemMonth = item.month ? item.month.slice(5, 7) : item.date ? item.date.slice(5, 7) : "";
      const itemDate = item.date || item.month || "";

      if (selectedCategory === "INTERNATIONAL" && itemCategory !== "international") {
        return false;
      }
      if (selectedCategory === "DOMESTIC" && itemCategory === "international") {
        return false;
      }
      if (selectedCategory === "HIGH_VALUE" && !item.highValue) {
        return false;
      }

      if (selectedYear !== "ALL" && itemYear !== selectedYear) {
        return false;
      }

      if (selectedMonth !== "ALL" && itemMonth !== selectedMonth) {
        return false;
      }

      if (searchDate.trim()) {
        const query = searchDate.trim().toLowerCase();
        const matchesDate = itemDate.toLowerCase().includes(query);
        const matchesId = item.id.toLowerCase().includes(query);
        if (!matchesDate && !matchesId) return false;
      }

      return true;
    });
  }, [items, selectedCategory, selectedYear, selectedMonth, searchDate]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedMonth("ALL");
    setVisibleCount(PAGE_SIZE);
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSearchChange = (query: string) => {
    setSearchDate(query);
    setVisibleCount(PAGE_SIZE);
  };

  const pagedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setImageLoading(true);
    setActiveIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [activeIndex]);

  const nextImage = useCallback(() => {
    if (activeIndex === null) return;
    setImageLoading(true);
    setActiveIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  }, [activeIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (activeIndex === null) return;
    setImageLoading(true);
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  }, [activeIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, closeLightbox, nextImage, prevImage]);

  const activeItem = activeIndex !== null ? filteredItems[activeIndex] : null;

  const resolveImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${STORAGE_BASE_URL}${cleanPath}?v=2`;
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Contact & Verification Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-black p-6 bg-white">
        <button
          type="button"
          onClick={handleCopyDiscord}
          className="flex items-center justify-between gap-4 border border-black p-5 text-left transition-colors hover:bg-black hover:text-white active:scale-[0.99] group"
          aria-label="Copy Discord Username (lui)"
        >
          <div className="flex items-center gap-4">
            <FaDiscord className="size-6 shrink-0" aria-hidden="true" />
            <div>
              <span className="block font-['Inter'] text-[11px] font-semibold uppercase tracking-widest text-[#5c5f60] group-hover:text-[#a0a0a0]">
                DISCORD · KNOWN AS
              </span>
              <span className="block font-['Inter'] text-[19px] font-extrabold tracking-wide">
                {DISCORD_NICKNAME}
              </span>
              <span className="block font-mono text-[12px] text-[#5c5f60] group-hover:text-[#a0a0a0]">
                {DISCORD_USERNAME}
              </span>
            </div>
          </div>
          <div className="text-right">
            {copied ? (
              <span className="inline-flex items-center gap-1.5 font-['Inter'] text-[12px] font-bold text-emerald-600 group-hover:text-emerald-400 uppercase">
                <FaCheck className="size-3.5" /> COPIED
              </span>
            ) : (
              <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-wider text-[#5c5f60] group-hover:text-white">
                COPY USERNAME
              </span>
            )}
          </div>
        </button>

        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 border border-black p-5 text-left transition-colors hover:bg-black hover:text-white active:scale-[0.99] group"
          aria-label="Visit Facebook Profile"
        >
          <div className="flex items-center gap-4">
            <FaFacebook className="size-6 shrink-0" aria-hidden="true" />
            <div>
              <span className="block font-['Inter'] text-[11px] font-semibold uppercase tracking-widest text-[#5c5f60] group-hover:text-[#a0a0a0]">
                FACEBOOK
              </span>
              <span className="block font-['Inter'] text-[15px] font-bold tracking-wide">
                facebook.com/zxxllz
              </span>
            </div>
          </div>
          <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-wider text-[#5c5f60] group-hover:text-white">
            OPEN PROFILE ↗
          </span>
        </a>
      </div>

      {/* Date Search Engine & Filter Bar */}
      <div className="flex flex-col gap-6 border-t border-b border-black py-8">
        {/* Category Scope Chips */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-['Inter'] text-[12px] font-bold uppercase tracking-widest text-[#5c5f60] mr-2">
            SCOPE:
          </span>
          <button
            type="button"
            onClick={() => handleCategoryChange("ALL")}
            className={`px-4 py-2 font-['Inter'] text-[12px] font-bold uppercase tracking-widest border border-black transition-colors ${
              selectedCategory === "ALL" ? "bg-black text-white" : "bg-transparent text-black hover:bg-[#e9ecef]"
            }`}
          >
            ALL PROOFS ({totalCount})
          </button>
          <button
            type="button"
            onClick={() => handleCategoryChange("HIGH_VALUE")}
            className={`px-4 py-2 font-['Inter'] text-[12px] font-bold uppercase tracking-widest border border-black transition-colors ${
              selectedCategory === "HIGH_VALUE" ? "bg-black text-white" : "bg-transparent text-black hover:bg-[#e9ecef]"
            }`}
          >
            HIGH NOMINAL ({highValueCount})
          </button>
          <button
            type="button"
            onClick={() => handleCategoryChange("DOMESTIC")}
            className={`px-4 py-2 font-['Inter'] text-[12px] font-bold uppercase tracking-widest border border-black transition-colors ${
              selectedCategory === "DOMESTIC" ? "bg-black text-white" : "bg-transparent text-black hover:bg-[#e9ecef]"
            }`}
          >
            DOMESTIC / INDONESIA ({domesticCount})
          </button>
          <button
            type="button"
            onClick={() => handleCategoryChange("INTERNATIONAL")}
            className={`px-4 py-2 font-['Inter'] text-[12px] font-bold uppercase tracking-widest border border-black transition-colors ${
              selectedCategory === "INTERNATIONAL" ? "bg-black text-white" : "bg-transparent text-black hover:bg-[#e9ecef]"
            }`}
          >
            INTERNATIONAL ({internationalCount})
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Year Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-['Inter'] text-[12px] font-bold uppercase tracking-widest text-[#5c5f60] mr-2">
              YEAR:
            </span>
            <button
              type="button"
              onClick={() => handleYearChange("ALL")}
              className={`px-4 py-2 font-['Inter'] text-[12px] font-bold uppercase tracking-widest border border-black transition-colors ${
                selectedYear === "ALL" ? "bg-black text-white" : "bg-transparent text-black hover:bg-[#e9ecef]"
              }`}
            >
              ALL
            </button>
            {availableYears.map((yr) => {
              const count = yearCounts[yr] || 0;
              return (
                <button
                  key={yr}
                  type="button"
                  onClick={() => handleYearChange(yr)}
                  className={`px-4 py-2 font-['Inter'] text-[12px] font-bold uppercase tracking-widest border border-black transition-colors ${
                    selectedYear === yr ? "bg-black text-white" : "bg-transparent text-black hover:bg-[#e9ecef]"
                  }`}
                >
                  {yr} {count > 0 ? `(${count})` : ""}
                </button>
              );
            })}
          </div>

          {/* Date Search Input */}
          <div className="flex items-center gap-2 max-w-md w-full">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchDate}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search date (e.g. 2026-11 or YYYY-MM-DD)..."
                className="w-full border border-black bg-white px-4 py-2.5 pl-10 font-['Inter'] text-[13px] text-black placeholder:text-[#8c8c8c] focus:outline-none focus:ring-1 focus:ring-black"
              />
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-[#5c5f60]" />
              {searchDate && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5c5f60] hover:text-black"
                  aria-label="Clear search"
                >
                  <FaTimes className="size-3" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Month Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-[#e9ecef]">
          <span className="font-['Inter'] text-[12px] font-bold uppercase tracking-widest text-[#5c5f60] mr-2">
            MONTH:
          </span>
          <button
            type="button"
            onClick={() => handleMonthChange("ALL")}
            className={`px-3 py-1.5 font-['Inter'] text-[11px] sm:text-[12px] font-bold uppercase tracking-widest border border-black transition-colors ${
              selectedMonth === "ALL" ? "bg-black text-white" : "bg-transparent text-black hover:bg-[#e9ecef]"
            }`}
          >
            ALL
          </button>
          {ALL_MONTHS.map((m) => {
            const isSelected = selectedMonth === m.num;
            const count = monthCounts[m.num] || 0;
            const isDisabled = count === 0 && !isSelected;

            return (
              <button
                key={m.num}
                type="button"
                disabled={isDisabled}
                onClick={() => handleMonthChange(m.num)}
                className={`px-2.5 sm:px-3 py-1.5 font-['Inter'] text-[11px] sm:text-[12px] font-bold uppercase tracking-widest border transition-colors ${
                  isSelected
                    ? "border-black bg-black text-white"
                    : isDisabled
                    ? "border-[#d8d8d8] text-[#a0a0a0] bg-[#f8f9fa] cursor-not-allowed opacity-60"
                    : "border-black bg-transparent text-black hover:bg-[#e9ecef]"
                }`}
                title={count > 0 ? `${count} proofs in ${m.label}` : `No proofs in ${m.label}`}
              >
                {m.label} {count > 0 ? `(${count})` : ""}
              </button>
            );
          })}
        </div>

        {/* Filter Summary Status */}
        <div className="flex items-center justify-between text-[12px] font-['Inter'] text-[#5c5f60] uppercase tracking-wider">
          <span>
            RECORDED ARCHIVE · SHOWING {filteredItems.length} OF {totalCount} TRANSACTIONS
          </span>
          {(selectedCategory !== "ALL" || selectedYear !== "ALL" || selectedMonth !== "ALL" || searchDate) && (
            <button
              type="button"
              onClick={() => {
                handleCategoryChange("ALL");
                handleYearChange("ALL");
                handleMonthChange("ALL");
                handleSearchChange("");
              }}
              className="font-bold underline text-black hover:opacity-70"
            >
              RESET FILTERS
            </button>
          )}
        </div>
      </div>

      {/* Grid of Evidence Cards */}
      {filteredItems.length === 0 ? (
        <div className="border border-black p-16 text-center bg-white">
          <FaCalendarAlt className="size-10 mx-auto text-[#5c5f60] mb-4" />
          <h3 className="font-['Montserrat'] text-[20px] font-bold uppercase mb-2">
            NO TRANSACTIONS FOUND
          </h3>
          <p className="font-['Inter'] text-[14px] text-[#5c5f60] max-w-md mx-auto">
            No middleman records matched your current date or year query. Reset filters to see all completed transactions.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {pagedItems.map((item, idx) => {
            const thumbUrl = resolveImageUrl(item.thumb);
            const dateDisplay = item.date || item.month || "ARCHIVE";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(idx)}
                onContextMenu={blockImageInteraction}
                onDragStart={blockImageInteraction}
                className="group relative flex flex-col border border-black bg-white p-2 text-left transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-1 focus-visible:outline-black active:scale-[0.98] select-none"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#e9ecef] select-none">
                  <div className="absolute top-2 right-2 z-10 flex flex-col gap-1 items-end">
                    {item.category === "international" && (
                      <span className="border border-black bg-black px-1.5 py-0.5 font-['Inter'] text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                        INTL
                      </span>
                    )}
                    {item.highValue && (
                      <span className="border border-black bg-white px-1.5 py-0.5 font-['Inter'] text-[9px] font-bold uppercase tracking-wider text-black shadow-sm">
                        HIGH NOMINAL
                      </span>
                    )}
                  </div>
                  {thumbUrl ? (
                    <Image
                      src={thumbUrl}
                      alt={`Transaction proof ${item.id} from ${dateDisplay}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 select-none"
                      draggable={false}
                      onContextMenu={blockImageInteraction}
                      onDragStart={blockImageInteraction}
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-4 text-center font-['Inter'] text-[11px] text-[#5c5f60]">
                      PROOF ARCHIVE
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                  {/* Interaction barrier: blocks right-click/drag save on the thumbnail */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-[5] select-none"
                    onContextMenu={blockImageInteraction}
                    onDragStart={blockImageInteraction}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] font-['Inter'] font-semibold text-[#5c5f60]">
                  <span className="truncate">{dateDisplay}</span>
                  <span className="text-[10px] text-[#8c8c8c]">VIEW ↗</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Pagination / Load More */}
      {visibleCount < filteredItems.length && (
        <div className="pt-8 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="inline-flex items-center justify-center border border-black bg-black px-10 py-5 font-['Inter'] text-[13px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black active:scale-95"
          >
            LOAD MORE PROOFS (+{Math.min(PAGE_SIZE, filteredItems.length - visibleCount)})
          </button>
        </div>
      )}

      {/* Zero-Dependency Lightbox Modal */}
      {isClient && activeItem && activeIndex !== null
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[80] flex flex-col bg-black text-white"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-[#2c2c2c] px-4 py-3 sm:px-6 sm:py-4 bg-black">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span className="font-['Montserrat'] text-[12px] sm:text-[13px] font-bold uppercase tracking-widest text-white shrink-0">
                    PROOFS [{activeIndex + 1} / {filteredItems.length}]
                  </span>
                  {activeItem.category === "international" && (
                    <span className="border border-white/40 bg-white text-black px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0">
                      INTERNATIONAL
                    </span>
                  )}
                  {activeItem.highValue && (
                    <span className="border border-white/40 bg-white text-black px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0">
                      HIGH NOMINAL
                    </span>
                  )}
                  <span className="hidden md:inline font-['Inter'] text-[12px] text-[#a0a0a0] truncate">
                    {activeItem.date || activeItem.month} · ID: {activeItem.id}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="flex items-center gap-2 border border-[#4a4a4a] px-3.5 py-1.5 font-['Inter'] text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black shrink-0 cursor-pointer"
                  aria-label="Close image viewer"
                >
                  <FaTimes className="size-3.5" /> CLOSE [ESC]
                </button>
              </div>

              {/* Viewer Area */}
              <div
                className="relative flex flex-grow items-center justify-center p-4 sm:p-8 overflow-hidden select-none cursor-pointer"
                onClick={(e) => {
                  if (e.target === e.currentTarget) closeLightbox();
                }}
              >
                {/* Prev Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex size-11 sm:size-12 items-center justify-center border border-[#4a4a4a] bg-black/80 text-white transition-colors hover:bg-white hover:text-black active:scale-95 cursor-pointer"
                  aria-label="Previous proof"
                >
                  <FaChevronLeft className="size-4" />
                </button>

                {/* Main Image Container */}
                <div
                  className="relative max-h-[82vh] max-w-[90vw] md:max-w-3xl w-full h-full flex items-center justify-center cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  {imageLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
                      <div className="size-7 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                      <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#8c8c8c]">
                        LOADING EVIDENCE...
                      </span>
                    </div>
                  )}

                  {resolveImageUrl(activeItem.full) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={resolveImageUrl(activeItem.full)}
                      alt={`Verified transaction proof ${activeItem.id}`}
                      onLoad={() => setImageLoading(false)}
                      onError={() => setImageLoading(false)}
                      draggable={false}
                      onContextMenu={blockImageInteraction}
                      onDragStart={blockImageInteraction}
                      className={`max-h-[80vh] w-auto max-w-full object-contain shadow-2xl border border-[#2c2c2c] select-none transition-opacity duration-200 ${imageLoading ? "opacity-0" : "opacity-100"}`}
                    />
                  ) : (
                    <div className="p-8 text-center text-[#8c8c8c]">Image unavailable</div>
                  )}
                  {/* Interaction barrier over the full-size proof image */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-[5] select-none cursor-default"
                    onContextMenu={blockImageInteraction}
                    onDragStart={blockImageInteraction}
                  />
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex size-11 sm:size-12 items-center justify-center border border-[#4a4a4a] bg-black/80 text-white transition-colors hover:bg-white hover:text-black active:scale-95 cursor-pointer"
                  aria-label="Next proof"
                >
                  <FaChevronRight className="size-4" />
                </button>
              </div>

              {/* Bottom Bar */}
              <div className="flex items-center justify-between border-t border-[#2c2c2c] px-4 py-2.5 sm:px-6 sm:py-3 text-[11px] font-['Inter'] text-[#8c8c8c] bg-black">
                <span className="truncate">PROTECTED BY WATERMARK · SENSITIVE DATA REDACTED</span>
                <span className="hidden sm:inline shrink-0">USE ARROW KEYS [← / →] TO NAVIGATE</span>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
