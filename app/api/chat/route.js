import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) {
    return NextResponse.json(
      { error: "Gemini API key is not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { messages } = body;

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(geminiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Convert chat format to simple prompt
    const prompt = messages
      .filter(m => m.role !== "system")
      .map(m => m.content)
      .join("\n");

    // Add system prompt
    const systemPrompt = "You are an expert assistant for a pet care and adoption platform called PetPals. " +
                        "Respond only to topics related to pets, their care, adoption processes, and veterinary advice. " +
                        "Politely redirect unrelated questions.\n\n";

    // Generate response
    const result = await model.generateContent(systemPrompt + prompt);
    const response = await result.response;

    return NextResponse.json({ 
      reply: response.text(),
      provider: "gemini" 
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { 
        error: "Failed to fetch response",
        details: error.message
      },
      { status: 500 }
    );
  }
}