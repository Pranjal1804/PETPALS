import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const body = await req.json(); 
  const { messages } = body; 

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an expert assistant for a pet care and adoption platform called PetPals. Respond only to topics related to pets, their care, adoption processes, and veterinary advice. Politely redirect unrelated questions.",
          },
          ...messages, 
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return NextResponse.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from ChatGPT" },
      { status: 500 }
    );
  }
}
