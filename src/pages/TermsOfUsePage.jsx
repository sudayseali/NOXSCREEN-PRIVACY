import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, FileText, Scale } from "lucide-react";
import { LEGAL_CONFIG } from "../config/legalConfig";
import TableOfContents from "../components/TableOfContents";
import LegalCallout, {
  LegalFieldDisplay,
  SectionHeading,
} from "../components/LegalCallout";

const TERMS_SECTIONS = [
  { id: "acceptance", label: "Acceptance" },
  { id: "description", label: "Description of NoxScreen Pro" },
  { id: "eligibility", label: "Eligibility" },
  { id: "license", label: "License" },
  { id: "permitted-use", label: "Permitted Use" },
  { id: "user-responsibilities", label: "User Responsibilities" },
  { id: "device-settings", label: "Device and System Settings" },
  { id: "safety-responsibility", label: "Safety and Screen-Blackout Responsibility" },
  { id: "focus-mode-responsibility", label: "Focus Mode Responsibility" },
  { id: "biometric-responsibility", label: "Biometric/App Lock Responsibility" },
  { id: "rewarded-ads", label: "Advertisements (Unity Ads)" },
  { id: "floating-lock-entitlements", label: "7-Day Floating Lock Entitlements" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "prohibited-activities", label: "Prohibited Activities" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "updates-changes", label: "Updates and Changes" },
  { id: "availability-compatibility", label: "Availability and Device Compatibility" },
  { id: "disclaimer-warranties", label: "Disclaimer of Warranties" },
  { id: "limitation-liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact-section", label: "Contact Information" },
];

