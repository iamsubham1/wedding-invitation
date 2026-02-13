let blessings = [];

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyzJTdWvtIduwg-fgWs-gBcJJD_yErC8wT1blPBOmLnXJ06MZs7Wby9QBKSVbhhnOWo/exec";

/**
 * Format ISO date to "6 Feb, 2026" format
 */
const formatDate = (dateString) => {
  if (!dateString) return "";

  // If date is in ISO format (2026-02-07T18:30:00.000Z), convert it
  if (dateString.includes("T")) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return dateString;
};

/**
 * Fetch blessings from Google Apps Script
 */
export const fetchFromGoogleAppsScript = async () => {
  try {
    console.log("Fetching blessings from Google Apps Script...");
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawBlessings = await response.json();
    console.log("Raw blessings received:", rawBlessings.length || 0, "items");

    // Format the blessings
    blessings = (Array.isArray(rawBlessings) ? rawBlessings : []).map(
      (blessing, index) => ({
        id: blessing.id || String(index + 1),
        name: blessing.name || blessing.Name || "",
        message: blessing.message || blessing.Message || "",
        date: formatDate(blessing.date || blessing.Date || ""),
      })
    );

    console.log("✅ Blessings loaded successfully:", blessings.length, "items");
    return { success: true, count: blessings.length };
  } catch (error) {
    console.error("❌ Fetch failed:", error.message);
    blessings = [];
    return { success: false, error: error.message };
  }
};

/**
 * Get all blessings
 */
export const getAllBlessings = () => {
  return blessings;
};
