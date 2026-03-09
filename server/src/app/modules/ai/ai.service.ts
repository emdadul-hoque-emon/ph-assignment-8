import { GoogleGenerativeAI } from "@google/generative-ai";
import { TripPlan } from "./ai.interface";
import { envVars } from "../../config/env";

const genAI = new GoogleGenerativeAI(envVars.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function generateTrip(prompt: string): Promise<TripPlan> {
  const fullPrompt = `
You are an AI travel planner.

A user will describe their travel plan in natural language.

Extract the following information AND generate a travel itinerary.

Return ONLY JSON.

JSON format:

{
 "destination": "",
 "days": number,
 "budget": "",
 "interests": [],
 "estimatedBudget": number,
 "itinerary": [
   {
     "day": number,
     "activities": []
   }
 ],
 "tips": []
}

User prompt:
${prompt}
`;

  const result = await model.generateContent(fullPrompt);

  const text = result.response.text();

  const json = text.replace(/```json|```/g, "").trim();

  return JSON.parse(json);
}
