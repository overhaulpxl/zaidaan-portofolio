"use client";

import { useState, useTransition } from "react";
import { FaStar, FaRegStar, FaCheckCircle, FaTimes, FaUserCheck } from "react-icons/fa";
import { submitPublicVouchAction } from "@/lib/actions/console";
import type { VouchItem } from "@/lib/supabase/data";

type Props = {
  initialVouches: VouchItem[];
};

export function MiddlemanVouches({ initialVouches }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Calculate average rating
  const avgRating =
    initialVouches.length > 0
      ? (initialVouches.reduce((acc, v) => acc + (v.rating || 5), 0) / initialVouches.length).toFixed(1)
      : "5.0";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("rating", rating.toString());

    startTransition(async () => {
      try {
        const res = await submitPublicVouchAction(formData);
        if (res.success === false) {
          setFeedback({ type: "error", message: res.message });
          return;
        }
        setFeedback({ type: "success", message: res.message });
        setTimeout(() => {
          setIsOpen(false);
          setFeedback(null);
        }, 3000);
      } catch (err: unknown) {
        setFeedback({
          type: "error",
          message: err instanceof Error ? err.message : "Failed to submit review.",
        });
      }
    });
  }

  return (
    <div className="border border-black bg-white p-6 md:p-10 mb-16">
      {/* Header Rail */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black pb-8 gap-6">
        <div>
          <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5c5f60] block mb-2">
            COMMUNITY REPUTATION · CLIENT FEEDBACK
          </span>
          <h2 className="font-['Montserrat'] text-[32px] md:text-[44px] font-black uppercase tracking-tight">
            VOUCHES & REVIEWS
          </h2>
          <p className="font-['Inter'] text-[14px] text-[#5c5f60] mt-1 max-w-xl leading-relaxed">
            Direct feedback from buyers, sellers, and traders who utilized Zaidaan&apos;s middleman escrow service.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3 border border-black px-4 py-3 bg-[#f8f9fa]">
            <div className="flex text-black">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="size-3.5 fill-black" />
              ))}
            </div>
            <div className="border-l border-black pl-3 text-left">
              <span className="font-['Montserrat'] text-[16px] font-black block leading-none">{avgRating} / 5.0</span>
              <span className="font-['Inter'] text-[10px] font-bold text-[#5c5f60] uppercase tracking-wider block mt-0.5">
                {initialVouches.length} VERIFIED VOUCHES
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="border border-black bg-black text-white px-6 py-3.5 font-['Inter'] text-[12px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            + WRITE A VOUCH
          </button>
        </div>
      </div>

      {/* Grid of Approved Vouches */}
      {initialVouches.length === 0 ? (
        <div className="py-16 text-center">
          <FaUserCheck className="size-10 mx-auto text-[#8c8c8c] mb-3" />
          <h3 className="font-['Montserrat'] text-[18px] font-bold uppercase mb-1">NO PUBLIC VOUCHES YET</h3>
          <p className="font-['Inter'] text-[14px] text-[#5c5f60] max-w-md mx-auto mb-6">
            Have you completed a transaction with Zaidaan? Be the first to share your experience.
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="border border-black bg-black text-white px-6 py-2.5 font-['Inter'] text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            SUBMIT FIRST VOUCH
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {initialVouches.map((vouch) => (
            <div
              key={vouch.id}
              className="border border-black p-6 bg-[#fcfcfd] flex flex-col justify-between hover:border-black/70 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-black">
                    {[...Array(5)].map((_, i) =>
                      i < vouch.rating ? (
                        <FaStar key={i} className="size-3.5 fill-black" />
                      ) : (
                        <FaRegStar key={i} className="size-3.5 text-neutral-300" />
                      )
                    )}
                  </div>
                  <span className="border border-black bg-black text-white px-2 py-0.5 font-['Inter'] text-[9px] font-bold uppercase tracking-wider">
                    {vouch.role || "CLIENT"}
                  </span>
                </div>

                <p className="font-['Inter'] text-[14px] text-[#2c2c2c] leading-relaxed mb-6 italic">
                  &ldquo;{vouch.comment}&rdquo;
                </p>
              </div>

              <div className="border-t border-black/20 pt-4 flex items-center justify-between gap-2">
                <div>
                  <span className="font-['Montserrat'] text-[14px] font-bold text-black block truncate">
                    {vouch.name}
                  </span>
                  {vouch.handle && (
                    <span className="font-mono text-[11px] text-[#5c5f60] block truncate">
                      {vouch.handle}
                    </span>
                  )}
                </div>

                <div className="text-right shrink-0">
                  {vouch.transactionNominal && (
                    <span className="font-mono text-[11px] font-bold text-black block">
                      {vouch.transactionNominal}
                    </span>
                  )}
                  <span className="font-['Inter'] text-[10px] text-[#8c8c8c] uppercase tracking-wider block">
                    {new Date(vouch.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Submission Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 sm:p-6"
        >
          <div className="w-full max-w-xl border border-black bg-white p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto font-['Inter']">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-black pb-4 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5c5f60] block">
                  TRANSACTION TESTIMONIAL
                </span>
                <h3 className="font-['Montserrat'] text-[22px] font-black uppercase">SUBMIT VOUCH</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setFeedback(null);
                }}
                className="size-9 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="size-4" />
              </button>
            </div>

            {/* Feedback Alert */}
            {feedback && (
              <div
                className={`p-4 border mb-6 text-[13px] font-bold flex items-center gap-3 ${
                  feedback.type === "success"
                    ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                    : "bg-rose-50 border-rose-500 text-rose-900"
                }`}
              >
                {feedback.type === "success" ? (
                  <FaCheckCircle className="size-5 shrink-0 text-emerald-600" />
                ) : null}
                <span>{feedback.message}</span>
              </div>
            )}

            {feedback?.type === "success" ? (
              <div className="py-8 text-center">
                <p className="text-[14px] text-[#5c5f60] mb-4">
                  Zaidaan will review your vouch in the console dashboard. Once approved, it will appear here publicly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setFeedback(null);
                  }}
                  className="border border-black bg-black text-white px-8 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer"
                >
                  DONE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bot suppression */}
                <input
                  type="text"
                  name="website_url_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Rating Stars Selection */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 hover:scale-110 transition-transform cursor-pointer"
                        aria-label={`${star} Stars`}
                      >
                        <FaStar
                          className={`size-6 ${
                            star <= rating ? "fill-black text-black" : "text-neutral-300"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 font-mono text-[13px] font-bold">{rating} / 5</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">
                      Your Name / Display Name *
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="e.g. Alex M."
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">
                      Your Contact (Discord / Facebook)
                    </label>
                    <input
                      name="handle"
                      placeholder="e.g. @alex#1234 or fb.me/alex"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">
                      Transaction Role
                    </label>
                    <select
                      name="role"
                      defaultValue="Buyer"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none cursor-pointer"
                    >
                      <option value="Buyer">Buyer (Pembeli)</option>
                      <option value="Seller">Seller (Penjual)</option>
                      <option value="Trader">Trader (Barter / Trade)</option>
                      <option value="Client">Client / Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">
                      Transaction Nominal (Optional)
                    </label>
                    <input
                      name="transaction_nominal"
                      placeholder="e.g. Rp 350.000 or $50"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">
                    Your Review / Testimonial *
                  </label>
                  <textarea
                    name="comment"
                    required
                    rows={4}
                    placeholder="Share how the middleman transaction went (speed, security, communication)..."
                    className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Moderation Notice */}
                <div className="border border-black bg-neutral-100 p-3 text-[11px] text-[#5c5f60]">
                  <strong>Moderation Policy:</strong> All reviews are held in a queue and approved manually in the console to prevent impersonation and spam.
                </div>

                <div className="flex gap-3 pt-4 border-t border-black">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex-1 bg-black text-white py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-neutral-800 disabled:opacity-50 transition-colors cursor-pointer"
                  >
                    {isPending ? "SUBMITTING..." : "SUBMIT FOR APPROVAL"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
