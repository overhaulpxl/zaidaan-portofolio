import type { ComponentType } from "react";
import {
  Code2,
  Film,
  ImageIcon,
  LayoutGrid,
  Palette,
  PenTool,
  Router,
  Scissors,
} from "lucide-react";
import {
  SiCloudinary,
  SiDiscord,
  SiGithub,
  SiMikrotik,
  SiNextdotjs,
  SiPython,
  SiSupabase,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";
import type { ToolIconKey } from "@/types";

type ToolIconConfig = {
  icon: ComponentType<{
    className?: string;
    "aria-hidden"?: boolean;
  }>;
};

const iconMap: Record<ToolIconKey, ToolIconConfig> = {
  discord: { icon: SiDiscord },
  telegram: { icon: SiTelegram },
  whatsapp: { icon: SiWhatsapp },
  "microsoft-office": { icon: LayoutGrid },
  "visual-studio-code": { icon: Code2 },
  github: { icon: SiGithub },
  python: { icon: SiPython },
  nextjs: { icon: SiNextdotjs },
  supabase: { icon: SiSupabase },
  cloudinary: { icon: SiCloudinary },
  mikrotik: { icon: SiMikrotik },
  winbox: { icon: Router },
  "after-effects": { icon: Film },
  photoshop: { icon: ImageIcon },
  affinity: { icon: PenTool },
  canva: { icon: Palette },
  capcut: { icon: Scissors },
};

export function ToolIcon({ iconKey }: { iconKey: ToolIconKey }) {
  const Icon = iconMap[iconKey].icon;

  return (
    <Icon
      aria-hidden={true}
      className="tool-icon size-5 shrink-0"
    />
  );
}
