import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { Annotation, StateGraph } from "@langchain/langgraph";
import {ToolNode} from "@langchain/langgraph/prebuilt";

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
    
}
main()


// with langGraph

const state = Annotation.Root({
    prompt:Annotation,
    aiMsg:Annotation
})

const tools = []
const toolNode = new ToolNode(tools)

const callLLM= async(state)=>{
    console.log(state);
    const response = await llm.invoke(state.prompt)
    console.log(response);
    return {aiMsg:response.text}
}

const shouldcontinue = async()=>{
    
}

const graph = new StateGraph(state)
.addNode("agent",callLLM)
.addNode("tools",toolNode)
.addEdge("__start__", "agent")
.addEdge("tools","agent")
.addConditionalEdges("agent", shouldcontinue)
.compile()

const response = graph.invoke({
    prompt:"what is current wheather in mangalagiri",
})


app.listen(4000, () => {
    console.log("server is running one 4000");
})

