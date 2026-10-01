import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Printer, ExternalLink } from "lucide-react";
import { LEGAL_CONFIG } from "../config/legalConfig";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1C2D4A] bg-[#020612]/95 backdrop-blur-md no-print">
      {/* Skip to main content link for keyboard/screen-reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[#00E676] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#020612]"
      >
        Skip to main legal content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Identity (Section 35: NoXScreen PRO ECO SCREEN OPTIMIZER) */}
        <Link
          to="/privacy-policy"
          className="group flex items-center gap-3 text-left focus:outline-none"
          aria-label="NoXScreen Pro Eco Screen Optimizer Legal Documentation Home"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1C2D4A] bg-[#091122] font-mono text-sm font-bold text-[#00E676] transition-colors group-hover:border-[#00E676]/60">
            NX
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight text-white">
                {LEGAL_CONFIG.app.name}
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#00E676]">
                PRO
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8]">
              {LEGAL_CONFIG.app.tagline}
            </span>
          </div>
        </Link>

        {/* Zone 2: Primary Legal Navigation */}
        <nav
          aria-label="Legal Documents Navigation"
          className="hidden md:flex items-center gap-8"
        >
          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              `relative py-1 text-sm font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? "text-[#00FF88] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#00E676]"
                  : "text-[#94A3B8] hover:text-white"
              }`
            }
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms-of-use"
            className={({ isActive }) =>
              `relative py-1 text-sm font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? "text-[#00FF88] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#00E676]"
                  : "text-[#94A3B8] hover:text-white"
              }`
            }
          >
            Terms of Use
          </NavLink>
          <a
            href="#permissions-section"
            className="py-1 text-sm font-medium text-[#94A3B8] transition-colors hover:text-white whitespace-nowrap"
          >
            Permissions Audit
          </a>
          <a
            href="#contact-section"
            className="py-1 text-sm font-medium text-[#94A3B8] transition-colors hover:text-white whitespace-nowrap"
          >
            Contact & Support
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Print/PDF & WhatsApp Support CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-lg border border-[#1C2D4A] bg-[#0B1324] px-3.5 py-2 text-xs font-medium text-[#94A3B8] transition-colors hover:border-[#00E5FF]/50 hover:text-white whitespace-nowrap cursor-pointer"
            title="Print or Save Legal Document as PDF"
          >
            <Printer className="h-3.5 w-3.5 text-[#00E5FF]" aria-hidden="true" />
            <span>Print / PDF</span>
          </button>

          <a
            href={LEGAL_CONFIG.whatsappSupport.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#00E676] px-4 py-2 text-xs font-semibold text-[#020612] transition-colors hover:bg-[#00FF88] whitespace-nowrap"
          >
            <span>WhatsApp Support</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-legal-nav"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#1C2D4A] bg-[#0B1324] text-white hover:border-[#00E676]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-[#00E676]" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 text-white" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-legal-nav"
          className="border-t border-[#1C2D4A] bg-[#030712] px-4 pt-3 pb-5 md:hidden"
        >
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isActive
                    ? "bg-[#0B1324] text-[#00FF88] border border-[#00E676]/40"
                    : "text-[#94A3B8] hover:bg-[#091122] hover:text-white"
                }`
              }
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-of-use"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isActive
                    ? "bg-[#0B1324] text-[#00FF88] border border-[#00E676]/40"
                    : "text-[#94A3B8] hover:bg-[#091122] hover:text-white"
                }`
              }
            >
              Terms of Use
            </NavLink>
            <div className="pt-2 flex flex-col gap-2.5 border-t border-[#1E293B]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handlePrint();
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1C2D4A] bg-[#0B1324] px-4 py-2.5 text-xs font-medium text-white"
              >
                <Printer className="h-4 w-4 text-[#00E5FF]" aria-hidden="true" />
                <span>Print / Save as PDF</span>
              </button>
              <a
                href={LEGAL_CONFIG.whatsappSupport.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00E676] px-4 py-2.5 text-xs font-semibold text-[#020612]"
              >
                <span>WhatsApp Support ({LEGAL_CONFIG.whatsappSupport.phoneNumber})</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
