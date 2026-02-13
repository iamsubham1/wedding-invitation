import express from "express";
import cors from "cors";
import { config, endpoints } from "./config/index.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import blessingsRoutes from "../api/routes/blessingsRoutes.js";
import { fetchFromGoogleAppsScript } from "./services/blessingsService.js";

const app = express();

// ===== Middleware =====
app.use(cors({ origin: config.CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== Routes =====

/**
 * Root endpoint
 */
app.get(endpoints.ROOT, (req, res) => {
  res.json({
    message: "🎉 Wedding Invitation API",
    version: "1.0.0",
    environment: config.NODE_ENV,
    endpoints: {
      "GET /api/blessings": "Fetch all blessings",
      "GET /api/blessings/:id": "Fetch blessing by ID",
      "POST /api/blessings": "Add a new blessing",
      "GET /api/blessings/stats/count": "Get blessings count",
      "GET /api/health": "Health check",
      "GET /api/blessings?refresh=true": "Refresh from Google Apps Script",
    },
  });
});

/**
 * Health check endpoint
 */
app.get(endpoints.HEALTH, (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
    timestamp: new Date().toISOString(),
    environment: config.NODE_ENV,
  });
});

/**
 * Blessings routes
 */
app.use(endpoints.BLESSINGS, blessingsRoutes);

// ===== Error Handling =====
app.use(notFound);
app.use(errorHandler);

// ===== Start Server =====
const startServer = async () => {
  try {
    // Fetch initial blessings from Google Apps Script
    console.log("📡 Loading blessings from Google Apps Script...");
    const result = await fetchFromGoogleAppsScript();

    if (result.success) {
      console.log(`✅ Loaded ${result.count} blessings`);
    } else {
      console.warn("⚠️  Could not load from Google Apps Script:", result.error);
    }

    // Start listening
    app.listen(config.PORT, () => {
      console.log("🎊 Wedding Invitation API Server");
      console.log(`🚀 Server running at http://localhost:${config.PORT}`);
      console.log("\n📚 Available Endpoints:");
      console.log(`  GET  ${endpoints.BLESSINGS} - Get all blessings`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
