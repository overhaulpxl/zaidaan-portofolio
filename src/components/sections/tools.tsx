import { SectionHeading } from "@/components/ui/section-heading";
import { ToolIcon } from "@/components/ui/tool-icon";
import { toolGroups } from "@/content/tools";

export function ToolsSection() {
  const sortedGroups = [...toolGroups].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="tools" className="border-t border-glass-border py-20 sm:py-28" aria-labelledby="tools-heading">
      <SectionHeading id="tools-heading" className="mb-12 sm:mb-16">Tools & Platforms</SectionHeading>

      <div className="space-y-12 sm:space-y-16">
        {sortedGroups.map((group) => {
          const sortedTools = [...group.tools].sort((a, b) => a.sortOrder - b.sortOrder);

          return (
            <div key={group.title} className="grid gap-6 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="border-t border-glass-border pt-4">
                <h3 className="font-semibold text-foreground">{group.title}</h3>
                <p className="mt-2 text-sm text-muted">{String(sortedTools.length).padStart(2, "0")} tools</p>
              </div>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] lg:border-t lg:border-glass-border lg:pt-4">
                {sortedTools.map((tool) => (
                  <li key={tool.name}>
                    <div className="flex h-full min-h-14 items-center gap-3 rounded-xl border border-glass-border bg-surface p-4 shadow-soft">
                      {tool.iconKey && <ToolIcon iconKey={tool.iconKey} />}
                      <span className="min-w-0 text-sm font-medium text-muted leading-snug">{tool.name}</span>
                    </div>
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