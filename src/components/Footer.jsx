import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { LEGAL_CONFIG } from "../config/legalConfig";

export default function Footer() {
  return (
    <footer className="border-t border-[#1C2D4A] bg-[#030712] text-sm text-[#94A3B8] no-print">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Column 1: Application Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-base font-bold text-white">
                {LEGAL_CONFIG.app.name} / {LEGAL_CONFIG.app.manifestTitle}
              </span>
              <span className="text-[#1C2D4A]" aria-hidden="true">·</span>
              <span className="font-mono text-xs text-[#00E676]">
                v{LEGAL_CONFIG.app.versionName} (Code {LEGAL_CONFIG.app.versionCode})
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#94A3B8] max-w-md">
              Official technical privacy documentation, Android permission disclosures,
              local storage specification, and Terms of Use for Android package{" "}
              <code className="font-mono text-white">{LEGAL_CONFIG.app.packageName}</code>.
            </p>
            <div className="pt-1 text-xs text-[#94A3B8] space-y-1">
              <div>
                <span className="font-medium text-white">Developer / Legal Entity: </span>
                <span className="font-mono text-[#FFB300]">
                  {LEGAL_CONFIG.placeholders.developerLegalName}
                </span>
              </div>
              <div>
                <span className="font-medium text-white">Official Website URL: </span>
                <span className="font-mono text-[#FFB300]">
                  {LEGAL_CONFIG.placeholders.officialWebsiteUrl}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Legal Documents */}
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
                  Privacy Policy (/privacy-policy)
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Terms of Use (/terms-of-use)
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy#permissions-section"
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Android Permissions Table
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy#local-storage"
                  className="hover:text-[#00FF88] transition-colors"
                >
                  SharedPreferences Registry
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy#data-deletion"
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Data Retention & Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: External Services & Support */}
          <div className="md:col-span-4 space-y-2.5">
            <h2 className="text-xs font-semibold tracking-wider text-white">
              Third-Party Policies & Support Channels
            </h2>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={LEGAL_CONFIG.unityAds.privacyPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#00E5FF] transition-colors"
                >
                  <span>Unity Privacy Policy (SDK {LEGAL_CONFIG.unityAds.sdkArtifact})</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
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
                    {LEGAL_CONFIG.whatsappSupport.accountName} ({LEGAL_CONFIG.whatsappSupport.phoneNumber})
                  </span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li className="pt-1 text-[11px] leading-relaxed text-[#94A3B8]">
                Support Email:{" "}
                <span className="font-mono text-[#FFB300]">
                  {LEGAL_CONFIG.placeholders.supportEmail}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Disclaimer Bar */}
        <div className="mt-10 border-t border-[#1E293B] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            Documentation prepared for <strong className="text-white">{LEGAL_CONFIG.app.name}</strong> (
            <code className="font-mono text-white">{LEGAL_CONFIG.app.packageName}</code> · Version{" "}
            <code className="font-mono text-white">{LEGAL_CONFIG.app.versionName}</code>).
          </p>
          <p className="text-[11px] text-[#94A3B8]">
            Transparent technical disclosure · Fields marked with{" "}
            <span className="text-[#FFB300] font-medium">Developer Confirmation Required</span>{" "}
            await final publisher entry.
          </p>
        </div>
      </div>
    </footer>
  );
}
