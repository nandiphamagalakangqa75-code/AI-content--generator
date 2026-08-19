// ==========================================
// NandiGen AI - Backend Server
// Developer: Nandipha Magalakangqa
// ==========================================

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;


// ==========================================
// Middleware
// ==========================================

app.use(express.json());


// ==========================================
// Test Route
// ==========================================

app.get("/", (req, res) => {
    res.json({
        message: "NandiGen AI backend is running successfully!",
        developer: "Nandipha Magalakangqa",
        project: "NandiGen AI - Intelligent Content Studio"
    });
});


// ==========================================
// AI Content Generation Route
// ==========================================

app.post("/api/generate", async (req, res) => {

    try {

        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({
                error: "A prompt is required."
            });
        }

        // AI API integration will be added here
        // in the next step.

        res.json({
            message: "Prompt received successfully.",
            prompt: prompt
        });

    } catch (error) {

        console.error("Server error:", error);

        res.status(500).json({
            error: "Something went wrong while processing the request."
        });

    }

});


// ==========================================
// Start Server
// ==========================================

app.listen(PORT, () => {

    console.log(
        `NandiGen AI server is running on port ${PORT}`
    );

});