export default function TermsOfUsePage() {
  useEffect(() => {
    document.title = "NoxScreen Pro Terms of Use";
    window.scrollTo(0, 0);
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
                className="inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors whitespace-nowrap"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Privacy Policy</span>
              </Link>
              <Link
                to="/terms-of-use"
                aria-current="page"
                className="inline-flex items-center gap-2 rounded-md bg-[#0B1324] border border-[#00E676]/40 px-3.5 py-1.5 text-xs font-semibold text-[#00FF88] whitespace-nowrap"
              >
                <Scale className="h-3.5 w-3.5 text-[#00E676]" aria-hidden="true" />
                <span>Terms of Use</span>
              </Link>
            </div>

            <div className="text-xs font-mono text-[#94A3B8]">
              Canonical Route: <code className="text-white">/terms-of-use</code>
            </div>
          </div>

          {/* Primary Document Title */}
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-3xl">
            NoxScreen Pro Terms of Use
          </h1>

          <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-[#94A3B8]">
            Governing terms, license conditions, operational safety responsibilities,
            local floating lock entitlement disclosures, and warranty disclaimers for{" "}
            <strong className="text-white">{LEGAL_CONFIG.app.name}</strong> (
            <code className="font-mono text-white">{LEGAL_CONFIG.app.packageName}</code>).
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
              <dt className="text-[#94A3B8]">Developer</dt>
              <dd className="mt-1 font-semibold text-white">
                {LEGAL_CONFIG.placeholders.developerLegalName} ({LEGAL_CONFIG.placeholders.developerType})
              </dd>
            </div>
            <div>
              <dt className="text-[#94A3B8]">Android Package &amp; Version</dt>
              <dd className="mt-1 font-mono font-semibold text-[#00FF88] tabular-nums">
                {LEGAL_CONFIG.app.packageName} (v{LEGAL_CONFIG.app.versionName})
              </dd>
            </div>
            <div>
              <dt className="text-[#94A3B8]">Effective Date</dt>
              <dd className="mt-1">
                <LegalFieldDisplay
                  label="Effective Date"
                  value={LEGAL_CONFIG.placeholders.effectiveDate}
                />
              </dd>
            </div>
            <div>
              <dt className="text-[#94A3B8]">Last Updated</dt>
              <dd className="mt-1">
                <LegalFieldDisplay
                  label="Last Updated Date"
                  value={LEGAL_CONFIG.placeholders.lastUpdatedDate}
                />
              </dd>
            </div>
            <div>
              <dt className="text-[#94A3B8]">Governing Law &amp; Jurisdiction</dt>
              <dd className="mt-1">
                <LegalFieldDisplay
                  label="Governing Law & Jurisdiction"
                  value={LEGAL_CONFIG.placeholders.governingLaw}
                />
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* MAIN TWO-COLUMN DOCUMENTATION LAYOUT */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          {/* Table of Contents */}
          <TableOfContents
            sections={TERMS_SECTIONS}
            documentTitle="Terms of Use Contents"
          />

          {/* Main Legal Content Column */}
          <main
            id="main-content"
            className="flex-1 min-w-0 space-y-12 print-full-width"
          >
            {/* 1. ACCEPTANCE */}
            <section aria-labelledby="acceptance" className="space-y-4">
              <SectionHeading id="acceptance" number={1} title="Acceptance" />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                These Terms of Use (&ldquo;Terms&rdquo;) govern your installation, access, and
                use of the Android application{" "}
                <strong className="text-white">{LEGAL_CONFIG.app.name}</strong> (package
                identifier{" "}
                <code className="font-mono text-[#00FF88]">{LEGAL_CONFIG.app.packageName}</code>,
                version <code className="font-mono text-white">{LEGAL_CONFIG.app.versionName}</code>)
                provided by{" "}
                <strong className="text-white">
                  {LEGAL_CONFIG.placeholders.developerLegalName}
                </strong>{" "}
                ({LEGAL_CONFIG.placeholders.developerType}, &ldquo;Developer,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                By downloading, installing, enabling permissions for, or using{" "}
                {LEGAL_CONFIG.app.name}, you acknowledge that you have read, understood, and
                agree to be bound by these Terms and our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-[#00E5FF] underline hover:text-white"
                >
                  Privacy Policy
                </Link>
                . If you do not agree to these Terms, you must not use the application and
                should uninstall it from your device.
              </p>
            </section>

            {/* 2. DESCRIPTION OF NOXSCREEN PRO */}
            <section aria-labelledby="description" className="space-y-4">
              <SectionHeading
                id="description"
                number={2}
                title="Description of NoxScreen Pro"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} is a general-purpose Android utility designed to
                display a full-screen black overlay or Blackout Activity, reduce visible
                screen output, reduce OLED/AMOLED pixel activity, and allow background
                audio/media playback to continue where supported by the underlying application
                and Android operating system.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Additional features include an optional Always-On Display (AOD) interface
                (showing time, date, and battery percentage with clock styles such as{" "}
                <em>Orbital Neon</em>, <em>Neon Outline</em>, <em>Orbital Chrono</em>, and{" "}
                <em>Neon Pulse</em>, neon themes, unlock styles, and <em>OLED Pixel Shift</em>),
                a draggable Floating Lock overlay button, sensor-assisted Pocket Mode / Shake
                to Wake / stationary detection, Focus Mode app usage scheduling, Android
                system biometric/credential lock integration, Anti-Spy window protection (
                <code className="font-mono text-white">FLAG_SECURE</code>), local usage
                statistics and energy estimates, Background Protection checks, a Quick Settings
                Tile, and a Home Screen Widget.
              </p>
              <LegalCallout variant="info" title="OLED Pixel Shift & Energy Saving Disclaimers">
                <p>
                  <strong className="text-white">OLED Pixel Shift:</strong> OLED Pixel Shift
                  performs small visual position adjustments intended to reduce static-image
                  exposure. We do not claim or guarantee that OLED Pixel Shift or any other
                  feature of {LEGAL_CONFIG.app.name} completely prevents screen burn-in or
                  hardware degradation.
                </p>
                <p>
                  <strong className="text-white">Energy &amp; Battery Estimates:</strong>{" "}
                  &ldquo;Battery and energy savings shown by {LEGAL_CONFIG.app.name} are estimates
                  and may vary substantially depending on the device, display technology,
                  brightness, refresh rate, applications running in the background, battery
                  condition, and Android power-management behavior.&rdquo; We never guarantee a
                  specific battery percentage or mAh saving.
                </p>
              </LegalCallout>
            </section>

            {/* 3. ELIGIBILITY */}
            <section aria-labelledby="eligibility" className="space-y-4">
              <SectionHeading id="eligibility" number={3} title="Eligibility" />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                You must have the legal capacity to enter into a binding agreement under the
                laws applicable to you to accept these Terms, or, if you are under the age of
                majority in your jurisdiction, you must have the permission and supervision of
                a parent or legal guardian who agrees to these Terms on your behalf.
              </p>
            </section>

            {/* 4. LICENSE */}
            <section aria-labelledby="license" className="space-y-4">
              <SectionHeading id="license" number={4} title="License" />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Subject to your continuous compliance with these Terms, the Developer ({LEGAL_CONFIG.placeholders.developerLegalName}) grants
                you a personal, limited, non-exclusive, non-transferable, non-sublicensable,
                revocable license to install and use the compiled object-code version of{" "}
                {LEGAL_CONFIG.app.name} (<code className="font-mono text-white">{LEGAL_CONFIG.app.packageName}</code>)
                on a compatible Android device that you own or legitimately control, solely for
                your personal or internal lawful utility purposes.
              </p>
            </section>

            {/* 5. PERMITTED USE */}
            <section aria-labelledby="permitted-use" className="space-y-4">
              <SectionHeading id="permitted-use" number={5} title="Permitted Use" />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                You may use {LEGAL_CONFIG.app.name} only for its intended purpose as a display
                blackout, Always-On Display, Floating Lock, Pocket Mode, and personal Focus
                Mode utility on your own device, in compliance with all applicable local,
                national, and international laws, as well as the terms of any third-party
                applications or services you run concurrently on your device.
              </p>
            </section>

            {/* 6. USER RESPONSIBILITIES */}
            <section aria-labelledby="user-responsibilities" className="space-y-4">
              <SectionHeading
                id="user-responsibilities"
                number={6}
                title="User Responsibilities"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                You are solely responsible for how you configure and operate{" "}
                {LEGAL_CONFIG.app.name} on your Android device, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <li>
                  Understanding how full-screen overlays, wake gestures, unlock methods, and
                  automation rules behave before leaving the screen in Blackout or AOD mode;
                </li>
                <li>
                  Maintaining physical control and security of your Android device and knowing
                  your device&apos;s system PIN, pattern, password, or biometric credentials;
                </li>
                <li>
                  Ensuring that using a screen overlay or Focus Mode schedule does not
                  interfere with critical tasks, alarms, medical monitors, navigation prompts,
                  or emergency communications.
                </li>
              </ul>
            </section>

            {/* 7. DEVICE AND SYSTEM SETTINGS */}
            <section aria-labelledby="device-settings" className="space-y-4">
              <SectionHeading
                id="device-settings"
                number={7}
                title="Device and System Settings"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Certain features of {LEGAL_CONFIG.app.name} require you to grant Android system
                permissions or adjust operating-system settings, such as{" "}
                <code className="font-mono text-white">SYSTEM_ALERT_WINDOW</code> (Display over
                other apps), <code className="font-mono text-white">PACKAGE_USAGE_STATS</code>{" "}
                (Usage access for Focus Mode), <code className="font-mono text-white">USE_BIOMETRIC</code>,
                and <code className="font-mono text-white">POST_NOTIFICATIONS</code>.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                In addition, the <strong className="text-white">Background Protection</strong>{" "}
                feature checks Android system conditions such as battery optimization and
                background restrictions and may provide shortcuts to Android system settings.
                Its purpose is to help the foreground service remain active on devices where
                OEM background management may otherwise stop it. You decide whether to modify
                your device&apos;s system settings, and we do not guarantee uninterrupted
                background service operation on every Android device or manufacturer ROM.
              </p>
            </section>

            {/* 8. SAFETY AND SCREEN-BLACKOUT RESPONSIBILITY */}
            <section aria-labelledby="safety-responsibility" className="space-y-4">
              <SectionHeading
                id="safety-responsibility"
                number={8}
                title="Safety and Screen-Blackout Responsibility"
              />
              <LegalCallout
                variant="safety"
                title="Mandatory Visual Awareness & Safety Warning"
              >
                <p className="font-semibold text-white">
                  You remain solely responsible for maintaining visual awareness of your
                  environment and your device display whenever required. {LEGAL_CONFIG.app.name}{" "}
                  is NOT a safety-critical system.
                </p>
                <p>
                  Because Black Screen / Blackout Mode, Always-On Display, Pocket Mode, and
                  Floating Lock intentionally obscure or darken visible screen output,{" "}
                  <strong className="text-white">
                    {LEGAL_CONFIG.app.name} must NOT be used in any situation where you need to
                    see:
                  </strong>
                </p>
                <ul className="list-disc pl-5 space-y-1 text-white">
                  <li>Traffic, vehicles, pedestrians, or cycling/driving hazards</li>
                  <li>Road conditions, navigation maps, or turn-by-turn visual prompts</li>
                  <li>Emergency alerts, severe weather alerts, or public safety broadcasts</li>
                  <li>Safety warnings, medical device alerts, or industrial/equipment monitors</li>
                  <li>Critical device notifications, incoming emergency calls, or system dialogs</li>
                  <li>Any other visually important or time-sensitive information</li>
                </ul>
              </LegalCallout>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Never interact with, configure, or attempt to unlock {LEGAL_CONFIG.app.name} while
                driving, operating machinery, cycling, or walking in hazardous areas.
              </p>
            </section>

            {/* 9. FOCUS MODE RESPONSIBILITY */}
            <section aria-labelledby="focus-mode-responsibility" className="space-y-4">
              <SectionHeading
                id="focus-mode-responsibility"
                number={9}
                title="Focus Mode Responsibility"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Focus Mode allows you to select installed launchable applications on your
                device and configure app blocking schedules or usage limits enforced locally via{" "}
                <code className="font-mono text-white">PackageManager</code> and{" "}
                <code className="font-mono text-white">UsageStatsManager</code>.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                You are solely responsible for the applications you select to restrict and the
                schedules or time limits you configure. Do not block or restrict applications
                that you may need for emergencies, banking verification, health monitoring,
                workplace safety, or essential communication. Focus Mode is a voluntary
                self-management aid and is not guaranteed to prevent all access to restricted
                applications under all Android system states.
              </p>
            </section>

            {/* 10. BIOMETRIC/APP LOCK RESPONSIBILITY */}
            <section aria-labelledby="biometric-responsibility" className="space-y-4">
              <SectionHeading
                id="biometric-responsibility"
                number={10}
                title="Biometric/App Lock Responsibility"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} may use AndroidX{" "}
                <code className="font-mono text-white">BiometricPrompt</code>,{" "}
                <code className="font-mono text-white">BiometricManager</code>, and{" "}
                <code className="font-mono text-white">KeyguardManager</code> (supporting{" "}
                <code className="font-mono text-white">BIOMETRIC_STRONG</code>,{" "}
                <code className="font-mono text-white">BIOMETRIC_WEAK</code>, and{" "}
                <code className="font-mono text-white">DEVICE_CREDENTIAL</code>) to authenticate
                unlock actions, and locally enforces a 30-second cooldown with short haptic
                feedback after 3 failed authentication attempts.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Because {LEGAL_CONFIG.app.name} does not store raw biometric templates or
                device PINs and relies on Android&apos;s system authentication framework, you
                are responsible for maintaining valid credentials registered in your Android
                system settings. Furthermore, while{" "}
                <code className="font-mono text-white">
                  WindowManager.LayoutParams.FLAG_SECURE
                </code>{" "}
                is used to prevent screenshots and screen recording of protected application
                windows where Android supports that behavior, it does not protect every screen
                of your Android device and does not prevent every possible method of recording
                or unauthorized physical access.
              </p>
            </section>

            {/* 11. ADVERTISEMENTS (UNITY ADS) */}
            <section aria-labelledby="rewarded-ads" className="space-y-4">
              <SectionHeading
                id="rewarded-ads"
                number={11}
                title="Advertisements (Unity Ads)"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                {LEGAL_CONFIG.app.name} integrates the third-party{" "}
                <strong className="text-white">Unity Ads</strong> SDK (
                <code className="font-mono text-white">{LEGAL_CONFIG.unityAds.sdkArtifact}</code>,
                Unity Game ID <code className="font-mono text-white">{LEGAL_CONFIG.unityAds.gameId}</code>)
                to display <strong className="text-white">Banner Ads</strong> and{" "}
                <strong className="text-white">Video Ads</strong> only. No other advertising
                networks or mediation platforms are integrated.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Advertisement availability depends on active internet connectivity (
                <code className="font-mono text-white">android.permission.INTERNET</code> and{" "}
                <code className="font-mono text-white">
                  android.permission.ACCESS_NETWORK_STATE
                </code>
                ), regional ad inventory, and Unity Ads service operation. We do not guarantee
                that a Video advertisement will always be available to load when requested,
                nor are we responsible for the third-party products or services promoted
                inside advertisements delivered by Unity Ads.
              </p>
            </section>

            {/* 12. 7-DAY FLOATING LOCK ENTITLEMENTS */}
            <section
              aria-labelledby="floating-lock-entitlements"
              className="space-y-4"
            >
              <SectionHeading
                id="floating-lock-entitlements"
                number={12}
                title="7-Day Floating Lock Entitlements"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                The Floating Lock feature provides 4 permanently free icon styles and 13
                premium icon styles. Watching a qualifying Video advertisement grants a
                temporary <strong className="text-white">7-day entitlement</strong> to use a
                premium Floating Lock icon style, subject to the following technical and legal
                conditions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <li>
                  <strong className="text-white">Local-Only Tracking:</strong> Temporary 7-day
                  entitlements are stored locally in{" "}
                  <code className="font-mono text-white">NoxFloatingLockEntitlements</code> and
                  evaluated using{" "}
                  <code className="font-mono text-white">System.currentTimeMillis()</code> and{" "}
                  <code className="font-mono text-white">SystemClock.elapsedRealtime()</code>.
                </li>
                <li>
                  <strong className="text-white">Not a Server-Side Subscription:</strong> A
                  temporary 7-day unlock is strictly a local feature state unlocked via a video
                  advertisement. It is <strong className="text-white">not</strong> a recurring
                  subscription, cloud entitlement, or paid purchase.
                </li>
                <li>
                  <strong className="text-white">No Monetary Value:</strong> Temporary Floating
                  Lock entitlements have no cash or monetary value, cannot be redeemed for
                  money, and cannot be transferred between devices or users.
                </li>
                <li>
                  <strong className="text-white">Effect of Clearing Data or Uninstalling:</strong>{" "}
                  Because entitlement timing is stored locally in{" "}
                  <code className="font-mono text-white">SharedPreferences</code>, clearing{" "}
                  {LEGAL_CONFIG.app.name}&apos;s app data/storage in Android Settings or
                  uninstalling the application will remove active local entitlement timers.
                </li>
              </ul>
            </section>

            {/* 13. THIRD-PARTY SERVICES */}
            <section aria-labelledby="third-party-services" className="space-y-4">
              <SectionHeading
                id="third-party-services"
                number={13}
                title="Third-Party Services"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                When using {LEGAL_CONFIG.app.name}, it is important to distinguish between the
                application itself and external third-party services:
              </p>
              <div className="space-y-3 text-sm leading-relaxed text-[#E2E8F0]">
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <strong className="text-white block">
                    1. {LEGAL_CONFIG.app.name}
                  </strong>
                  <span className="text-xs text-[#94A3B8]">
                    The Android utility application itself (<code className="font-mono text-white">{LEGAL_CONFIG.app.packageName}</code>),
                    provided by {LEGAL_CONFIG.placeholders.developerLegalName} ({LEGAL_CONFIG.placeholders.developerType}),
                    which executes screen blackout, AOD, Floating Lock, Pocket Mode, Focus
                    Mode, and local statistics on your device.
                  </span>
                </div>
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <strong className="text-white block">
                    2. Unity Ads (External Advertising Provider)
                  </strong>
                  <span className="text-xs text-[#94A3B8]">
                    An independent third-party advertising network (<code className="font-mono text-white">{LEGAL_CONFIG.unityAds.sdkArtifact}</code>)
                    that delivers Banner Ads and Video Ads. Unity&apos;s services and data
                    processing are governed by Unity&apos;s own terms and{" "}
                    <a
                      href={LEGAL_CONFIG.unityAds.privacyPolicyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00E5FF] underline hover:text-white"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>
                <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 print-surface">
                  <strong className="text-white block">
                    3. WhatsApp (External Communication &amp; Support Provider)
                  </strong>
                  <span className="text-xs text-[#94A3B8]">
                    An independent external messaging service opened when you select WhatsApp
                    Support (<code className="font-mono text-white">{LEGAL_CONFIG.whatsappSupport.phoneNumber}</code>{" "}
                    / <code className="font-mono text-white">{LEGAL_CONFIG.whatsappSupport.rawUrl}</code>).
                    Any communication you initiate through WhatsApp is governed by
                    WhatsApp&apos;s own terms of service and privacy policies.
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#94A3B8]">
                The Developer ({LEGAL_CONFIG.placeholders.developerLegalName}) does not control
                and assumes no liability for the availability, content, or privacy practices of
                Unity Ads, WhatsApp, or any other third-party service.
              </p>
            </section>

            {/* 14. PROHIBITED ACTIVITIES */}
            <section aria-labelledby="prohibited-activities" className="space-y-4">
              <SectionHeading
                id="prohibited-activities"
                number={14}
                title="Prohibited Activities"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                <li>
                  Reverse engineering, decompiling, disassembling, or attempting to derive the
                  source code of {LEGAL_CONFIG.app.name}, except to the limited extent
                  expressly permitted by applicable law;
                </li>
                <li>
                  Modifying, tampering with, repackaging, or distributing unauthorized
                  derivative versions (modified APKs) of{" "}
                  <code className="font-mono text-white">{LEGAL_CONFIG.app.packageName}</code>;
                </li>
                <li>
                  Generating fraudulent advertisement impressions, automated clicks, or
                  manipulating Unity Ads video advertisement callbacks or local{" "}
                  <code className="font-mono text-white">NoxFloatingLockEntitlements</code>{" "}
                  records;
                </li>
                <li>
                  Using {LEGAL_CONFIG.app.name}&apos;s screen blackout, overlay, or App Lock
                  features on another person&apos;s device without their explicit authorization
                  or to deceive, lock out, or interfere with another user.
                </li>
              </ul>
            </section>

            {/* 15. INTELLECTUAL PROPERTY */}
            <section aria-labelledby="intellectual-property" className="space-y-4">
              <SectionHeading
                id="intellectual-property"
                number={15}
                title="Intellectual Property"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                All rights, title, and interest in and to {LEGAL_CONFIG.app.name}, including
                its user interface design, custom clock styles (<em>Orbital Neon</em>,{" "}
                <em>Neon Outline</em>, <em>Orbital Chrono</em>, <em>Neon Pulse</em>), Floating
                Lock icon assets, graphics, code, and documentation, are owned by or licensed
                to{" "}
                <strong className="text-white">
                  {LEGAL_CONFIG.placeholders.developerLegalName}
                </strong>{" "}
                ({LEGAL_CONFIG.placeholders.developerType}). Android is a trademark of Google
                LLC. Unity is a trademark of Unity Technologies. WhatsApp is a trademark of
                WhatsApp LLC. All third-party trademarks are the property of their respective
                owners.
              </p>
            </section>

            {/* 16. UPDATES AND CHANGES */}
            <section aria-labelledby="updates-changes" className="space-y-4">
              <SectionHeading
                id="updates-changes"
                number={16}
                title="Updates and Changes"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                We may release updates, patches, or new versions of {LEGAL_CONFIG.app.name} or
                modify these Terms from time to time. We have no obligation to provide
                specific future features or maintain backward compatibility with all older
                Android versions. Updated Terms will be posted on this page with an updated
                &ldquo;Last Updated&rdquo; date.
              </p>
            </section>

            {/* 17. AVAILABILITY AND DEVICE COMPATIBILITY */}
            <section
              aria-labelledby="availability-compatibility"
              className="space-y-4"
            >
              <SectionHeading
                id="availability-compatibility"
                number={17}
                title="Availability and Device Compatibility"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Android devices vary widely across manufacturers (OEMs), display panel types
                (OLED, AMOLED, LCD), hardware sensor implementations, and custom power-saving
                or background-process managers. We do not guarantee that{" "}
                {LEGAL_CONFIG.app.name}, its foreground service, Background Protection
                shortcuts, Quick Settings Tile, Home Screen Widget, or sensor automations will
                operate without interruption on every Android device or operating-system
                configuration.
              </p>
            </section>

            {/* 18. DISCLAIMER OF WARRANTIES */}
            <section aria-labelledby="disclaimer-warranties" className="space-y-4">
              <SectionHeading
                id="disclaimer-warranties"
                number={18}
                title="Disclaimer of Warranties"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,{" "}
                <strong className="text-white">
                  {LEGAL_CONFIG.app.name.toUpperCase()} IS PROVIDED ON AN &ldquo;AS IS&rdquo;
                  AND &ldquo;AS AVAILABLE&rdquo; BASIS
                </strong>
                , WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
                INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                Without limiting the foregoing, the Developer makes no warranty or guarantee
                that: (a) {LEGAL_CONFIG.app.name} will achieve any specific battery percentage
                or mAh energy saving; (b) OLED Pixel Shift or Blackout Mode will completely
                prevent display burn-in or hardware wear; (c) Background Protection will
                prevent every OEM operating system from stopping background services; or (d){" "}
                <code className="font-mono text-white">FLAG_SECURE</code> or biometric prompts
                will prevent all unauthorized screen capture or physical device access.
              </p>
            </section>

            {/* 19. LIMITATION OF LIABILITY */}
            <section aria-labelledby="limitation-liability" className="space-y-4">
              <SectionHeading
                id="limitation-liability"
                number={19}
                title="Limitation of Liability"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL{" "}
                <strong className="text-white">
                  {LEGAL_CONFIG.placeholders.developerLegalName}
                </strong>{" "}
                BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY
                DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF DATA, MISSED
                NOTIFICATIONS OR ALARMS, DISPLAY HARDWARE WEAR, BATTERY DEGRADATION, PERSONAL
                INJURY RESULTING FROM FAILURE TO MAINTAIN VISUAL AWARENESS, OR THIRD-PARTY
                SERVICE INTERRUPTIONS, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR
                INABILITY TO USE {LEGAL_CONFIG.app.name}.
              </p>
            </section>

            {/* 20. TERMINATION */}
            <section aria-labelledby="termination" className="space-y-4">
              <SectionHeading id="termination" number={20} title="Termination" />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                You may terminate these Terms at any time by ceasing all use of{" "}
                {LEGAL_CONFIG.app.name} and uninstalling the application from your Android
                device. Your license rights under these Terms will terminate automatically if
                you fail to comply with any provision of these Terms. Sections relating to
                Safety Responsibility, Intellectual Property, Disclaimer of Warranties,
                Limitation of Liability, and Governing Law shall survive termination.
              </p>
            </section>

            {/* 21. GOVERNING LAW */}
            <section aria-labelledby="governing-law" className="space-y-4">
              <SectionHeading id="governing-law" number={21} title="Governing Law" />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                No specific governing-law jurisdiction is stated by the individual developer.
                Nothing in these Terms limits, excludes, or waives any mandatory consumer
                protection, privacy, or statutory rights that apply to you under the laws of
                your habitual residence or applicable jurisdiction.
              </p>
              <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 text-xs sm:text-sm print-surface">
                <span className="text-[#94A3B8]">Governing Law &amp; Jurisdiction: </span>
                <LegalFieldDisplay
                  label="Governing Law & Jurisdiction"
                  value={LEGAL_CONFIG.placeholders.governingLaw}
                />
              </div>
            </section>

            {/* 22. CONTACT INFORMATION */}
            <section aria-labelledby="contact-section" className="space-y-4">
              <SectionHeading
                id="contact-section"
                number={22}
                title="Contact Information"
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
                For questions or support inquiries regarding these Terms of Use or{" "}
                <strong className="text-white">{LEGAL_CONFIG.app.name}</strong> (
                <code className="font-mono text-white">{LEGAL_CONFIG.app.packageName}</code>),
                please contact:
              </p>

              <div className="rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-5 space-y-4 print-surface">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm">
                  <div>
                    <div className="text-xs text-[#94A3B8]">Developer</div>
                    <div className="mt-1 font-semibold text-white">
                      {LEGAL_CONFIG.placeholders.developerLegalName} ({LEGAL_CONFIG.placeholders.developerType})
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">Developer / Support Email</div>
                    <div className="mt-1">
                      <LegalFieldDisplay
                        label="Developer Support Email"
                        value={LEGAL_CONFIG.placeholders.supportEmail}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">WhatsApp Support Number</div>
                    <div className="mt-1 font-medium text-white">
                      <code className="font-mono text-[#00FF88]">
                        {LEGAL_CONFIG.whatsappSupport.phoneNumber}
                      </code>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">Direct WhatsApp Support URL</div>
                    <div className="mt-1">
                      <a
                        href={LEGAL_CONFIG.whatsappSupport.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#00E5FF] underline hover:text-white break-all"
                      >
                        <span>{LEGAL_CONFIG.whatsappSupport.rawUrl}</span>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="text-xs text-[#94A3B8]">Official Legal Website</div>
                    <div className="mt-1">
                      <a
                        href={LEGAL_CONFIG.placeholders.officialWebsiteUrl}
                        className="font-mono text-xs text-[#00E5FF] underline hover:text-white break-all"
                      >
                        {LEGAL_CONFIG.placeholders.officialWebsiteUrl}
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
