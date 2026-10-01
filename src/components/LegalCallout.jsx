import React, { useState } from "react";
import { Link2, Check, AlertTriangle, Info, ShieldAlert } from "lucide-react";
import { isPlaceholderValue } from "../config/legalConfig";

/**
 * Callout box for highlighting technical disclosures, safety disclaimers,
 * third-party distinctions, or pending developer confirmations.
 */
export default function LegalCallout({
  variant = "info",
  title,
  children,
  className = "",
}) {
  const styles = {
    info: {
      border: "border-[#1C2D4A] border-l-4 border-l-[#00E5FF]",
      bg: "bg-[#0B1324]",
      titleColor: "text-white",
      label: "Technical Note",
      labelColor: "text-[#00E5FF]",
      Icon: Info,
    },
    emerald: {
      border: "border-[#1C2D4A] border-l-4 border-l-[#00E676]",
      bg: "bg-[#0B1324]",
      titleColor: "text-white",
      label: "Verified Audit Fact",
      labelColor: "text-[#00E676]",
      Icon: Info,
    },
    warning: {
      border: "border-[#FFB300]/40 border-l-4 border-l-[#FFB300]",
      bg: "bg-[#0C1322]",
      titleColor: "text-white",
      label: "Important Disclosure",
      labelColor: "text-[#FFB300]",
      Icon: AlertTriangle,
    },
    safety: {
      border: "border-[#FFB300]/50 border-l-4 border-l-[#FFB300]",
      bg: "bg-[#0F172A]",
      titleColor: "text-white",
      label: "Safety & Operational Notice",
      labelColor: "text-[#FFB300]",
      Icon: ShieldAlert,
    },
  };

  const current = styles[variant] || styles.info;
  const IconComponent = current.Icon;

  return (
    <aside
      aria-label={title || current.label}
      className={`rounded-lg border ${current.border} ${current.bg} p-5 print-surface ${className}`}
    >
      <div className="flex items-start gap-3">
        <IconComponent
          className={`mt-0.5 h-5 w-5 shrink-0 ${current.labelColor}`}
          aria-hidden="true"
        />
        <div className="space-y-2 text-sm leading-relaxed text-[#94A3B8] flex-1">
          {title && (
            <div className="flex flex-wrap items-center gap-2">
              <span className={`font-mono text-xs font-semibold ${current.labelColor}`}>
                {current.label}
              </span>
              <span className="text-[#1C2D4A]" aria-hidden="true">·</span>
              <h4 className={`font-semibold ${current.titleColor}`}>{title}</h4>
            </div>
          )}
          <div className="space-y-2 text-[#E2E8F0]">{children}</div>
        </div>
      </div>
    </aside>
  );
}

/**
 * Renders a legal value and visibly highlights when it still requires developer confirmation
 * (Section 31: "The UI must visibly indicate when a required legal field still needs developer confirmation").
 */
export function LegalFieldDisplay({ value, label }) {
  const isPending = isPlaceholderValue(value);

  if (!isPending) {
    return <span className="font-medium text-white">{value}</span>;
  }

  return (
    <span
      className="inline-flex flex-wrap items-center gap-1.5 rounded border border-[#FFB300]/40 bg-[#FFB300]/10 px-2 py-0.5 font-mono text-xs text-[#FFB300]"
      title={label ? `${label}: Pending developer confirmation` : "Pending developer confirmation"}
    >
      <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-[#FFB300]" aria-hidden="true" />
      <span>{value}</span>
    </span>
  );
}

/**
 * Standardized Section Heading with stable anchor ID and Copy-Link button (Section 39).
 */
export function SectionHeading({ id, number, title }) {
  const [copied, setCopied] = useState(false);

  const handleCopyAnchor = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      window.location.hash = id;
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group flex items-baseline justify-between gap-4 border-b border-[#1E293B] pb-3 mb-5">
      <h2
        id={id}
        className="scroll-mt-24 text-xl sm:text-2xl font-bold tracking-tight text-white flex items-baseline gap-3"
      >
        {number && (
          <span className="font-mono text-sm font-semibold text-[#00E676] tabular-nums">
            {String(number).padStart(2, "0")}.
          </span>
        )}
        <span>{title}</span>
      </h2>

      <button
        type="button"
        onClick={handleCopyAnchor}
        aria-label={`Copy direct link to section ${title}`}
        title="Copy link to this section"
        className="copy-link-btn no-print inline-flex items-center gap-1.5 rounded border border-transparent px-2 py-1 text-xs font-mono text-[#94A3B8] opacity-75 transition-all hover:border-[#1C2D4A] hover:bg-[#0B1324] hover:text-[#00FF88] focus:opacity-100 cursor-pointer shrink-0"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-[#00E676]" aria-hidden="true" />
            <span className="text-[#00E676]">Copied</span>
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">#{id}</span>
          </>
        )}
      </button>
    </div>
  );
}
