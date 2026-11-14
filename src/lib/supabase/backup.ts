import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only backup helpers for Supabase site_settings data.
 * Snapshots are stored under the `settings_history` key in site_settings,
 * capped at 50 entries (newest first). Export is exposed through the
 * console settings tab.
 */
export async function snapshotSiteSettingsValue(
  admin: SupabaseClient,
  key: string,
  previousValue: unknown,
  reason: string
): Promise<void> {
  try {
    const { data } = await admin
      .from("site_settings")
      .select("value")
      .eq("key", "settings_history")
      .maybeSingle();

    const existing = Array.isArray(data?.value?.entries) ? data.value.entries : [];
    const entry = {
      key,
      value: previousValue ?? null,
      reason,
      at: new Date().toISOString(),
    };
    const entries = [entry, ...existing].slice(0, 50);

    await admin.from("site_settings").upsert({
      key: "settings_history",
      value: { entries },
      updated_at: new Date().toISOString(),
    });
  } catch {
    // Backup is best-effort and must never block the actual operation.
  }
}
