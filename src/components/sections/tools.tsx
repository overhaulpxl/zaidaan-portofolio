import { LiquidGlassSurface } from "@/components/glass/liquid-glass-surface";
import { SectionHeading } from "@/components/ui/section-heading";
import { ToolIcon } from "@/components/ui/tool-icon";
import { tools } from "@/content/tools";
import type { ToolCategory } from "@/types";

const categories: ToolCategory[] = [
  "Operations & Communication",
  "Development & Automation",
  "Networking & IT",
  "Creative",
];

export function ToolsSection() {
  return (
    <section className="border-t border-glass-border py-20 sm:py-28" aria-labelledby="tools-heading">
      <SectionHeading id="tools-heading">Tools & Platforms</SectionHeading>

      <div className="space-y-10">
        {categories.map((category) => {
          const categoryTools = tools.filter((tool) => tool.category === category);
          return (
            <div key={category} className="grid gap-4 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8">
              <div className="flex items-baseline justify-between gap-4 border-t border-glass-border pt-4 lg:block">
                <h3 className="font-semibold">{category}</h3>
                <p className="mt-2 text-sm text-muted">{String(categoryTools.length).padStart(2, "0")} tools</p>
              </div>

              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fit,minmax(10.5rem,1fr))]">
                {categoryTools.map((tool) => (
                  <li key={tool.name}>
                    <LiquidGlassSurface className="group h-full rounded-xl" intensity={0} cornerRadius={12}>
                      <div className="flex min-h-16 h-full items-center gap-3 px-4 py-3">
                        <ToolIcon iconKey={tool.icon} />
                        <span className="min-w-0 text-sm font-semibold leading-snug">{tool.name}</span>
                      </div>
                    </LiquidGlassSurface>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
