import type { ComponentType } from "react";
import {
  SiClaude,
  SiCloudinary,
  SiDiscord,
  SiGithub,
  SiGooglegemini,
  SiMikrotik,
  SiNextdotjs,
  SiPython,
  SiSupabase,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";
import type { ToolIconKey } from "@/types/portfolio";

type ToolIconConfig = {
  icon: ComponentType<{
    className?: string;
    "aria-hidden"?: boolean;
  }>;
};

const iconMap: Record<string, ToolIconConfig> = {
  discord: { icon: SiDiscord },
  telegram: { icon: SiTelegram },
  whatsapp: { icon: SiWhatsapp },
  github: { icon: SiGithub },
  python: { icon: SiPython },
  nextjs: { icon: SiNextdotjs },
  supabase: { icon: SiSupabase },
  cloudinary: { icon: SiCloudinary },
  mikrotik: { icon: SiMikrotik },
  claude: { icon: SiClaude },
  gemini: { icon: SiGooglegemini },
  // OpenAI / ChatGPT exact icon isn't available in this version.
  // Using Anthropic icon directly for Antigravity is invalid.
};

export function ToolIcon({ iconKey }: { iconKey: ToolIconKey }) {
  const config = iconMap[iconKey];

  if (!config) {
    return null;
  }

  const Icon = config.icon;

  return (
    <Icon
      aria-hidden={true}
      className="tool-icon size-5 shrink-0"
    />
  );
}
