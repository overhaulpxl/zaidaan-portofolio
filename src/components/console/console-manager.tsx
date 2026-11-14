"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import {
  saveProjectAction,
  deleteProjectAction,
  toggleProjectFieldAction,
  saveCertificateAction,
  deleteCertificateAction,
  toggleCertificatePublishedAction,
  saveSiteSettingsAction,
} from "@/lib/actions/console";

export type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  filters?: string[];
  status: string;
  description: string;
  role: string;
  technologies?: string[];
  featured_technologies?: string[];
  year?: string | null;
  featured: boolean;
  published: boolean;
  sort_order: number;
  links?: { label: string; href: string }[];
  media?: unknown;
};

export type CertificateRow = {
  id: string;
  title: string;
  issuer?: string | null;
  issued_label: string;
  issued_date?: string | null;
  level?: string | null;
  score_label?: string | null;
  score_value?: string | null;
  duration?: string | null;
  document_url?: string | null;
  published: boolean;
  sort_order: number;
};

export type SettingsRow = {
  availability: string;
  totalProofs: number;
};

type Props = {
  initialProjects: ProjectRow[];
  initialCertificates: CertificateRow[];
  initialSettings: SettingsRow;
  manifestStats: {
    count: number;
    generatedAt: string;
    storageUrl: string;
  };
};

