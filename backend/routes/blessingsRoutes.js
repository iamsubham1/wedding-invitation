import express from "express";
import {
  getAllBlessings,
  fetchFromGoogleAppsScript,
} from "../services/blessingsService.js";

const router = express.Router();

/**
 * GET /api/blessings
 * Fetch all blessings
 */
router.get("/", async (req, res) => {
  try {
    await fetchFromGoogleAppsScript();
    const data = getAllBlessings();
    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch blessings",
      error: error.message,
    });
  }
});

export default router;
