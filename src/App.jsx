import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from "react-router-dom";
import { FileText, Scale, AlertCircle } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import { LEGAL_CONFIG } from "./config/legalConfig";

function RouteMetadataAndScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const isTerms = location.pathname === "/terms-of-use";
    const canonicalHref = isTerms
      ? LEGAL_CONFIG.placeholders.termsWebsiteUrl
      : LEGAL_CONFIG.placeholders.officialWebsiteUrl;

    const pageTitle = isTerms
      ? "NoxScreen Pro Terms of Use"
      : "NoxScreen Pro Privacy Policy";

    document.title = pageTitle;

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalHref);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalHref);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", pageTitle);

    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

function NotFoundFallback() {
  useEffect(() => {
    document.title = `Page Not Found — ${LEGAL_CONFIG.app.name}`;
  }, []);

  return (
    <main
      id="main-content"
      className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center space-y-6"
    >
      <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#1C2D4A] bg-[#0B1324] text-[#FFB300]">
        <AlertCircle className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="space-y-2">
        <p className="font-mono text-xs text-[#00E676]">
          {LEGAL_CONFIG.app.packageName} · v{LEGAL_CONFIG.app.versionName}
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Requested Legal Route Not Found
        </h1>
        <p className="text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          The URL you requested does not match an active legal document route.
          You can access the official {LEGAL_CONFIG.app.name} Privacy Policy or
          Terms of Use directly using the links below.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          to="/privacy-policy"
          className="inline-flex items-center gap-2 rounded-lg bg-[#00E676] px-5 py-2.5 text-xs font-semibold text-[#020612] hover:bg-[#00FF88] transition-colors"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          <span>View Privacy Policy (/privacy-policy)</span>
        </Link>
        <Link
          to="/terms-of-use"
          className="inline-flex items-center gap-2 rounded-lg border border-[#1C2D4A] bg-[#0B1324] px-5 py-2.5 text-xs font-semibold text-white hover:border-[#00E5FF] transition-colors"
        >
          <Scale className="h-4 w-4 text-[#00E5FF]" aria-hidden="true" />
          <span>View Terms of Use (/terms-of-use)</span>
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteMetadataAndScrollHandler />
      <div className="flex min-h-screen flex-col bg-[#020612] text-white">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/privacy-policy" replace />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="*" element={<NotFoundFallback />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
