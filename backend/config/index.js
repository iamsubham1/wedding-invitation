/**
 * API Configuration
 */

export const config = {
  PORT: process.env.PORT || 3001,
  NODE_ENV: process.env.NODE_ENV || "development",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
  GOOGLE_APPS_SCRIPT_URL:
    "https://script.google.com/macros/s/AKfycbyzJTdWvtIduwg-fgWs-gBcJJD_yErC8wT1blPBOmLnXJ06MZs7Wby9QBKSVbhhnOWo/exec",
};

/**
 * API Endpoints
 */
export const endpoints = {
  BLESSINGS: "/api/blessings",
  HEALTH: "/api/health",
  ROOT: "/",
};
