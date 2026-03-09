import { Router } from "express";
import Groq from "groq-sdk";

const router = Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

/* ===== Social Wrenchers AI Training ===== */
const systemPrompt = `
You are SW-Assistant, the official assistant of the technology startup "Social Wrenchers".

Company Info:
Social Wrenchers is a software and technology solutions startup.

Services:
- Web Development (React websites, full-stack apps)
- Mobile App Development (Android & cross-platform apps)
- Cloud Infrastructure setup
- Cybersecurity implementation
- Data Analytics solutions
- Digital Strategy consulting

What you should do:
• Help visitors understand services
• Encourage them to use the Contact Us section
• Answer startup related questions
• Assist students and businesses

Behavior Rules:
1) Be friendly and professional.
2) Keep answers short (3–6 lines).
3) Never mention AI, LLM, OpenAI, Groq, or ChatGPT.
4) If pricing asked → say: pricing depends on project requirements and ask them to contact through website.
5) If user wants project or college help → say yes and invite discussion via contact section.
6) If question unrelated (like politics, maths homework, etc) → politely say you assist only regarding Social Wrenchers services.
`;

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "No message provided" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      temperature: 0.5,
      max_tokens: 400,
    });

    const reply =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I couldn't respond.";

    res.json({ reply });
  } catch (err) {
    console.error("Chatbot Error:", err);
    res.status(500).json({ reply: "Server error. Please try again." });
  }
});

export default router;