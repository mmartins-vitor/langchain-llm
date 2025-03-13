import { config } from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

import { ChatPromptTemplate } from "@langchain/core/prompts";


config();

// OpenAi Instantiate
const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY, // 🔹 Adicione sua chave da OpenAI
  model: "gpt-4o-mini",
});


  const systemTemplate = "Translate the following from English into {language}";

  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{text}"],
  ]);

  // Chamando o modelo
  const promptValue = await promptTemplate.invoke({
    language: "italian",
    text: "hi!",
  });
  
  
const response = await model.invoke(promptValue);
console.log(`${response.content}`);


// Executa a função

