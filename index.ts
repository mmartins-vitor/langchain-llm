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

// LangChain functions
const translateText = async () => {
  const messages = [
    new SystemMessage("Translate the following from English into Italian"),
    new HumanMessage("hi!"),
  ];

  // Chamando o modelo
  const stream = await model.stream(messages);

  // Array de chunks que serão armazenados
  const chunks: string[] = [];  // Definindo como array de strings
  
  for await (const chunk of stream) {
    // Verifica se 'content' existe e é uma string
    if (typeof chunk.content === 'string') {
      chunks.push(chunk.content);  // Adiciona o conteúdo ao array
      console.log(`${chunk.content}|`);
    } else {
      // Caso o conteúdo não seja uma string, você pode tratá-lo
      console.log('Conteúdo inesperado:', chunk.content);
    }
  }
};

// Executa a função
translateText();