export function ConsoleManager({
  initialProjects,
  initialCertificates,
  initialSettings,
  manifestStats,
}: Props) {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "settings" | "testimonials">("projects");
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Editing state for Project
  const [editingProject, setEditingProject] = useState<ProjectRow | null>(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  // Editing state for Certificate
  const [editingCert, setEditingCert] = useState<CertificateRow | null>(null);
  const [showCertForm, setShowCertForm] = useState(false);

  function notify(text: string, type: "success" | "error" = "success") {
    setFeedback({ type, text });
    setTimeout(() => setFeedback(null), 4000);
  }

  // Handle Project Form Submission
  async function handleProjectSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        await saveProjectAction(formData);
        notify("Project saved successfully.");
        setShowProjectForm(false);
        setEditingProject(null);
      } catch (err: unknown) {
        notify(err instanceof Error ? err.message : "Failed to save project", "error");
      }
    });
  }

  // Handle Certificate Form Submission
  async function handleCertSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        await saveCertificateAction(formData);
        notify("Certificate saved successfully.");
        setShowCertForm(false);
        setEditingCert(null);
      } catch (err: unknown) {
        notify(err instanceof Error ? err.message : "Failed to save certificate", "error");
      }
    });
  }

  // Handle Site Settings Submission
  async function handleSettingsSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        await saveSiteSettingsAction(formData);
        notify("Site settings updated successfully.");
      } catch (err: unknown) {
        notify(err instanceof Error ? err.message : "Failed to save settings", "error");
      }
    });
  }

  return (
    <div className="w-full">
      {/* Toast Feedback */}
      {feedback && (
        <div
          className={`mb-6 p-4 border text-[13px] font-bold uppercase tracking-wider flex items-center justify-between ${
            feedback.type === "success"
              ? "bg-emerald-50 border-emerald-500 text-emerald-900"
              : "bg-rose-50 border-rose-500 text-rose-900"
          }`}
        >
          <span>{feedback.text}</span>
          <button onClick={() => setFeedback(null)} className="underline cursor-pointer">
            DISMISS
          </button>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-black pb-4 mb-8">
        {[
          { id: "projects", label: `PROJECTS (${initialProjects.length})` },
          { id: "certificates", label: `CERTIFICATES (${initialCertificates.length})` },
          { id: "settings", label: "SITE SETTINGS" },
          { id: "testimonials", label: `TESTIMONIALS (${manifestStats.count})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as typeof activeTab);
              setShowProjectForm(false);
              setShowCertForm(false);
            }}
            className={`px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-colors border ${
              activeTab === tab.id
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black hover:bg-neutral-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: PROJECTS */}
      {activeTab === "projects" && (
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-['Montserrat'] text-[24px] font-black uppercase">Projects Catalog</h2>
              <p className="text-[13px] text-[#5c5f60]">Live records in Supabase `projects` table.</p>
            </div>
            {!showProjectForm && (
              <button
                onClick={() => {
                  setEditingProject(null);
                  setShowProjectForm(true);
                }}
                className="bg-black text-white px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors border border-black cursor-pointer"
              >
                + ADD NEW PROJECT
              </button>
            )}
          </div>

          {/* PROJECT CREATE / EDIT FORM */}
          {showProjectForm && (
            <div className="border border-black bg-white p-6 md:p-8 mb-8 shadow-sm">
              <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
                <h3 className="font-['Montserrat'] text-[18px] font-black uppercase">
                  {editingProject ? `EDIT: ${editingProject.title}` : "CREATE NEW PROJECT"}
                </h3>
                <button
                  type="button"
                  onClick={() => setShowProjectForm(false)}
                  className="text-[12px] font-bold uppercase underline hover:opacity-70 cursor-pointer"
                >
                  CANCEL
                </button>
              </div>

              <form onSubmit={handleProjectSubmit} className="space-y-5">
                {editingProject && <input type="hidden" name="id" value={editingProject.id} />}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Project Title *</label>
                    <input
                      name="title"
                      required
                      defaultValue={editingProject?.title || ""}
                      placeholder="e.g. NORDEN Finance"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Slug *</label>
                    <input
                      name="slug"
                      required
                      defaultValue={editingProject?.slug || ""}
                      placeholder="e.g. norden-finance"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Category</label>
                    <input
                      name="category"
                      defaultValue={editingProject?.category || "Websites"}
                      placeholder="e.g. Websites, Bots, Services"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Status</label>
                    <input
                      name="status"
                      defaultValue={editingProject?.status || "Completed · Live"}
                      placeholder="e.g. Completed · Live, Active Service"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Sort Order</label>
                    <input
                      name="sort_order"
                      type="number"
                      defaultValue={editingProject?.sort_order ?? 0}
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Role / Responsibility</label>
                  <input
                    name="role"
                    defaultValue={editingProject?.role || ""}
                    placeholder="e.g. Product Development, Full-Stack Engineering"
                    className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Description</label>
                  <textarea
                    name="description"
                    rows={3}
                    defaultValue={editingProject?.description || ""}
                    placeholder="High-level description of scope, purpose, and results..."
                    className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Technologies (comma separated)</label>
                    <input
                      name="technologies"
                      defaultValue={editingProject?.technologies?.join(", ") || ""}
                      placeholder="Next.js, TypeScript, PostgreSQL"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Featured Tech Chips (comma separated)</label>
                    <input
                      name="featured_technologies"
                      defaultValue={editingProject?.featured_technologies?.join(", ") || ""}
                      placeholder="Next.js, PostgreSQL"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Primary Link Label</label>
                    <input
                      name="link_label"
                      defaultValue={editingProject?.links?.[0]?.label || "Visit Website"}
                      placeholder="e.g. Visit Website"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Primary Link URL</label>
                    <input
                      name="link_href"
                      defaultValue={editingProject?.links?.[0]?.href || ""}
                      placeholder="https://example.com"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-[13px] font-bold uppercase">
                    <input
                      type="checkbox"
                      name="featured"
                      defaultChecked={editingProject?.featured ?? true}
                      className="w-4 h-4 accent-black"
                    />
                    Featured on Homepage
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer text-[13px] font-bold uppercase">
                    <input
                      type="checkbox"
                      name="published"
                      defaultChecked={editingProject?.published ?? true}
                      className="w-4 h-4 accent-black"
                    />
                    Published / Visible
                  </label>
                </div>

                <div className="flex gap-3 pt-4 border-t border-black">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="bg-black text-white px-8 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-800 disabled:opacity-50 transition-colors cursor-pointer"
                  >
                    {isPending ? "SAVING..." : "SAVE PROJECT"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowProjectForm(false)}
                    className="border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* PROJECTS LIST TABLE */}
          <div className="border border-black bg-white overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-black bg-neutral-100 text-[11px] font-black uppercase tracking-wider">
                  <th className="p-3 border-r border-black w-14 text-center">ORDER</th>
                  <th className="p-3 border-r border-black">TITLE / SLUG</th>
                  <th className="p-3 border-r border-black">CATEGORY</th>
                  <th className="p-3 border-r border-black">STATUS</th>
                  <th className="p-3 border-r border-black text-center">FLAGS</th>
                  <th className="p-3 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black font-['Inter']">
                {initialProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-neutral-50">
                    <td className="p-3 border-r border-black font-mono font-bold text-center">
                      {project.sort_order}
                    </td>
                    <td className="p-3 border-r border-black">
                      <p className="font-bold text-black">{project.title}</p>
                      <span className="text-[11px] font-mono text-[#5c5f60]">{project.slug}</span>
                    </td>
                    <td className="p-3 border-r border-black">
                      <span className="inline-block px-2 py-0.5 border border-black text-[10px] font-bold uppercase">
                        {project.category}
                      </span>
                    </td>
                    <td className="p-3 border-r border-black text-[#444]">
                      {project.status}
                    </td>
                    <td className="p-3 border-r border-black text-center">
                      <div className="inline-flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => {
                            startTransition(async () => {
                              try {
                                await toggleProjectFieldAction(project.id, "featured", !project.featured);
                                notify(`Toggled featured for ${project.title}`);
                              } catch (err: unknown) {
                                notify(err instanceof Error ? err.message : "Failed", "error");
                              }
                            });
                          }}
                          title="Click to toggle featured"
                          className={`px-1.5 py-0.5 text-[10px] font-bold uppercase border border-black cursor-pointer ${
                            project.featured ? "bg-black text-white" : "bg-neutral-200 text-neutral-500"
                          }`}
                        >
                          {project.featured ? "FEATURED" : "STANDARD"}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            startTransition(async () => {
                              try {
                                await toggleProjectFieldAction(project.id, "published", !project.published);
                                notify(`Toggled published for ${project.title}`);
                              } catch (err: unknown) {
                                notify(err instanceof Error ? err.message : "Failed", "error");
                              }
                            });
                          }}
                          title="Click to toggle visibility"
                          className={`px-1.5 py-0.5 text-[10px] font-bold uppercase border border-black cursor-pointer ${
                            project.published ? "bg-emerald-100 text-emerald-800 border-emerald-500" : "bg-rose-100 text-rose-800 border-rose-500"
                          }`}
                        >
                          {project.published ? "LIVE" : "DRAFT"}
                        </button>
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            setEditingProject(project);
                            setShowProjectForm(true);
                          }}
                          className="px-3 py-1 border border-black text-[11px] font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
                        >
                          EDIT
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete project "${project.title}"? This cannot be undone.`)) {
                              startTransition(async () => {
                                try {
                                  await deleteProjectAction(project.id);
                                  notify(`Deleted project ${project.title}`);
                                } catch (err: unknown) {
                                  notify(err instanceof Error ? err.message : "Failed to delete", "error");
                                }
                              });
                            }
                          }}
                          className="px-3 py-1 border border-rose-600 text-rose-600 text-[11px] font-bold uppercase hover:bg-rose-600 hover:text-white transition-colors cursor-pointer"
                        >
                          DEL
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: CERTIFICATES */}
      {activeTab === "certificates" && (
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-['Montserrat'] text-[24px] font-black uppercase">Certificates Catalog</h2>
              <p className="text-[13px] text-[#5c5f60]">Live records in Supabase `certificates` table.</p>
            </div>
            {!showCertForm && (
              <button
                onClick={() => {
                  setEditingCert(null);
                  setShowCertForm(true);
                }}
                className="bg-black text-white px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors border border-black cursor-pointer"
              >
                + ADD NEW CERTIFICATE
              </button>
            )}
          </div>

          {/* CERTIFICATE FORM */}
          {showCertForm && (
            <div className="border border-black bg-white p-6 md:p-8 mb-8 shadow-sm">
              <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
                <h3 className="font-['Montserrat'] text-[18px] font-black uppercase">
                  {editingCert ? `EDIT: ${editingCert.title}` : "CREATE NEW CERTIFICATE"}
                </h3>
                <button
                  type="button"
                  onClick={() => setShowCertForm(false)}
                  className="text-[12px] font-bold uppercase underline hover:opacity-70 cursor-pointer"
                >
                  CANCEL
                </button>
              </div>

              <form onSubmit={handleCertSubmit} className="space-y-5">
                {editingCert && <input type="hidden" name="id" value={editingCert.id} />}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Title *</label>
                    <input
                      name="title"
                      required
                      defaultValue={editingCert?.title || ""}
                      placeholder="e.g. Goethe-Zertifikat B1"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Issuer</label>
                    <input
                      name="issuer"
                      defaultValue={editingCert?.issuer || ""}
                      placeholder="e.g. Goethe-Institut"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Issued Date Label *</label>
                    <input
                      name="issued_label"
                      required
                      defaultValue={editingCert?.issued_label || ""}
                      placeholder="e.g. Jul 2025"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Level / Grade</label>
                    <input
                      name="level"
                      defaultValue={editingCert?.level || ""}
                      placeholder="e.g. B1"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Sort Order</label>
                    <input
                      name="sort_order"
                      type="number"
                      defaultValue={editingCert?.sort_order ?? 0}
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Score Label</label>
                    <input
                      name="score_label"
                      defaultValue={editingCert?.score_label || ""}
                      placeholder="e.g. Training Activity Score"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Score Value</label>
                    <input
                      name="score_value"
                      defaultValue={editingCert?.score_value || ""}
                      placeholder="e.g. 88"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Duration</label>
                    <input
                      name="duration"
                      defaultValue={editingCert?.duration || ""}
                      placeholder="e.g. 14h 56m"
                      className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Document URL (PDF / Drive)</label>
                  <input
                    name="document_url"
                    defaultValue={editingCert?.document_url || ""}
                    placeholder="e.g. /documents/certificates/example.pdf or Google Drive link"
                    className="w-full border border-black p-2.5 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-[13px] font-bold uppercase">
                    <input
                      type="checkbox"
                      name="published"
                      defaultChecked={editingCert?.published ?? true}
                      className="w-4 h-4 accent-black"
                    />
                    Published / Visible
                  </label>
                </div>

                <div className="flex gap-3 pt-4 border-t border-black">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="bg-black text-white px-8 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-800 disabled:opacity-50 transition-colors cursor-pointer"
                  >
                    {isPending ? "SAVING..." : "SAVE CERTIFICATE"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCertForm(false)}
                    className="border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* CERTIFICATES LIST TABLE */}
          <div className="border border-black bg-white overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-black bg-neutral-100 text-[11px] font-black uppercase tracking-wider">
                  <th className="p-3 border-r border-black w-14 text-center">ORDER</th>
                  <th className="p-3 border-r border-black">TITLE</th>
                  <th className="p-3 border-r border-black">ISSUER</th>
                  <th className="p-3 border-r border-black">DATE / LEVEL</th>
                  <th className="p-3 border-r border-black text-center">STATUS</th>
                  <th className="p-3 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black font-['Inter']">
                {initialCertificates.map((cert) => (
                  <tr key={cert.id} className="hover:bg-neutral-50">
                    <td className="p-3 border-r border-black font-mono font-bold text-center">
                      {cert.sort_order}
                    </td>
                    <td className="p-3 border-r border-black">
                      <p className="font-bold text-black">{cert.title}</p>
                      {cert.document_url && (
                        <a
                          href={cert.document_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono text-[#5c5f60] underline"
                        >
                          View Document ↗
                        </a>
                      )}
                    </td>
                    <td className="p-3 border-r border-black text-[#444]">
                      {cert.issuer || "—"}
                    </td>
                    <td className="p-3 border-r border-black">
                      <span className="font-semibold">{cert.issued_label}</span>
                      {cert.level && <span className="ml-2 text-[10px] bg-neutral-200 px-1.5 py-0.5 border border-black font-bold uppercase">{cert.level}</span>}
                    </td>
                    <td className="p-3 border-r border-black text-center">
                      <button
                        type="button"
                        onClick={() => {
                          startTransition(async () => {
                            try {
                              await toggleCertificatePublishedAction(cert.id, !cert.published);
                              notify(`Toggled visibility for ${cert.title}`);
                            } catch (err: unknown) {
                              notify(err instanceof Error ? err.message : "Failed", "error");
                            }
                          });
                        }}
                        className={`px-2 py-0.5 text-[10px] font-bold uppercase border border-black cursor-pointer ${
                          cert.published ? "bg-emerald-100 text-emerald-800 border-emerald-500" : "bg-rose-100 text-rose-800 border-rose-500"
                        }`}
                      >
                        {cert.published ? "LIVE" : "DRAFT"}
                      </button>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            setEditingCert(cert);
                            setShowCertForm(true);
                          }}
                          className="px-3 py-1 border border-black text-[11px] font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
                        >
                          EDIT
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete certificate "${cert.title}"?`)) {
                              startTransition(async () => {
                                try {
                                  await deleteCertificateAction(cert.id);
                                  notify(`Deleted ${cert.title}`);
                                } catch (err: unknown) {
                                  notify(err instanceof Error ? err.message : "Failed to delete", "error");
                                }
                              });
                            }
                          }}
                          className="px-3 py-1 border border-rose-600 text-rose-600 text-[11px] font-bold uppercase hover:bg-rose-600 hover:text-white transition-colors cursor-pointer"
                        >
                          DEL
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SITE SETTINGS */}
      {activeTab === "settings" && (
        <div className="border border-black bg-white p-6 md:p-8">
          <h2 className="font-['Montserrat'] text-[24px] font-black uppercase mb-2">Global Settings</h2>
          <p className="text-[13px] text-[#5c5f60] mb-6">Manage global headline indicators and proof thresholds.</p>

          <form onSubmit={handleSettingsSubmit} className="space-y-6 max-w-2xl">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">
                Availability Badge Text
              </label>
              <input
                name="availability"
                defaultValue={initialSettings.availability}
                className="w-full border border-black p-3 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
              />
              <span className="text-[11px] text-[#5c5f60] mt-1 block">
                Shown next to active status indicator in header and profile hero.
              </span>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">
                Verified Middleman Proofs Count
              </label>
              <input
                name="total_proofs"
                type="number"
                defaultValue={initialSettings.totalProofs}
                className="w-full border border-black p-3 text-[14px] bg-neutral-50 focus:bg-white focus:outline-none"
              />
              <span className="text-[11px] text-[#5c5f60] mt-1 block">
                Official milestone displayed across middleman verification badges.
              </span>
            </div>

            <div className="pt-4 border-t border-black">
              <button
                type="submit"
                disabled={isPending}
                className="bg-black text-white px-8 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-800 disabled:opacity-50 transition-colors cursor-pointer"
              >
                {isPending ? "UPDATING..." : "UPDATE SITE SETTINGS"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 4: TESTIMONIALS STATS & STORAGE */}
      {activeTab === "testimonials" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="border border-black p-5 bg-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#5c5f60]">TOTAL EVIDENCE</span>
              <p className="font-['Montserrat'] text-[36px] font-black mt-1">{manifestStats.count}</p>
              <span className="text-[11px] text-[#5c5f60]">Items in manifest</span>
            </div>

            <div className="border border-black p-5 bg-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#5c5f60]">STORAGE TARGET</span>
              <p className="font-['Montserrat'] text-[24px] font-bold mt-2">SUPABASE</p>
              <span className="text-[11px] text-[#5c5f60]">Bucket: &apos;testimonials&apos;</span>
            </div>

            <div className="border border-black p-5 bg-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#5c5f60]">MANIFEST DATE</span>
              <p className="font-['Montserrat'] text-[24px] font-bold mt-2">{manifestStats.generatedAt || "N/A"}</p>
              <span className="text-[11px] text-[#5c5f60]">Last synchronized</span>
            </div>
          </div>

          <div className="border border-black p-6 mb-8 bg-white">
            <h3 className="font-['Montserrat'] text-[18px] font-bold uppercase mb-3">
              STORAGE ASSET RESOLUTION
            </h3>
            <p className="text-[14px] text-[#3c3c3c] leading-relaxed mb-4">
              All 2,451 customer proofs are served from Supabase public storage bucket.
            </p>
            <div className="border border-black bg-neutral-50 p-4 font-mono text-[12px] overflow-x-auto">
              <p className="text-[#5c5f60]"># Current storage base URL:</p>
              <p className="font-bold text-black mt-1">
                {manifestStats.storageUrl || "https://pwjonnqmksqfbbxrbikm.supabase.co/storage/v1/object/public/testimonials"}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href="/middleman"
              target="_blank"
              className="border border-black bg-black text-white px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              PREVIEW REKBER GALLERY ↗
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
