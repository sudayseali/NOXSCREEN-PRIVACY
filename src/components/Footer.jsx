import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { LEGAL_CONFIG } from "../config/legalConfig";

export default function Footer() {
  return (
    <footer className="border-t border-[#1C2D4A] bg-[#030712] text-sm text-[#94A3B8] no-print">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Column 1: Application & Developer Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-base font-bold text-white">
                {LEGAL_CONFIG.app.name}
              </span>
              <span className="text-[#1C2D4A]" aria-hidden="true">
                ·
              </span>
              <span className="font-mono text-xs text-[#00E676]">
                v{LEGAL_CONFIG.app.versionName}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#94A3B8] max-w-md">
              Official Privacy Policy, Terms of Use, Android permission
              disclosures, and local storage documentation for{" "}
              <strong className="text-white">{LEGAL_CONFIG.app.name}</strong> (
              <code className="font-mono text-white">
                {LEGAL_CONFIG.app.packageName}
              </code>
              ).
            </p>
            <div className="pt-1 text-xs text-[#94A3B8] space-y-1.5">
              <div>
                <span className="font-medium text-white">Developer: </span>
                <span className="text-[#E2E8F0]">
                  {LEGAL_CONFIG.developer.name} ({LEGAL_CONFIG.developer.type})
                </span>
              </div>
              <div className="break-all">
                <span className="font-medium text-white">Support: </span>
                <a
                  href={`mailto:${LEGAL_CONFIG.developer.email}`}
                  className="font-mono text-[#00E5FF] underline hover:text-white transition-colors"
                >
                  {LEGAL_CONFIG.developer.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Legal Documentation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h2 className="text-xs font-semibold tracking-wider text-white">
              Legal Documentation
            </h2>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy#permissions-section"
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Android Permissions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy#data-deletion"
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Data Retention &amp; Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: External Services & Support */}
          <div className="md:col-span-4 space-y-2.5">
            <h2 className="text-xs font-semibold tracking-wider text-white">
              Third-Party Policies &amp; Support
            </h2>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={LEGAL_CONFIG.unityAds.privacyPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#00E5FF] transition-colors"
                >
                  <span>Unity Privacy Policy</span>
                  <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={LEGAL_CONFIG.whatsappSupport.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#00FF88] transition-colors"
                >
                  <span>
                    WhatsApp Support ({LEGAL_CONFIG.whatsappSupport.phoneNumber})
                  </span>
                  <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-10 border-t border-[#1E293B] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            <strong className="text-white">{LEGAL_CONFIG.app.name}</strong> ·{" "}
            <code className="font-mono text-white">
              {LEGAL_CONFIG.app.packageName}
            </code>{" "}
            · Version{" "}
            <code className="font-mono text-white">
              {LEGAL_CONFIG.app.versionName}
            </code>
          </p>
          <p className="text-[11px] text-[#94A3B8]">
            Effective: {LEGAL_CONFIG.placeholders.effectiveDate} · Last Updated:{" "}
            {LEGAL_CONFIG.placeholders.lastUpdatedDate}
          </p>
        </div>
      </div>
    </footer>
  );
}
