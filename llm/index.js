import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

dotenv.config();

const app = express();

//LLM

// const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API
// })

// const main = async()=>{
//     const response = await ai.models.generateContent({
//         model: "gemini-3.8-flash",
//         contents:"say hi",
//     })
//     console.log(response.text);
// } 
// main()

// with langChain



const llm = new ChatGoogleGenerativeAI({
    model: "gemini-3.8-flash",
})

const main = async () => {
    const response = await llm.invoke("say hi");
    console.log(response.text);
}
main()

app.listen(4000, () => {
    console.log("server is running one 4000");
})

