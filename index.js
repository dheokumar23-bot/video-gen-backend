// index.js
const express = require('express');
const app = express();
app.use(express.json()); // JSON body support

const PORT = process.env.PORT || 3000;

// Test endpoint
app.get('/', (req, res) => {
    res.send('AI Video Generator Backend is running 🚀');
});

// Video generation endpoint
app.post('/generate-video', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    // Yahan aap apna AI video generation logic lagayenge
    // Placeholder response
    res.json({
        message: "Video generation request received!",
        prompt: prompt,
        video_url: null // Replace with real video URL after generation
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
