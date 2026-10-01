/**
 * Centralized Legal & Technical Configuration for NoXScreen / NoxScreen Pro
 *
 * IMPORTANT SOURCE-OF-TRUTH NOTICE:
 * Unresolved legal fields intentionally retain explicit "[... — Developer Confirmation Required]"
 * placeholders. Do not replace these placeholders with fabricated or fictional legal details.
 */

export const LEGAL_CONFIG = {
  // 1. Verified Application Identity (Confirmed via Technical Audit)
  app: {
    name: "NoXScreen",
    manifestTitle: "NoxScreen Pro",
    tagline: "ECO SCREEN OPTIMIZER",
    packageName: "com.noxscreen.app",
    versionName: "1.0.0",
    versionCode: "1",
    platform: "Android",
    backupAttribute: 'android:allowBackup="true"',
  },

  // 2. Centralized Placeholders Requiring Developer Confirmation (Section 31 & 40)
  placeholders: {
    developerLegalName: "[Developer / Company Legal Name — Developer Confirmation Required]",
    supportEmail: "[Developer Support Email — Developer Confirmation Required]",
    effectiveDate: "[Effective Date — Developer Confirmation Required]",
    lastUpdatedDate: "[Last Updated Date — Developer Confirmation Required]",
    governingLaw: "[Governing Law & Jurisdiction — Developer Confirmation Required]",
    officialWebsiteUrl: "[Official Legal Website URL — Developer Confirmation Required]",
  },

  // 3. Verified External Support Service (Section 15 & 35)
  whatsappSupport: {
    providerName: "WhatsApp / WhatsApp Business",
    accountName: "NoXScreen Support",
    phoneNumber: "+252637864155",
    rawUrl: "https://wa.me/252637864155",
    prefilledMessage: "Hello, I need support with NoXScreen.",
    ctaUrl: "https://wa.me/252637864155?text=Hello%2C%20I%20need%20support%20with%20NoXScreen.",
  },

  // 4. Verified Third-Party Advertising SDK (Section 21)
  unityAds: {
    providerName: "Unity Ads",
    sdkArtifact: "com.unity3d.ads:unity-ads:4.12.3",
    gameId: "5990107",
    testMode: "false",
    placements: ["Banner", "Interstitial", "Rewarded Video"],
    rewardEntitlementDays: 7,
    privacyPolicyUrl: "https://unity.com/legal/privacy-policy",
  },

  // 5. Verified Local SharedPreferences Stores (Section 17)
  sharedPreferences: [
    {
      fileName: "BlackScreenStats",
      category: "Usage & Localization Preferences",
      keysAndContents: [
        "total_time_saved — Cumulative black-screen active time calculated locally",
        "usage_count — Total number of Black Screen activations",
        "app_language — User-selected interface language code",
      ],
      storageScope: "Local device app storage (eligible for Android system backup if enabled on device)",
    },
    {
      fileName: "NoxAutomationPrefs",
      category: "Feature & Automation Configuration",
      keysAndContents: [
        "AOD settings, clock style (Orbital Neon, Neon Outline, Orbital Chrono, Neon Pulse), and neon theme",
        "OLED pixel shift configuration and unlock-screen settings",
        "Pocket Mode, Shake to Wake, and stationary timer configuration",
        "Floating Lock overlay settings and security preferences",
        "Focus Mode schedule, usage limits, and selected blocked-app package names",
      ],
      storageScope: "Local device app storage (eligible for Android system backup if enabled on device)",
    },
    {
      fileName: "NoxFloatingLockEntitlements",
      category: "Temporary Rewarded Feature Timing",
      keysAndContents: [
        "Locally stored entitlement timing information for temporary 7-day premium Floating Lock icon styles",
        "Evaluated locally via System.currentTimeMillis() and SystemClock.elapsedRealtime()",
      ],
      storageScope: "Local device app storage (not a server-side subscription; no monetary value)",
    },
    {
      fileName: "NoxAppSecurity",
      category: "Operational Authentication Controls",
      keysAndContents: [
        "Failed authentication attempt counter (triggers after 3 failed attempts)",
        "Lockout cooldown timing state (30-second operational cooldown window)",
      ],
      storageScope: "Local device app storage",
    },
    {
      fileName: "NoxUsageAnalytics",
      category: "On-Device Activity Distribution",
      keysAndContents: [
        "Hourly activation counters used for on-device statistics, achievement/level progress, and local usage suggestions",
      ],
      storageScope: "Local device app storage (not transmitted to developer-operated servers)",
    },
  ],

  // 6. Verified Android Permissions & Hardware Access (Section 23 & 38)
  permissions: [
    {
      id: "SYSTEM_ALERT_WINDOW",
      manifestName: "android.permission.SYSTEM_ALERT_WINDOW",
      shortName: "SYSTEM_ALERT_WINDOW",
      purpose: "Black Screen overlay and Floating Lock",
      requirement: "Core",
      dataBehavior: "Overlay UI",
      featureUsingIt: "Black Screen / Blackout Mode, Always-On Display (AOD), and Floating Lock draggable overlay button",
      privacyImplication:
        "Allows the app to draw a full-screen black overlay or draggable Floating Lock button over other apps. Does not capture screen pixels or record content from underlying apps.",
      plainExplanation:
        "Required so NoXScreen can place a black screen layer or floating lock button on top of the active display to reduce visible screen output while allowing background audio or media to continue where supported.",
    },
    {
      id: "PACKAGE_USAGE_STATS",
      manifestName: "android.permission.PACKAGE_USAGE_STATS",
      shortName: "PACKAGE_USAGE_STATS",
      purpose: "Focus Mode",
      requirement: "Optional",
      dataBehavior: "Local usage monitoring",
      featureUsingIt: "Focus Mode app blocking schedules and usage limits (via UsageStatsManager)",
      privacyImplication:
        "Reads foreground application usage events locally on the device to determine whether a user-selected application exceeds configured usage limits or active Focus Mode schedules. Processed locally and not uploaded to developer-operated servers.",
      plainExplanation:
        "Only needed if you enable Focus Mode. It allows NoXScreen to check which app is currently in the foreground so it can enforce the blocking schedules or time limits you set.",
    },
    {
      id: "FOREGROUND_SERVICE",
      manifestName: "android.permission.FOREGROUND_SERVICE",
      shortName: "FOREGROUND_SERVICE",
      purpose: "Background foreground service operation",
      requirement: "Core",
      dataBehavior: "Service lifecycle",
      featureUsingIt: "Blackout overlay service, Floating Lock persistence, and Pocket Mode automation",
      privacyImplication:
        "Maintains an active Android foreground service so overlay and automation features remain responsive while another app is open. Does not collect personal user data.",
      plainExplanation:
        "Allows NoXScreen to keep its screen-blackout and floating lock service running reliably while you use other apps, accompanied by a visible system notification.",
    },
    {
      id: "FOREGROUND_SERVICE_SPECIAL_USE",
      manifestName: "android.permission.FOREGROUND_SERVICE_SPECIAL_USE",
      shortName: "FOREGROUND_SERVICE_SPECIAL_USE",
      purpose: "Special-use foreground service",
      requirement: "Core",
      dataBehavior: "Service operation",
      featureUsingIt: "Continuous screen-management overlay and sensor-driven automation on modern Android versions",
      privacyImplication:
        "Declares the special-use foreground service category required by Android 14+ for continuous display overlay and hardware-sensor utility operations.",
      plainExplanation:
        "Required by newer versions of Android to classify NoXScreen's continuous screen-overlay and pocket-detection utility service.",
    },
    {
      id: "USE_BIOMETRIC",
      manifestName: "android.permission.USE_BIOMETRIC",
      shortName: "USE_BIOMETRIC",
      purpose: "Biometric authentication",
      requirement: "Optional",
      dataBehavior: "Android system authentication",
      featureUsingIt: "Biometric & Device Credential unlock protection (BiometricPrompt, BiometricManager, KeyguardManager)",
      privacyImplication:
        "Invokes Android's standard system authentication dialog (BIOMETRIC_STRONG, BIOMETRIC_WEAK, or DEVICE_CREDENTIAL). NoXScreen never receives, accesses, or stores raw fingerprint templates, facial biometric templates, or device PIN values.",
      plainExplanation:
        "Used when you enable biometric or screen-lock protection. The Android system verifies your fingerprint, face, PIN, pattern, or password and simply tells NoXScreen whether authentication succeeded.",
    },
    {
      id: "POST_NOTIFICATIONS",
      manifestName: "android.permission.POST_NOTIFICATIONS",
      shortName: "POST_NOTIFICATIONS",
      purpose: "Foreground service notification",
      requirement: "Platform-dependent",
      dataBehavior: "Service notification",
      featureUsingIt: "Foreground service status notification and quick controls on Android 13+",
      privacyImplication:
        "Displays persistent status notifications when the NoXScreen foreground service is running so the user is aware the service is active.",
      plainExplanation:
        "Allows NoXScreen to show a notification in your status bar when the black-screen service or automation is active.",
    },
    {
      id: "WAKE_LOCK",
      manifestName: "android.permission.WAKE_LOCK",
      shortName: "WAKE_LOCK",
      purpose: "Wake/sleep management",
      requirement: "Core",
      dataBehavior: "Power/display behavior",
      featureUsingIt: "Black Screen overlay, Always-On Display (AOD), and media playback continuity",
      privacyImplication:
        "Manages processor and display wake states during active blackout or AOD sessions. Does not access personal data.",
      plainExplanation:
        "Helps control display wake and sleep behavior so background processes or Always-On Display modes operate as configured during blackout sessions.",
    },
    {
      id: "VIBRATE",
      manifestName: "android.permission.VIBRATE",
      shortName: "VIBRATE",
      purpose: "Authentication feedback",
      requirement: "Optional feature behavior",
      dataBehavior: "Haptic feedback",
      featureUsingIt: "Failed-authentication protection (3 failed attempts / 30-second cooldown) and interaction feedback",
      privacyImplication:
        "Triggers short device vibration pulses for tactile confirmation or failed authentication feedback. No data is read or stored by the vibration motor.",
      plainExplanation:
        "Provides a brief vibration when authentication fails or when interacting with lock controls.",
    },
    {
      id: "INTERNET",
      manifestName: "android.permission.INTERNET",
      shortName: "INTERNET",
      purpose: "Advertising/network communication",
      requirement: "Required for ads",
      dataBehavior: "Network access",
      featureUsingIt: "Unity Ads SDK (com.unity3d.ads:unity-ads:4.12.3) advertisement requests and network/DNS reachability checks",
      privacyImplication:
        "Enables network communication primarily for loading Banner, Interstitial, and Rewarded Video advertisements via the third-party Unity Ads SDK and verifying network reachability. Because advertising functionality uses network access, the app is not completely offline.",
      plainExplanation:
        "Required primarily so the integrated Unity Ads service can load advertisements (including rewarded ads that unlock temporary 7-day Floating Lock styles) and check internet reachability.",
    },
    {
      id: "ACCESS_NETWORK_STATE",
      manifestName: "android.permission.ACCESS_NETWORK_STATE",
      shortName: "ACCESS_NETWORK_STATE",
      purpose: "Network availability check",
      requirement: "Supporting",
      dataBehavior: "Connectivity status",
      featureUsingIt: "Pre-request connectivity checks and Unity Ads SDK network handling",
      privacyImplication:
        "Checks whether an active network connection is available before attempting network operations or ad requests.",
      plainExplanation:
        "Allows the app to detect whether your device is connected to the internet before trying to load advertisements.",
    },
    {
      id: "SENSORS",
      manifestName: "Hardware Sensors (Proximity, Ambient Light, Accelerometer)",
      shortName: "Sensors",
      purpose: "Pocket Mode/Shake/Stationary",
      requirement: "Optional hardware",
      dataBehavior: "Local sensor processing",
      featureUsingIt: "Pocket Mode, Shake to Wake, stationary detection, and automatic screen-blackout behavior",
      privacyImplication:
        "According to the verified audit, sensor readings are processed locally in real time for the relevant feature and are not intentionally recorded as historical sensor datasets or transmitted by NoXScreen.",
      plainExplanation:
        "Reads device movement, tilt, proximity, and light levels locally on your phone to detect when the phone is in a pocket, stationary, or shaken to wake.",
    },
    {
      id: "PACKAGE_VISIBILITY_QUERIES",
      manifestName: "Package visibility queries (<queries> / PackageManager)",
      shortName: "Package visibility queries",
      purpose: "Launcher app selection / WhatsApp detection",
      requirement: "Supporting",
      dataBehavior: "Package discovery",
      featureUsingIt: "Focus Mode installed launchable app selector (PackageManager) and WhatsApp Support intent availability check",
      privacyImplication:
        "Queries installed launchable applications (package names, labels, icons) locally for Focus Mode selection and checks whether WhatsApp or WhatsApp Business is installed before launching support links. Not uploaded to developer-operated servers.",
      plainExplanation:
        "Allows NoXScreen to list apps on your device so you can choose which ones to block in Focus Mode, and to check if WhatsApp is installed when you tap WhatsApp Support.",
    },
  ],
};

/**
 * Helper to check if a string contains an unresolved developer confirmation placeholder.
 */
export function isPlaceholderValue(value) {
  if (typeof value !== "string") return false;
  return value.includes("Developer Confirmation Required");
}
