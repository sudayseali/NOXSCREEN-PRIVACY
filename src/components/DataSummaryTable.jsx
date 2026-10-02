import React from "react";
import { LEGAL_CONFIG } from "../config/legalConfig";

/**
 * Highly visible privacy & data architecture summary
 * Clearly separates first-party local processing/storage from third-party SDKs and external support.
 */
export default function DataSummaryTable() {
  const pillars = [
    {
      category: "A. Developer Servers",
      scope: "First-Party Remote Infrastructure",
      statusText: "No Developer-Operated User Database",
      accentColor: "text-[#00E676]",
      borderAccent: "border-t-[#00E676]",
      summary:
        "No developer-operated user database or account system identified in the verified audit.",
      details: [
        "No user registration or login account",
        "No developer-operated backend or API server",
        "No developer-operated cloud synchronization",
        "NoxScreen Pro does not directly transmit the locally processed app data described in this policy to developer-operated servers",
      ],
    },
    {
      category: "B. Local Processing",
      scope: "On-Device Real-Time Execution",
      statusText: "Processed Locally on Device",
      accentColor: "text-[#00E5FF]",
      borderAccent: "border-t-[#00E5FF]",
      summary:
        "Sensors, battery state, installed launchable applications, and Focus Mode usage events.",
      details: [
        "Hardware sensors: proximity, ambient light, and accelerometer for Pocket Mode, Shake to Wake, and stationary detection",
        "Battery percentage, time, and date for optional Always-On Display (AOD)",
        "Installed launchable apps (package names, labels, icons) via PackageManager",
        "Foreground app usage events via UsageStatsManager for Focus Mode",
      ],
    },
    {
      category: "C. Local Storage",
      scope: "Android SharedPreferences",
      statusText: "Stored in Local App Storage",
      accentColor: "text-[#00E5FF]",
      borderAccent: "border-t-[#00E5FF]",
      summary:
        "SharedPreferences containing settings, operational state, usage statistics, and temporary entitlements.",
      details: [
        "BlackScreenStats (total_time_saved, usage_count, app_language)",
        "NoxAutomationPrefs (AOD, clock style, Pocket Mode, Focus Mode schedule & selected package names)",
        "NoxFloatingLockEntitlements (7-day temporary entitlement timestamps)",
        "NoxAppSecurity (failed auth attempts & 30s lockout timer) & NoxUsageAnalytics (hourly counters)",
      ],
    },
    {
      category: "D. Third-Party & External",
      scope: "External SDK & Voluntary Support",
      statusText: "Independent Third-Party Terms Apply",
      accentColor: "text-[#FFB300]",
      borderAccent: "border-t-[#FFB300]",
      summary: "Unity Ads (Banner and Video Ads) and optional WhatsApp communication.",
      details: [
        `Unity Ads SDK (${LEGAL_CONFIG.unityAds.sdkArtifact}, Game ID: ${LEGAL_CONFIG.unityAds.gameId}) processes device, network, advertising, and diagnostic data when Banner and Video ads are requested or displayed`,
        `WhatsApp Support (${LEGAL_CONFIG.whatsappSupport.phoneNumber}) is an external service opened only when initiated by the user`,
        'Android OS system backup may back up eligible local data if android:allowBackup="true" is active in device settings',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* 4-Pillar Reviewer Summary Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {pillars.map((pillar) => (
          <div
            key={pillar.category}
            className={`rounded-lg border border-[#1C2D4A] border-t-2 ${pillar.borderAccent} bg-[#0B1324] p-5 print-surface flex flex-col justify-between`}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#94A3B8]">
                <span className="font-mono font-semibold text-white">
                  {pillar.category}
                </span>
                <span>·</span>
                <span className={`font-mono ${pillar.accentColor}`}>
                  {pillar.statusText}
                </span>
              </div>

              <p className="mt-2.5 text-sm font-semibold text-white leading-snug">
                {pillar.summary}
              </p>

              <ul className="mt-3 space-y-1.5 text-xs text-[#94A3B8] leading-relaxed">
                {pillar.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className="font-mono text-[#00E676] select-none"
                      aria-hidden="true"
                    >
                      –
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 border-t border-[#1E293B] pt-2.5 text-[11px] font-mono text-[#94A3B8]">
              Scope: {pillar.scope}
            </div>
          </div>
        ))}
      </div>

      {/* Reviewer Comparison Matrix Table */}
      <div className="overflow-x-auto rounded-lg border border-[#1C2D4A] bg-[#0B1324] print-surface">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-[#1C2D4A] bg-[#091122] text-xs font-semibold text-white">
              <th scope="col" className="py-3.5 px-4">
                Data / Processing Domain
              </th>
              <th scope="col" className="py-3.5 px-4">
                Processed By
              </th>
              <th scope="col" className="py-3.5 px-4">
                Storage / Transmission Mechanism
              </th>
              <th scope="col" className="py-3.5 px-4">
                Governing Policy / User Control
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E293B] text-[#E2E8F0]">
            <tr>
              <td className="py-3.5 px-4 font-medium text-white">
                App Configuration, Usage Stats &amp; 7-Day Entitlements
              </td>
              <td className="py-3.5 px-4 font-mono text-xs text-[#00E676]">
                {LEGAL_CONFIG.app.name} (On-Device)
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Stored locally in Android{" "}
                <code className="font-mono text-white">SharedPreferences</code>;
                not uploaded to developer-operated servers
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Clear app data in Android Settings or uninstall{" "}
                {LEGAL_CONFIG.app.name}
              </td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-medium text-white">
                Sensors, Battery Level &amp; Focus Mode Foreground Events
              </td>
              <td className="py-3.5 px-4 font-mono text-xs text-[#00E676]">
                {LEGAL_CONFIG.app.name} (Real-Time Local)
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Evaluated locally in real time via Android system APIs; sensor
                streams are not recorded as historical datasets
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Toggle features inside app or revoke optional permissions in
                Android Settings
              </td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-medium text-white">
                Biometric &amp; Device Credential Authentication
              </td>
              <td className="py-3.5 px-4 font-mono text-xs text-[#00E5FF]">
                Android System OS
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Handled by Android{" "}
                <code className="font-mono text-white">BiometricPrompt</code> /{" "}
                <code className="font-mono text-white">KeyguardManager</code>;
                raw biometric templates and PINs are never exposed to{" "}
                {LEGAL_CONFIG.app.name}
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Managed via Android system security &amp; biometric settings
              </td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-medium text-white">
                Eligible Application Backup Data
              </td>
              <td className="py-3.5 px-4 font-mono text-xs text-[#00E5FF]">
                Android Platform Backup
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Manifest includes{" "}
                <code className="font-mono text-white">
                  android:allowBackup=&quot;true&quot;
                </code>
                ; OS may back up eligible local prefs according to device backup
                settings
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Controlled by device&apos;s Android/Google backup settings
              </td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-medium text-white">
                Advertising Requests &amp; Ad Delivery (Banner and Video Ads)
              </td>
              <td className="py-3.5 px-4 font-mono text-xs text-[#FFB300]">
                Unity Ads (Third-Party SDK)
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Transmitted over{" "}
                <code className="font-mono text-white">INTERNET</code> to Unity
                Ads servers (
                <code className="font-mono text-white">
                  {LEGAL_CONFIG.unityAds.sdkArtifact}
                </code>
                )
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Governed by{" "}
                <a
                  href={LEGAL_CONFIG.unityAds.privacyPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E5FF] underline hover:text-white"
                >
                  Unity Privacy Policy
                </a>{" "}
                &amp; Android Advertising ID controls
              </td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-medium text-white">
                Voluntary User Support Messages
              </td>
              <td className="py-3.5 px-4 font-mono text-xs text-[#FFB300]">
                WhatsApp (External Service)
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                External link (
                <code className="font-mono text-white">
                  {LEGAL_CONFIG.whatsappSupport.rawUrl}
                </code>
                ); no data sent until user voluntarily sends a message in
                WhatsApp
              </td>
              <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                Governed by applicable WhatsApp Privacy Policy and Terms
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
