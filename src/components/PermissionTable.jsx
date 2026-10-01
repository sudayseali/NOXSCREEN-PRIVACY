import React, { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { LEGAL_CONFIG } from "../config/legalConfig";

export default function PermissionTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterCategories = [
    "All",
    "Core",
    "Optional",
    "Required for ads",
    "Supporting",
  ];

  const filteredPermissions = useMemo(() => {
    return LEGAL_CONFIG.permissions.filter((item) => {
      const matchesCategory =
        selectedFilter === "All" ||
        (selectedFilter === "Optional" &&
          item.requirement.toLowerCase().includes("optional")) ||
        (selectedFilter === "Supporting" &&
          (item.requirement === "Supporting" ||
            item.requirement === "Platform-dependent")) ||
        item.requirement === selectedFilter;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.shortName.toLowerCase().includes(q) ||
        item.manifestName.toLowerCase().includes(q) ||
        item.purpose.toLowerCase().includes(q) ||
        item.dataBehavior.toLowerCase().includes(q) ||
        item.featureUsingIt.toLowerCase().includes(q) ||
        item.privacyImplication.toLowerCase().includes(q) ||
        item.plainExplanation.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedFilter]);

  return (
    <div className="space-y-5">
      {/* Interactive Search & Filter Controls (No-print) */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-[#1C2D4A] bg-[#0B1324] p-4 no-print">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search permissions (e.g. SYSTEM_ALERT_WINDOW, Focus Mode, Ads)..."
            aria-label="Search Android permissions and hardware access"
            className="w-full rounded-lg border border-[#1C2D4A] bg-[#030712] py-2 pl-9 pr-8 text-xs text-white placeholder-[#94A3B8] focus:border-[#00E676] focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear permission search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-white cursor-pointer"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div
          role="group"
          aria-label="Filter permissions by requirement level"
          className="flex flex-wrap items-center gap-1.5 rounded-lg bg-[#030712] p-1 border border-[#1E293B]"
        >
          {filterCategories.map((category) => {
            const active = selectedFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedFilter(category)}
                className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  active
                    ? "bg-[#0B1324] text-[#00FF88] border border-[#00E676]/40"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Count summary */}
      <div className="flex items-center justify-between text-xs text-[#94A3B8] no-print">
        <span>
          Showing{" "}
          <strong className="font-mono text-white tabular-nums">
            {filteredPermissions.length}
          </strong>{" "}
          of{" "}
          <strong className="font-mono text-white tabular-nums">
            {LEGAL_CONFIG.permissions.length}
          </strong>{" "}
          documented permissions and system access declarations
        </span>
        {(searchQuery || selectedFilter !== "All") && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedFilter("All");
            }}
            className="text-[#00E5FF] underline hover:text-white cursor-pointer"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Responsive Desktop/Tablet Table (Section 23 & 38) */}
      <div className="overflow-x-auto rounded-lg border border-[#1C2D4A] bg-[#0B1324] print-surface">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-[#1C2D4A] bg-[#091122] text-xs font-semibold text-white">
              <th scope="col" className="py-3.5 px-4 whitespace-nowrap">
                Permission / Access
              </th>
              <th scope="col" className="py-3.5 px-4">
                Purpose & Feature Using It
              </th>
              <th scope="col" className="py-3.5 px-4 whitespace-nowrap">
                Required?
              </th>
              <th scope="col" className="py-3.5 px-4 whitespace-nowrap">
                Data / Behavior
              </th>
              <th scope="col" className="py-3.5 px-4 min-w-[260px]">
                Plain-Language Explanation & Privacy Implication
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E293B]">
            {filteredPermissions.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 px-4 text-center text-sm text-[#94A3B8]"
                >
                  No permissions match your current search query. Try clearing the search filter.
                </td>
              </tr>
            ) : (
              filteredPermissions.map((perm) => (
                <tr
                  key={perm.id}
                  className="align-top transition-colors hover:bg-[#091122]/60"
                >
                  <td className="py-4 px-4">
                    <div className="font-mono text-xs font-semibold text-[#00FF88] break-all sm:break-normal">
                      {perm.shortName}
                    </div>
                    <div className="mt-1 font-mono text-[11px] text-[#94A3B8] break-all">
                      {perm.manifestName}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-semibold text-white">{perm.purpose}</div>
                    <div className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                      <span className="text-white font-medium">Feature: </span>
                      {perm.featureUsingIt}
                    </div>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={`font-mono text-xs font-medium ${
                        perm.requirement === "Core"
                          ? "text-[#00E676]"
                          : perm.requirement === "Required for ads"
                          ? "text-[#FFB300]"
                          : "text-[#00E5FF]"
                      }`}
                    >
                      {perm.requirement}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-mono text-xs text-white whitespace-nowrap">
                    {perm.dataBehavior}
                  </td>
                  <td className="py-4 px-4 space-y-2 text-xs leading-relaxed">
                    <p className="text-white">
                      <strong className="text-[#00E5FF]">Plain Language: </strong>
                      {perm.plainExplanation}
                    </p>
                    <p className="text-[#94A3B8]">
                      <strong className="text-white">Privacy Implication: </strong>
                      {perm.privacyImplication}
                    </p>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
