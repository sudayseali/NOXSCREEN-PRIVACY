import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, FileText, Scale } from "lucide-react";
import { LEGAL_CONFIG } from "../config/legalConfig";
import TableOfContents from "../components/TableOfContents";
import DataSummaryTable from "../components/DataSummaryTable";
import PermissionTable from "../components/PermissionTable";
import LegalCallout, {
  LegalFieldDisplay,
  SectionHeading,
} from "../components/LegalCallout";

const PRIVACY_SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "about-noxscreen", label: "About NoxScreen Pro" },
  { id: "data-practices", label: "Quick Privacy Summary" },
  { id: "local-processing", label: "Information Processed Locally" },
  { id: "local-storage", label: "Local Storage (SharedPreferences)" },
  { id: "android-backup", label: "Android Backup" },
  { id: "not-collected", label: "Information Not Directly Collected" },
  { id: "unity-ads", label: "Advertising and Unity Ads" },
  { id: "permissions-section", label: "Android Permissions and Hardware Access" },
  { id: "focus-mode", label: "Focus Mode and Installed Applications" },
  { id: "biometrics", label: "Biometric Authentication and Security" },
  { id: "usage-statistics", label: "Usage Statistics and Energy Estimates" },
  { id: "whatsapp-support", label: "WhatsApp Support" },
  { id: "data-sharing", label: "Data Sharing and Disclosure" },
  { id: "data-deletion", label: "Data Retention and Deletion" },
  { id: "data-security", label: "Data Security" },
  { id: "privacy-rights", label: "Privacy Rights" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "third-party-services", label: "Third-Party Services and Links" },
  { id: "international-users", label: "International/Global Users" },
  { id: "policy-changes", label: "Changes to This Privacy Policy" },
  { id: "contact-section", label: "Contact Information" },
];

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "NoxScreen Pro Privacy Policy";
  }, []);

  return (
    <div className="min-h-screen bg-[#020612] text-white">
      {/* HERO SECTION */}
      <section className="border-b border-[#1C2D4A] bg-[#091122] py-10 sm:py-14 print-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Document Type Switcher */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4 no-print">
            <div className="inline-flex items-center gap-1 rounded-lg border border-[#1C2D4A] bg-[#030712] p-1">
              <Link
                to="/privacy-policy"
                aria-current="page"
                className="inline-flex items-center gap-2 rounded-md bg-[#0B1324] border border-[#00E676]/40 px-3.5 py-1.5 text-xs font-semibold text-[#00FF88] whitespace-nowrap"
              >
                <FileText className="h-3.5 w-3.5 text-[#00E676]" aria-hidden="true" />
                <span>Privacy Policy</span>
              </Link>
              <Link
                to="/terms-of-use"
                className="inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors whitespace-nowrap"
              >
                <Scale className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Terms of Use</span>
              </Link>
            </div>

            <div className="text-xs font-mono text-[#94A3B8]">
              Canonical URL:{" "}
              <code className="text-white">
                {LEGAL_CONFIG.placeholders.officialWebsiteUrl}
              </code>
            </div>
          </div>

          {/* Primary Document Title */}
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-3xl">
            {LEGAL_CONFIG.app.name} Privacy Policy
          </h1>

          <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-[#94A3B8]">
            Technical privacy disclosure, first-party versus third-party data
            processing architecture, Android permission inventory, and local
            storage documentation for{" "}
            <strong className="text-white">{LEGAL_CONFIG.app.name}</strong>.
          </p>

          {/* Verified Application Identity & Dates Metadata Bar */}
          <dl className="mt-7 grid grid-cols-1 gap-4 rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 sm:grid-cols-2 lg:grid-cols-3 text-xs print-surface">
            <div>
              <dt className="text-[#94A3B8]">Application Name</dt>
              <dd className="mt-1 font-semibold text-white">
                {LEGAL_CONFIG.app.name}
              </dd>
            </div>
            <div>
              <dt className="text-[#94A3B8]">Android Package Identifier</dt>
              <dd className="mt-1 font-mono font-semibold text-[#00FF88]">
                {LEGAL_CONFIG.app.packageName}
              </dd>
            </div>
            <div>
              <dt className="text-[#94A3B8]">Verified Version &amp; Code</dt>
              <dd className="mt-1 font-mono font-semibold text-white tabular-nums">
                v{LEGAL_CONFIG.app.versionName} (Version Code:{" "}
                {LEGAL_CONFIG.app.versionCode})
              </dd>
            </div>
            <div>
              <dt className="text-[#94A3B8]">Effective Date</dt>
              <dd className="mt-1">
                <LegalFieldDisplay
                  value={LEGAL_CONFIG.placeholders.effectiveDate}
                />
              </dd>
            </div>
            <div>
              <dt className="text-[#94A3B8]">Last Updated</dt>
              <dd className="mt-1">
                <LegalFieldDisplay
                  value={LEGAL_CONFIG.placeholders.lastUpdatedDate}
                />
              </dd>
            </div>
            <div>
              <dt className="text-[#94A3B8]">Developer</dt>
              <dd className="mt-1 font-medium text-white">
                {LEGAL_CONFIG.developer.name} ({LEGAL_CONFIG.developer.type})
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* MAIN TWO-COLUMN DOCUMENTATION LAYOUT */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          {/* Table of Contents (Mobile Jump Menu + Desktop Sticky Sidebar) */}
          <TableOfContents
            sections={PRIVACY_SECTIONS}
            documentTitle="Privacy Policy Contents"
          />

          {/* Main Legal Content Column */}
          <main
            id="main-content"
            className="flex-1 min-w-0 space-y-12 print-full-width"
          >
            {/* 1. INTRODUCTION */}
            <section aria-labelledby="introduction" className="space-y-4">
              <SectionHeading id="introduction" number={1} title="Introduction" />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                This Privacy Policy explains how the Android application{" "}
                <strong className="text-white">{LEGAL_CONFIG.app.name}</strong>{" "}
                (package identifier{" "}
                <code className="font-mono text-[#00FF88]">
                  {LEGAL_CONFIG.app.packageName}
                </code>
                , version{" "}
                <code className="font-mono text-white">
                  {LEGAL_CONFIG.app.versionName}
                </code>
                , version code{" "}
                <code className="font-mono text-white">
                  {LEGAL_CONFIG.app.versionCode}
                </code>
                ) processes information on your device, stores operational data
                locally, interacts with Android system permissions, and
                integrates third-party advertising and external support
                services.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} is developed and published by{" "}
                <strong className="text-white">
                  {LEGAL_CONFIG.developer.name}
                </strong>{" "}
                ({LEGAL_CONFIG.developer.type}, referred to in this policy as
                &ldquo;Developer,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;). By installing or using{" "}
                {LEGAL_CONFIG.app.name}, you can review this documentation to
                understand the distinction between on-device feature processing
                and external third-party services.
              </p>
              <LegalCallout
                variant="emerald"
                title="Core First-Party Processing Principle"
              >
                <p className="font-medium text-white">
                  &ldquo;NoxScreen Pro does not directly transmit the locally
                  processed app data described in this policy to
                  developer-operated servers.&rdquo;
                </p>
                <p className="text-xs text-[#94A3B8]">
                  However, third-party advertising services integrated into the
                  application (specifically Unity Ads for Banner and Video
                  advertising) may independently process device, network,
                  advertising, and diagnostic information when advertisements
                  are requested or displayed, and external support
                  communications initiated by the user via WhatsApp are
                  processed by WhatsApp under its own policies.
                </p>
              </LegalCallout>
            </section>

            {/* 2. ABOUT NOXSCREEN PRO */}
            <section aria-labelledby="about-noxscreen" className="space-y-4">
              <SectionHeading
                id="about-noxscreen"
                number={2}
                title="About NoxScreen Pro"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} is an Android screen-management and
                display utility designed to reduce visible screen output and
                provide customizable overlay, automation, and focus controls.
                Based on the verified technical audit of version{" "}
                <code className="font-mono text-white">
                  {LEGAL_CONFIG.app.versionName}
                </code>
                , the application provides the following core functionality:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <h3 className="text-sm font-semibold text-white">
                    Black Screen / Blackout Mode
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
                    Displays a full-screen black overlay or Blackout Activity
                    using Android overlay functionality where required. Its
                    purpose is to reduce visible screen output, allow background
                    audio/media to continue where supported, reduce OLED/AMOLED
                    pixel activity, and provide screen blackout functionality.
                  </p>
                </div>
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <h3 className="text-sm font-semibold text-white">
                    Always-On Display (AOD) &amp; OLED Pixel Shift
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
                    Optional AOD interface displaying time, date, and battery
                    percentage with customizable clock styles (
                    <em>Orbital Neon</em>, <em>Neon Outline</em>,{" "}
                    <em>Orbital Chrono</em>, <em>Neon Pulse</em>), neon themes,
                    customizable wake gestures, unlock-screen styles, and{" "}
                    <em>OLED Pixel Shift</em> (which performs small visual
                    position adjustments intended to reduce static-image
                    exposure, though it is not claimed to completely prevent
                    screen burn-in).
                  </p>
                </div>
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <h3 className="text-sm font-semibold text-white">
                    Floating Lock &amp; Temporary 7-Day Styles
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
                    Provides a draggable overlay button with 4 permanently free
                    icon styles and 13 premium icon styles. Premium styles can
                    be temporarily unlocked for 7 days through an in-app video
                    advertisement, tracked locally using{" "}
                    <code className="font-mono text-white">
                      System.currentTimeMillis()
                    </code>{" "}
                    and{" "}
                    <code className="font-mono text-white">
                      SystemClock.elapsedRealtime()
                    </code>
                    .
                  </p>
                </div>
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <h3 className="text-sm font-semibold text-white">
                    Pocket Mode, Focus Mode &amp; Security Controls
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
                    Includes sensor-driven Pocket Mode / Shake to Wake /
                    stationary detection, Focus Mode app blocking schedules,
                    system Biometric/Credential unlock prompts, Anti-Spy window
                    flags (
                    <code className="font-mono text-white">FLAG_SECURE</code>),
                    Background Protection checks, a Quick Settings Tile, and a
                    Home Screen Widget.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. QUICK PRIVACY SUMMARY */}
            <section aria-labelledby="data-practices" className="space-y-4">
              <SectionHeading
                id="data-practices"
                number={3}
                title="Quick Privacy Summary"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                To assist users and application distribution reviewers in
                inspecting how {LEGAL_CONFIG.app.name} operates, the summary
                below distinguishes between developer-operated servers,
                on-device real-time processing, local{" "}
                <code className="font-mono text-white">SharedPreferences</code>{" "}
                storage, third-party advertising processing, and external
                support communications:
              </p>
              <DataSummaryTable />
            </section>

            {/* 4. INFORMATION PROCESSED LOCALLY */}
            <section aria-labelledby="local-processing" className="space-y-4">
              <SectionHeading
                id="local-processing"
                number={4}
                title="Information Processed Locally"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} has no user registration, no login
                account, no developer-operated backend, no cloud
                synchronization, and no developer-operated user database.
                According to the verified audit, the application processes the
                following categories of operational data locally on your Android
                device:
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-[#E2E8F0]">
                <li className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <strong className="text-white block mb-1">
                    1. Hardware Sensor Readings (Pocket Mode &amp; Automation)
                  </strong>
                  <span className="text-[#94A3B8]">
                    Pocket Mode and automation features may use the
                    device&apos;s{" "}
                    <strong className="text-white">proximity sensor</strong>,{" "}
                    <strong className="text-white">ambient light sensor</strong>
                    , and <strong className="text-white">accelerometer</strong>{" "}
                    for Pocket Mode, Shake to Wake, stationary detection, and
                    automatic screen-blackout behavior. According to the
                    verified audit, sensor readings are processed locally for
                    the relevant feature and are not intentionally recorded as
                    historical sensor datasets or transmitted by{" "}
                    {LEGAL_CONFIG.app.name}. We do not claim that sensors are
                    never accessed by the underlying system or application
                    components while a feature is disabled.
                  </span>
                </li>
                <li className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <strong className="text-white block mb-1">
                    2. System Time, Date &amp; Battery Percentage (Always-On
                    Display)
                  </strong>
                  <span className="text-[#94A3B8]">
                    When the optional Always-On Display (AOD) interface is
                    active, the application reads the current system time, date,
                    and device battery percentage locally in order to render
                    them on the AOD screen alongside the selected clock style
                    and theme.
                  </span>
                </li>
                <li className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <strong className="text-white block mb-1">
                    3. Installed Launchable Applications &amp; Foreground Usage
                    Events (Focus Mode)
                  </strong>
                  <span className="text-[#94A3B8]">
                    When configuring or running Focus Mode, the application
                    locally accesses installed launchable application
                    information (package names, labels, and icons) via{" "}
                    <code className="font-mono text-white">PackageManager</code>{" "}
                    and monitors foreground usage events via{" "}
                    <code className="font-mono text-white">
                      UsageStatsManager
                    </code>{" "}
                    to enforce user-configured app blocking schedules or usage
                    limits.
                  </span>
                </li>
                <li className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <strong className="text-white block mb-1">
                    4. Power &amp; Background Optimization Status (Background
                    Protection)
                  </strong>
                  <span className="text-[#94A3B8]">
                    The Background Protection feature checks Android system
                    conditions such as battery optimization status and
                    background execution restrictions, and may provide shortcuts
                    to Android system settings so the foreground service can
                    remain active on devices where OEM background management
                    might otherwise stop it.
                  </span>
                </li>
              </ul>
            </section>

            {/* 5. LOCAL STORAGE */}
            <section aria-labelledby="local-storage" className="space-y-4">
              <SectionHeading
                id="local-storage"
                number={5}
                title="Local Storage (SharedPreferences)"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} stores user preferences, feature
                configurations, operational security counters, temporary
                entitlement timestamps, and local usage counters on your device
                using Android{" "}
                <code className="font-mono text-[#00FF88]">
                  SharedPreferences
                </code>
                . These are local application data files stored within the
                application&apos;s private storage directory on the device:
              </p>

              <div className="overflow-x-auto rounded-lg border border-[#1C2D4A] bg-[#0B1324] print-surface">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#1C2D4A] bg-[#091122] text-xs font-semibold text-white">
                      <th scope="col" className="py-3.5 px-4 whitespace-nowrap">
                        SharedPreferences Name
                      </th>
                      <th scope="col" className="py-3.5 px-4">
                        Purpose Category
                      </th>
                      <th scope="col" className="py-3.5 px-4">
                        Documented Keys &amp; Stored Values
                      </th>
                      <th scope="col" className="py-3.5 px-4">
                        Storage Scope
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {LEGAL_CONFIG.sharedPreferences.map((pref) => (
                      <tr key={pref.fileName} className="align-top">
                        <td className="py-3.5 px-4 font-mono text-xs font-semibold text-[#00FF88] whitespace-nowrap">
                          &quot;{pref.fileName}&quot;
                        </td>
                        <td className="py-3.5 px-4 font-medium text-white">
                          {pref.category}
                        </td>
                        <td className="py-3.5 px-4">
                          <ul className="space-y-1 text-xs text-[#E2E8F0]">
                            {pref.keysAndContents.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span
                                  className="font-mono text-[#00E5FF]"
                                  aria-hidden="true"
                                >
                                  ·
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="py-3.5 px-4 text-xs text-[#94A3B8]">
                          {pref.storageScope}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. ANDROID BACKUP */}
            <section aria-labelledby="android-backup" className="space-y-4">
              <SectionHeading
                id="android-backup"
                number={6}
                title="Android Backup"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Because the application manifest is configured with{" "}
                <code className="font-mono text-[#00FF88]">
                  {LEGAL_CONFIG.app.backupAttribute}
                </code>
                , the Android operating system may back up eligible local
                application data (such as{" "}
                <code className="font-mono text-white">SharedPreferences</code>{" "}
                files) according to the device&apos;s Android backup
                configuration.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                This mechanism is an operating-system-level backup feature and
                is{" "}
                <strong className="text-white">
                  not a {LEGAL_CONFIG.app.name}-operated cloud database
                </strong>
                . The developer of {LEGAL_CONFIG.app.name} does not receive or
                directly access Android system backups. Whether backup occurs,
                where backup archives are stored, and how backups are restored
                when reinstalling an application are controlled by your Android
                device&apos;s backup settings and applicable platform behavior
                (such as Google Drive / Android Auto Backup or device
                manufacturer backup services).
              </p>
            </section>

            {/* 7. INFORMATION NOT DIRECTLY COLLECTED */}
            <section aria-labelledby="not-collected" className="space-y-4">
              <SectionHeading
                id="not-collected"
                number={7}
                title="Information Not Directly Collected"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Based on the verified technical audit of {LEGAL_CONFIG.app.name}{" "}
                (
                <code className="font-mono text-white">
                  v{LEGAL_CONFIG.app.versionName}
                </code>
                ), {LEGAL_CONFIG.app.name} does not directly request or
                intentionally collect the following personal or device
                information:
              </p>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 text-xs">
                {[
                  "Full name",
                  "Mailing address",
                  "Date of birth",
                  "Government ID",
                  "Email address",
                  "Account credentials",
                  "Contacts",
                  "Photos",
                  "Videos",
                  "Personal documents",
                  "Camera data",
                  "Microphone recordings",
                  "GPS location",
                  "SMS messages",
                  "Call logs",
                  "Raw biometric templates",
                  "Device PIN values",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded border border-[#1C2D4A] bg-[#0B1324] px-3 py-2.5 font-medium text-[#E2E8F0] print-surface"
                  >
                    <span
                      className="font-mono text-[#00E676] mr-1.5"
                      aria-hidden="true"
                    >
                      ×
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <LegalCallout
                variant="info"
                title="Specific Disclosure Regarding Phone Numbers"
              >
                <p>
                  &ldquo;NoxScreen Pro does not request or store the user&apos;s
                  phone number as an application account identifier. If the user
                  voluntarily contacts NoxScreen Pro Support through WhatsApp,
                  the external WhatsApp service may expose the information
                  associated with that communication to the parties
                  involved.&rdquo;
                </p>
              </LegalCallout>
            </section>

            {/* 8. ADVERTISING AND UNITY ADS */}
            <section aria-labelledby="unity-ads" className="space-y-4">
              <SectionHeading
                id="unity-ads"
                number={8}
                title="Advertising and Unity Ads"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <strong className="text-white">
                  {LEGAL_CONFIG.app.name} uses Unity Ads for Banner and Video
                  advertising.
                </strong>{" "}
                Verified technical integration parameters for the Unity Ads
                software development kit (SDK) are as follows:
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-3.5 print-surface">
                  <div className="text-[#94A3B8]">Integrated SDK Artifact</div>
                  <div className="mt-1 font-mono font-semibold text-[#00FF88] break-all">
                    {LEGAL_CONFIG.unityAds.sdkArtifact}
                  </div>
                </div>
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-3.5 print-surface">
                  <div className="text-[#94A3B8]">Unity Game ID</div>
                  <div className="mt-1 font-mono font-semibold text-white tabular-nums">
                    &quot;{LEGAL_CONFIG.unityAds.gameId}&quot;
                  </div>
                </div>
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-3.5 print-surface">
                  <div className="text-[#94A3B8]">Configured Test Mode</div>
                  <div className="mt-1 font-mono font-semibold text-white">
                    {LEGAL_CONFIG.unityAds.testMode}
                  </div>
                </div>
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-3.5 print-surface">
                  <div className="text-[#94A3B8]">Advertising Types</div>
                  <div className="mt-1 font-semibold text-white">
                    {LEGAL_CONFIG.unityAds.placements.join(" · ")}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <strong className="text-white">
                  Distinction Between First-Party and Third-Party Processing:
                </strong>{" "}
                While {LEGAL_CONFIG.app.name}&apos;s own utility features
                process operational settings locally on your device, Unity Ads
                operates as an independent third-party advertising provider that
                communicates with external servers when Banner Ads and Video Ads
                are initialized, requested, or displayed.
              </p>

              <LegalCallout
                variant="warning"
                title="Unity Ads Data Processing Scope"
              >
                <p>
                  &ldquo;Unity Ads may collect or process certain device,
                  network, advertising, and diagnostic information depending on
                  the SDK&apos;s operation, configuration, and applicable Unity
                  policies.&rdquo;
                </p>
                <p className="text-xs text-[#94A3B8]">
                  Note on Android Privacy Sandbox &amp; Advertising Permissions:
                  Removing or modifying specific Android Privacy Sandbox
                  permissions in an application manifest does not mean that
                  Unity Ads collects no advertising or device data. Because the
                  advertising functionality requires network communication via{" "}
                  <code className="font-mono text-white">
                    android.permission.INTERNET
                  </code>{" "}
                  and{" "}
                  <code className="font-mono text-white">
                    android.permission.ACCESS_NETWORK_STATE
                  </code>
                  , the application is not completely offline.
                </p>
              </LegalCallout>

              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <strong className="text-white">
                  Video Advertisements &amp; Temporary 7-Day Floating Lock
                  Entitlements:
                </strong>{" "}
                The Floating Lock feature includes 4 permanently free icon
                styles and 13 premium icon styles. Users may optionally watch a
                Video advertisement delivered by Unity Ads to unlock a temporary
                7-day entitlement for premium Floating Lock icon styles. The
                7-day expiration window is tracked locally on the device in{" "}
                <code className="font-mono text-white">
                  NoxFloatingLockEntitlements
                </code>{" "}
                using{" "}
                <code className="font-mono text-white">
                  System.currentTimeMillis()
                </code>{" "}
                and{" "}
                <code className="font-mono text-white">
                  SystemClock.elapsedRealtime()
                </code>
                . This temporary unlock is not a server-side subscription and
                has no monetary value.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                For comprehensive details on how Unity Technologies processes
                data, the categories of data its SDK may handle, and available
                user opt-out or privacy controls, please review the official
                Unity Privacy Policy:{" "}
                <a
                  href={LEGAL_CONFIG.unityAds.privacyPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs sm:text-sm text-[#00E5FF] underline hover:text-white break-all"
                >
                  <span>{LEGAL_CONFIG.unityAds.privacyPolicyUrl}</span>
                  <ExternalLink
                    className="h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </p>
            </section>

            {/* 9. ANDROID PERMISSIONS AND HARDWARE ACCESS */}
            <section aria-labelledby="permissions-section" className="space-y-4">
              <SectionHeading
                id="permissions-section"
                number={9}
                title="Android Permissions and Hardware Access"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} requests specific Android system
                permissions and hardware access declarations to deliver its
                screen-overlay, automation, security, Focus Mode, and
                advertising functionality. The searchable table below documents
                each permission or access mechanism, its purpose, whether it is
                core or optional, its data/behavior scope, and a plain-language
                explanation:
              </p>
              <PermissionTable />
            </section>

            {/* 10. FOCUS MODE AND INSTALLED APPLICATIONS */}
            <section aria-labelledby="focus-mode" className="space-y-4">
              <SectionHeading
                id="focus-mode"
                number={10}
                title="Focus Mode and Installed Applications"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Focus Mode is an optional productivity feature that allows you
                to select installed launchable applications on your device and
                configure app blocking schedules or usage limits.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <li>
                  <strong className="text-white">Data Accessed Locally:</strong>{" "}
                  Installed launchable application information, including
                  package names, application labels, application icons, and
                  foreground usage events. {LEGAL_CONFIG.app.name} does not
                  access private internal user data from inside other
                  applications.
                </li>
                <li>
                  <strong className="text-white">Android APIs Used:</strong>{" "}
                  <code className="font-mono text-[#00FF88]">
                    PackageManager
                  </code>{" "}
                  (with manifest package visibility queries) to populate the
                  user-selectable app list, and{" "}
                  <code className="font-mono text-[#00FF88]">
                    UsageStatsManager
                  </code>{" "}
                  (requiring user grant of{" "}
                  <code className="font-mono text-white">
                    android.permission.PACKAGE_USAGE_STATS
                  </code>
                  ) to detect when a selected blocked application enters the
                  foreground or reaches a configured usage limit.
                </li>
                <li>
                  <strong className="text-white">
                    Local Storage &amp; Non-Transmission:
                  </strong>{" "}
                  Selected blocked-app package names, schedules, and usage
                  limits are stored locally in{" "}
                  <code className="font-mono text-white">
                    NoxAutomationPrefs
                  </code>
                  . According to the verified audit, installed application lists
                  and foreground usage events remain local on the device and are
                  not transmitted to developer-operated servers.
                </li>
              </ul>
            </section>

            {/* 11. BIOMETRIC AUTHENTICATION AND SECURITY */}
            <section aria-labelledby="biometrics" className="space-y-4">
              <SectionHeading
                id="biometrics"
                number={11}
                title="Biometric Authentication and Security"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} offers optional unlock and application
                security controls powered by standard Android system
                authentication frameworks:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <li>
                  <strong className="text-white">
                    System Authentication APIs:
                  </strong>{" "}
                  The application may use AndroidX{" "}
                  <code className="font-mono text-[#00FF88]">
                    BiometricPrompt
                  </code>
                  ,{" "}
                  <code className="font-mono text-[#00FF88]">
                    BiometricManager
                  </code>
                  , and{" "}
                  <code className="font-mono text-[#00FF88]">
                    KeyguardManager
                  </code>{" "}
                  with authenticators including{" "}
                  <code className="font-mono text-white">BIOMETRIC_STRONG</code>
                  ,{" "}
                  <code className="font-mono text-white">BIOMETRIC_WEAK</code>,
                  and{" "}
                  <code className="font-mono text-white">
                    DEVICE_CREDENTIAL
                  </code>
                  .
                </li>
                <li>
                  <strong className="text-white">Supported Methods:</strong>{" "}
                  Depending on what your Android version and device hardware
                  support, authentication may include fingerprint, face
                  authentication, PIN, pattern, or password/device credential.
                </li>
                <li>
                  <strong className="text-white">
                    No Access to Raw Biometric Templates or PINs:
                  </strong>{" "}
                  {LEGAL_CONFIG.app.name} does not receive, access, or store raw
                  fingerprint templates, facial biometric templates, or device
                  PIN/pattern/password values, and cannot bypass Android system
                  security. All credential verification is performed by the
                  Android operating system, which returns only an authentication
                  result callback to the application.
                </li>
                <li>
                  <strong className="text-white">
                    Failed-Authentication Protection:
                  </strong>{" "}
                  The application locally tracks failed authentication attempts
                  in{" "}
                  <code className="font-mono text-white">NoxAppSecurity</code>.
                  After <strong className="text-white">3 failed attempts</strong>
                  , the application can enforce a{" "}
                  <strong className="text-white">30-second cooldown</strong> and
                  trigger short haptic feedback via{" "}
                  <code className="font-mono text-white">
                    android.permission.VIBRATE
                  </code>
                  . These counters and timers are operational security controls
                  stored strictly on the device.
                </li>
                <li>
                  <strong className="text-white">
                    Anti-Spy Window Protection:
                  </strong>{" "}
                  {LEGAL_CONFIG.app.name} can apply{" "}
                  <code className="font-mono text-[#00FF88]">
                    WindowManager.LayoutParams.FLAG_SECURE
                  </code>{" "}
                  to prevent screenshots and screen recording of protected
                  application windows where Android supports this behavior.
                  Please note that{" "}
                  <code className="font-mono text-white">FLAG_SECURE</code>{" "}
                  applies only to protected application windows where supported
                  by the operating system; it does not protect every screen of
                  the Android device and cannot prevent every possible method of
                  recording (such as an external camera).
                </li>
              </ul>
            </section>

            {/* 12. USAGE STATISTICS AND ENERGY ESTIMATES */}
            <section aria-labelledby="usage-statistics" className="space-y-4">
              <SectionHeading
                id="usage-statistics"
                number={12}
                title="Usage Statistics and Energy Estimates"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} calculates the following metrics locally
                on your device:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <li>
                  Total black-screen duration (
                  <code className="font-mono text-white">total_time_saved</code>
                  )
                </li>
                <li>Estimated energy saved</li>
                <li>
                  Black screen activation count (
                  <code className="font-mono text-white">usage_count</code>)
                </li>
                <li>Achievement and user level progress</li>
                <li>
                  Hourly activation counts (stored in{" "}
                  <code className="font-mono text-white">
                    NoxUsageAnalytics
                  </code>
                  )
                </li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                These values are used solely to display local statistics, in-app
                achievements, and on-device usage suggestions. They are stored
                locally in{" "}
                <code className="font-mono text-white">BlackScreenStats</code>{" "}
                and{" "}
                <code className="font-mono text-white">NoxUsageAnalytics</code>{" "}
                and are{" "}
                <strong className="text-white">not remote analytics</strong>{" "}
                (they are not Google Analytics, Firebase Analytics, or any
                external telemetry service).
              </p>
              <LegalCallout
                variant="info"
                title="Energy & Battery Saving Estimate Notice"
              >
                <p>
                  &ldquo;Battery and energy savings shown by NoxScreen Pro are
                  estimates and may vary substantially depending on the device,
                  display technology, brightness, refresh rate, applications
                  running in the background, battery condition, and Android
                  power-management behavior.&rdquo;
                </p>
              </LegalCallout>
            </section>

            {/* 13. WHATSAPP SUPPORT */}
            <section aria-labelledby="whatsapp-support" className="space-y-4">
              <SectionHeading
                id="whatsapp-support"
                number={13}
                title="WhatsApp Support"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} provides an optional user support action
                that opens <strong className="text-white">WhatsApp</strong> or{" "}
                <strong className="text-white">WhatsApp Business</strong> (where
                installed on the device) or a web browser using the following
                verified support link:
              </p>
              <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 text-xs sm:text-sm space-y-2 print-surface">
                <div>
                  <span className="text-[#94A3B8]">Support Account Label: </span>
                  <strong className="text-white">
                    {LEGAL_CONFIG.whatsappSupport.accountName}
                  </strong>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Support Number: </span>
                  <code className="font-mono text-[#00FF88]">
                    {LEGAL_CONFIG.whatsappSupport.phoneNumber}
                  </code>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Direct Link: </span>
                  <a
                    href={LEGAL_CONFIG.whatsappSupport.rawUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[#00E5FF] underline hover:text-white break-all"
                  >
                    {LEGAL_CONFIG.whatsappSupport.rawUrl}
                  </a>
                </div>
                <div>
                  <span className="text-[#94A3B8]">
                    Pre-filled Message Template:{" "}
                  </span>
                  <span className="italic text-white">
                    &laquo;{LEGAL_CONFIG.whatsappSupport.prefilledMessage}&raquo;
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <strong className="text-white">
                  Important External Service Disclosure:
                </strong>{" "}
                WhatsApp is an independent external communication service and is
                not operated or controlled by {LEGAL_CONFIG.app.name}.{" "}
                {LEGAL_CONFIG.app.name} does not receive any support message or
                contact details until you voluntarily send a message through
                WhatsApp. When you initiate or send a conversation via WhatsApp,
                that communication (including your WhatsApp profile name, phone
                number, message content, and metadata) is processed by WhatsApp
                and governed by the applicable WhatsApp Privacy Policy and Terms
                of Service.
              </p>
            </section>

            {/* 14. DATA SHARING AND DISCLOSURE */}
            <section aria-labelledby="data-sharing" className="space-y-4">
              <SectionHeading
                id="data-sharing"
                number={14}
                title="Data Sharing and Disclosure"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Because {LEGAL_CONFIG.app.name} does not transmit locally
                processed feature data (such as sensor readings, Focus Mode app
                selections, or local usage counters) to developer-operated
                servers, the developer does not maintain a centralized user
                database to sell, rent, or trade.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Information may be processed or disclosed outside the
                application only in the following technical or user-initiated
                contexts:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <li>
                  <strong className="text-white">
                    Third-Party Advertising SDK (Unity Ads):
                  </strong>{" "}
                  When the application requests or displays Banner Ads or Video
                  Ads, the integrated Unity Ads SDK (
                  <code className="font-mono text-white">
                    {LEGAL_CONFIG.unityAds.sdkArtifact}
                  </code>
                  ) communicates directly with Unity&apos;s servers and may
                  process device, network, advertising, and diagnostic
                  information under Unity&apos;s privacy policies.
                </li>
                <li>
                  <strong className="text-white">
                    Voluntary External Support (WhatsApp / Email):
                  </strong>{" "}
                  If you choose to contact support via WhatsApp (
                  <code className="font-mono text-white">
                    {LEGAL_CONFIG.whatsappSupport.phoneNumber}
                  </code>
                  ) or email (
                  <code className="font-mono text-white">
                    {LEGAL_CONFIG.developer.email}
                  </code>
                  ), the information you provide is shared with the support
                  recipient and processed by the external communication provider
                  you use.
                </li>
                <li>
                  <strong className="text-white">Android System Backup:</strong>{" "}
                  If Android system backup is enabled on your device, the
                  operating system may back up eligible local application
                  preferences in accordance with{" "}
                  <code className="font-mono text-white">
                    {LEGAL_CONFIG.app.backupAttribute}
                  </code>
                  .
                </li>
                <li>
                  <strong className="text-white">Legal Requirements:</strong> In
                  the limited event that the developer receives direct
                  communications (such as support messages) and is required by
                  applicable law, regulation, subpoena, or legal process to
                  disclose such communications, we may do so to the extent
                  required by law.
                </li>
              </ul>
            </section>

            {/* 15. DATA RETENTION AND DELETION */}
            <section aria-labelledby="data-deletion" className="space-y-4">
              <SectionHeading
                id="data-deletion"
                number={15}
                title="Data Retention and Deletion"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <strong className="text-white">
                  Deleting Locally Stored Application Data:
                </strong>{" "}
                All local settings, statistics, security counters, and temporary
                entitlements stored in Android{" "}
                <code className="font-mono text-white">SharedPreferences</code>{" "}
                (<code className="font-mono text-white">BlackScreenStats</code>,{" "}
                <code className="font-mono text-white">NoxAutomationPrefs</code>
                ,{" "}
                <code className="font-mono text-white">
                  NoxFloatingLockEntitlements
                </code>
                , <code className="font-mono text-white">NoxAppSecurity</code>,
                and{" "}
                <code className="font-mono text-white">NoxUsageAnalytics</code>)
                remain on your device until you remove them. You can normally
                delete this local application data at any time by:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <li>
                  Opening <strong className="text-white">Android Settings</strong>{" "}
                  &rarr; <strong className="text-white">Apps</strong> &rarr;{" "}
                  <strong className="text-white">{LEGAL_CONFIG.app.name}</strong>{" "}
                  &rarr; <strong className="text-white">Storage &amp; cache</strong>{" "}
                  and selecting{" "}
                  <strong className="text-white">
                    Clear storage / Clear data
                  </strong>
                  ; or
                </li>
                <li>
                  <strong className="text-white">
                    Uninstalling {LEGAL_CONFIG.app.name}
                  </strong>{" "}
                  from your Android device (note that if your device has Android
                  system backup enabled, you may also manage or delete backed-up
                  app data within your Android / Google account backup
                  settings).
                </li>
              </ol>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <strong className="text-white">
                  Third-Party &amp; External Service Data:
                </strong>{" "}
                Clearing local storage or uninstalling {LEGAL_CONFIG.app.name}{" "}
                does not automatically delete data independently held by
                external third-party services. We do not guarantee that external
                third-party data can be deleted through {LEGAL_CONFIG.app.name}.
                For information processed by{" "}
                <strong className="text-white">Unity Ads</strong> or{" "}
                <strong className="text-white">WhatsApp</strong>, please refer
                to their respective privacy policies and user data controls
                (including Android&apos;s system settings to reset or delete
                your device&apos;s Advertising ID).
              </p>
            </section>

            {/* 16. DATA SECURITY */}
            <section aria-labelledby="data-security" className="space-y-4">
              <SectionHeading
                id="data-security"
                number={16}
                title="Data Security"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} relies on the Android operating
                system&apos;s application sandboxing model for local{" "}
                <code className="font-mono text-white">SharedPreferences</code>{" "}
                storage, delegates biometric and device-credential verification
                to Android system APIs (
                <code className="font-mono text-white">BiometricPrompt</code>,{" "}
                <code className="font-mono text-white">BiometricManager</code>,
                and{" "}
                <code className="font-mono text-white">KeyguardManager</code>),
                enforces a local 30-second cooldown after 3 failed
                authentication attempts, and applies{" "}
                <code className="font-mono text-white">
                  WindowManager.LayoutParams.FLAG_SECURE
                </code>{" "}
                to protected application windows where supported by Android.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                While these measures are designed to support local operational
                security, no software application, mobile operating system, or
                network transmission can be guaranteed to be invulnerable.
                Device security also depends on your Android operating system
                version, hardware integrity, lock-screen configuration, and
                whether the device has been rooted or modified.
              </p>
            </section>

            {/* 17. PRIVACY RIGHTS */}
            <section aria-labelledby="privacy-rights" className="space-y-4">
              <SectionHeading
                id="privacy-rights"
                number={17}
                title="Privacy Rights"
              />
              <LegalCallout
                variant="emerald"
                title="Jurisdictional Privacy Rights Notice"
              >
                <p>
                  &ldquo;Depending on your location and applicable law, you may
                  have privacy rights regarding personal information processed
                  by applicable service providers.&rdquo;
                </p>
              </LegalCallout>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Where legally applicable under laws in your jurisdiction,
                privacy rights may include rights concerning:
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-[#E2E8F0] list-disc pl-5">
                <li>Access to personal information</li>
                <li>Deletion / erasure of personal information</li>
                <li>Correction / rectification of inaccurate data</li>
                <li>Restriction of processing</li>
                <li>Objection to certain processing activities</li>
                <li>Data portability</li>
                <li>Advertising and privacy consent/opt-out controls</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                The availability and scope of these rights depend on your
                jurisdiction, applicable data protection law, and whether{" "}
                {LEGAL_CONFIG.app.name} actually holds the relevant data.
                Because {LEGAL_CONFIG.app.name} does not maintain a
                developer-operated user database or user account system for
                locally processed app features, we generally do not hold remote
                copies of your on-device settings or usage statistics. You can
                inspect or delete local application data directly on your device
                through Android Settings.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                For data processed independently by{" "}
                <strong className="text-white">Unity Ads</strong>, you may
                exercise applicable privacy rights or advertising choices
                through Unity&apos;s privacy disclosures (
                <a
                  href={LEGAL_CONFIG.unityAds.privacyPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#00E5FF] underline hover:text-white"
                >
                  {LEGAL_CONFIG.unityAds.privacyPolicyUrl}
                </a>
                ) and your Android device&apos;s system privacy and advertising
                settings. For inquiries regarding voluntary support
                communications sent to the developer, you may contact{" "}
                <LegalFieldDisplay
                  isEmail
                  value={LEGAL_CONFIG.placeholders.supportEmail}
                />
                .
              </p>
            </section>

            {/* 18. CHILDREN'S PRIVACY */}
            <section aria-labelledby="childrens-privacy" className="space-y-4">
              <SectionHeading
                id="childrens-privacy"
                number={18}
                title="Children's Privacy"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} is a general-purpose Android
                screen-management and display utility and is not specifically
                directed to children. The application does not include user
                account registration or age-collection forms.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                If a parent or legal guardian believes that a child has
                voluntarily submitted personal information to us through an
                external support channel (such as WhatsApp Support or email) in
                a manner inconsistent with applicable law, please contact us via{" "}
                <LegalFieldDisplay
                  isEmail
                  value={LEGAL_CONFIG.placeholders.supportEmail}
                />{" "}
                or via the support contact details in Section 22 so that we can
                review the communication and take appropriate steps regarding
                any support records in our possession.
              </p>
            </section>

            {/* 19. THIRD-PARTY SERVICES AND LINKS */}
            <section
              aria-labelledby="third-party-services"
              className="space-y-4"
            >
              <SectionHeading
                id="third-party-services"
                number={19}
                title="Third-Party Services and Links"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                To avoid any ambiguity regarding responsibility for data
                processing, this section distinguishes the three distinct
                services involved when you use {LEGAL_CONFIG.app.name}:
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <div className="font-mono text-xs text-[#00E676]">
                    1. First-Party Application
                  </div>
                  <h3 className="mt-1 text-base font-bold text-white">
                    {LEGAL_CONFIG.app.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                    The Android utility application (
                    <code className="font-mono text-white">
                      {LEGAL_CONFIG.app.packageName}
                    </code>
                    ). Processes screen overlays, AOD, sensors, Focus Mode,
                    biometrics via Android OS, and local{" "}
                    <code className="font-mono text-white">
                      SharedPreferences
                    </code>{" "}
                    on your device without a developer-operated backend server.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <div className="font-mono text-xs text-[#FFB300]">
                    2. Third-Party Advertising Provider
                  </div>
                  <h3 className="mt-1 text-base font-bold text-white">
                    Unity Ads
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                    External advertising provider integrated via SDK{" "}
                    <code className="font-mono text-white">
                      {LEGAL_CONFIG.unityAds.sdkArtifact}
                    </code>{" "}
                    (Game ID{" "}
                    <code className="font-mono text-white">
                      {LEGAL_CONFIG.unityAds.gameId}
                    </code>
                    ) for Banner and Video advertising. Independently processes
                    advertising, device, network, and diagnostic data under
                    Unity&apos;s Privacy Policy.
                  </p>
                </div>

                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <div className="font-mono text-xs text-[#00E5FF]">
                    3. External Support Provider
                  </div>
                  <h3 className="mt-1 text-base font-bold text-white">
                    WhatsApp
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                    External communication platform opened only if you initiate
                    support via{" "}
                    <code className="font-mono text-white">
                      {LEGAL_CONFIG.whatsappSupport.rawUrl}
                    </code>
                    . Governed independently by WhatsApp&apos;s privacy policy
                    and terms of service.
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#94A3B8]">
                {LEGAL_CONFIG.app.name} does not control and is not responsible
                for the independent privacy practices, SDK server
                infrastructure, or terms of Unity Ads or WhatsApp.
              </p>
            </section>

            {/* 20. INTERNATIONAL/GLOBAL USERS */}
            <section
              aria-labelledby="international-users"
              className="space-y-4"
            >
              <SectionHeading
                id="international-users"
                number={20}
                title="International/Global Users"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                While {LEGAL_CONFIG.app.name}&apos;s local feature data remains
                on your Android device, third-party services integrated into or
                linked from the application—specifically{" "}
                <strong className="text-white">Unity Ads</strong> when
                requesting or displaying Banner and Video advertisements, and{" "}
                <strong className="text-white">WhatsApp</strong> if you initiate
                a support conversation—operate global network infrastructure. As
                a result, information processed by those third-party providers
                may be transmitted to and processed on servers located outside
                of your country or jurisdiction in accordance with their
                respective privacy policies.
              </p>
            </section>

            {/* 21. CHANGES TO THIS PRIVACY POLICY */}
            <section aria-labelledby="policy-changes" className="space-y-4">
              <SectionHeading
                id="policy-changes"
                number={21}
                title="Changes to This Privacy Policy"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                We may update this Privacy Policy from time to time to reflect
                changes in {LEGAL_CONFIG.app.name}&apos;s features, permissions,
                local storage structure, third-party SDK integrations, or
                applicable legal requirements. When updates are published, we
                will revise the &ldquo;Last Updated&rdquo; date at the top of
                this document. We encourage you to review this Privacy Policy
                periodically when updating or configuring the application.
              </p>
            </section>

            {/* 22. CONTACT INFORMATION */}
            <section aria-labelledby="contact-section" className="space-y-4">
              <SectionHeading
                id="contact-section"
                number={22}
                title="Contact Information"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                If you have questions regarding this Privacy Policy, the
                technical disclosures for{" "}
                <strong className="text-white">{LEGAL_CONFIG.app.name}</strong>{" "}
                (
                <code className="font-mono text-white">
                  {LEGAL_CONFIG.app.packageName}
                </code>
                ), or our privacy practices, please use the confirmed contact
                channels below:
              </p>

              <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-5 space-y-4 print-surface">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs sm:text-sm">
                  <div>
                    <div className="text-xs text-[#94A3B8]">
                      Developer &amp; Publisher
                    </div>
                    <div className="mt-1 font-medium text-white">
                      {LEGAL_CONFIG.developer.name} (
                      {LEGAL_CONFIG.developer.type})
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">
                      Developer &amp; Support Email
                    </div>
                    <div className="mt-1">
                      <LegalFieldDisplay
                        isEmail
                        value={LEGAL_CONFIG.placeholders.supportEmail}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">
                      WhatsApp Support Account &amp; Number
                    </div>
                    <div className="mt-1 font-medium text-white">
                      {LEGAL_CONFIG.whatsappSupport.accountName} (
                      <code className="font-mono text-[#00FF88]">
                        {LEGAL_CONFIG.whatsappSupport.phoneNumber}
                      </code>
                      )
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">
                      Direct WhatsApp Support URL
                    </div>
                    <div className="mt-1">
                      <a
                        href={LEGAL_CONFIG.whatsappSupport.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#00E5FF] underline hover:text-white break-all"
                      >
                        <span>{LEGAL_CONFIG.whatsappSupport.rawUrl}</span>
                        <ExternalLink
                          className="h-3.5 w-3.5 shrink-0"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
