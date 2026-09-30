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


// with langGraph

const state = Annotation.Root({
    prompt:Annotation,
    aiMsg:Annotation
})


const callLLM= async(state)=>{
    console.log(state);
    const response = await llm.invoke(state.prompt)
    console.log(response);
    return {aiMsg:response.text}
}


const response = graph.invoke({
    prompt:"what is current wheather in mangalagiri",
})


app.listen(4000, () => {
    console.log("server is running one 4000");
})

