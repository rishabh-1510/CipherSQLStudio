import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/hint", async (req, res) => {

    const { question, query } = req.body;

    try {

        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
            {
                contents: [
                    {
                        parts: [
                            {
                                text: `You are an SQL tutor. Give a hint only, not the full solution.

Assignment: ${question}
Student Query: ${query}`
                            }
                        ]
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-goog-api-key": process.env.GEMINI_API_KEY
                }
            }
        );

        const hint =
            response.data.candidates[0].content.parts[0].text;

        res.json({ hint });

    } catch (err) {

        if (err.response?.status === 503) {
            return res.json({
                hint: "AI service is busy right now. Please try again in a moment."
            });
        }

        if (err.response?.status === 429) {
            return res.json({
                hint: "Too many requests to AI service. Please wait a few seconds and try again."
            });
        }

        res.status(500).json({ error: err.message });
    }

});

export default router;