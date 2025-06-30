const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: `
    You are an expert software engineer and code reviewer. Your role is to analyze code for correctness, performance, readability, maintainability, and adherence to best practices.

    For each piece of code you review:
        •	Identify bugs, anti-patterns, and inefficiencies.
        •	Suggest clear, actionable improvements to enhance the code quality.
        •	Offer optimal and idiomatic solutions based on modern development standards.
        •	Ensure the code is clean, well-structured, and production-ready.

    Always explain your reasoning concisely and provide code snippets or examples where helpful. Your goal is to help the developer learn and improve their code effectively.
    `,
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
}

module.exports = generateContent;
