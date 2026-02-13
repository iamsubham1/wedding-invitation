// ================================
// Global in-memory cache
// ================================
let blessings = [];
let lastFetchedAt = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// ================================
// Config
// ================================
const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyzJTdWvtIduwg-fgWs-gBcJJD_yErC8wT1blPBOmLnXJ06MZs7Wby9QBKSVbhhnOWo/exec";

// CORS Headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// ================================
// Utils
// ================================
const formatDate = (dateString) => {
  if (!dateString) return "";

  if (dateString.includes("T")) {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  return dateString;
};

// ================================
// Data fetcher
// ================================
async function fetchBlessings(force = false) {
  const now = Date.now();

  if (!force && blessings.length && now - lastFetchedAt < CACHE_TTL) {
    return blessings;
  }

  const res = await fetch(GOOGLE_APPS_SCRIPT_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch Google Apps Script");
  }

  const raw = await res.json();

  blessings = (Array.isArray(raw) ? raw : []).map((b, i) => ({
    id: b.id || String(i + 1),
    name: b.name || b.Name || "",
    message: b.message || b.Message || "",
    date: formatDate(b.date || b.Date || ""),
  }));

  lastFetchedAt = now;
  return blessings;
}

// ================================
// Worker entry
// ================================
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const refresh = url.searchParams.get("refresh") === "true";

    // ✅ Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    try {
      // ================================
      // Root
      // ================================
      if (path === "/") {
        return new Response(
          JSON.stringify({
            message: "🎉 Wedding Invitation API",
            version: "1.0.0",
            runtime: "cloudflare-worker",
          }),
          {
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          },
        );
      }

      // ================================
      // Health
      // ================================
      if (path === "/api/health") {
        return new Response(
          JSON.stringify({
            success: true,
            timestamp: new Date().toISOString(),
          }),
          {
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          },
        );
      }

      // ================================
      // Get all blessings
      // ================================
      if (path === "/api/blessings" && request.method === "GET") {
        const data = await fetchBlessings(refresh);
        return new Response(JSON.stringify(data), {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      // ================================
      // Stats
      // ================================
      if (path === "/api/blessings/stats/count") {
        const data = await fetchBlessings(refresh);
        return new Response(JSON.stringify({ count: data.length }), {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      // ================================
      // Not found
      // ================================
      return new Response("Not Found", {
        status: 404,
        headers: corsHeaders,
      });
    } catch (err) {
      return new Response(
        JSON.stringify({
          success: false,
          error: err.message,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        },
      );
    }
  },
};
