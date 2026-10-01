import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";

export default function TableOfContents({ sections = [], documentTitle = "Contents" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  useEffect(() => {
    if (!sections.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = sections[0].id;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = sec.id;
        }
      }
      setActiveId(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
      {/* Mobile Collapsible Jump Menu (Section 39) */}
      <div className="lg:hidden mb-8 no-print">
        <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324]">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-toc-list"
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white"
          >
            <span className="flex items-center gap-2">
              <List className="h-4 w-4 text-[#00E676]" aria-hidden="true" />
              <span>Jump to Section ({sections.length} Sections)</span>
            </span>
            {mobileOpen ? (
              <ChevronUp className="h-4 w-4 text-[#94A3B8]" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-4 w-4 text-[#94A3B8]" aria-hidden="true" />
            )}
          </button>

          {mobileOpen && (
            <nav
              id="mobile-toc-list"
              aria-label={`${documentTitle} Mobile Table of Contents`}
              className="border-t border-[#1E293B] px-3 py-3 max-h-80 overflow-y-auto"
            >
              <ol className="space-y-1 text-xs">
                {sections.map((section, idx) => {
                  const isActive = activeId === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={() => setMobileOpen(false)}
                        aria-current={isActive ? "location" : undefined}
                        className={`flex items-baseline gap-2.5 rounded px-2.5 py-2 transition-colors ${
                          isActive
                            ? "bg-[#091122] text-[#00FF88] font-medium"
                            : "text-[#94A3B8] hover:bg-[#091122] hover:text-white"
                        }`}
                      >
                        <span className="font-mono text-[11px] text-[#00E676] tabular-nums shrink-0">
                          {String(idx + 1).padStart(2, "0")}.
                        </span>
                        <span>{section.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}
        </div>
      </div>

      {/* Desktop Sticky Sidebar Table of Contents (Section 39) */}
      <aside
        aria-label={`${documentTitle} Table of Contents`}
        className="hidden lg:block lg:w-72 xl:w-80 shrink-0 no-print"
      >
        <div className="sticky top-24 rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-5 max-h-[calc(100vh-7.5rem)] overflow-y-auto">
          <div className="mb-3 flex items-center justify-between border-b border-[#1E293B] pb-2.5">
            <h2 className="text-xs font-semibold tracking-wider text-white">
              {documentTitle}
            </h2>
            <span className="font-mono text-[11px] text-[#94A3B8] tabular-nums">
              {sections.length} Sections
            </span>
          </div>

          <nav aria-label="Section navigation">
            <ol className="space-y-1 text-xs">
              {sections.map((section, idx) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={`group flex items-baseline gap-2.5 rounded-md px-2.5 py-1.5 transition-colors ${
                        isActive
                          ? "bg-[#091122] text-[#00FF88] font-semibold border-l-2 border-[#00E676]"
                          : "text-[#94A3B8] hover:bg-[#091122]/60 hover:text-white"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] tabular-nums shrink-0 ${
                          isActive ? "text-[#00E676]" : "text-[#94A3B8] group-hover:text-white"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      <span className="leading-snug">{section.label}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </aside>
    </>
  );
}
