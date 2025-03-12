import { config } from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

config();

// OpenAi Instantiate
const model = new ChatOpenAI({ 
  openAIApiKey: process.env.OPENAI_API_KEY, // 🔹 Adicione sua chave da OpenAI
  model: "gpt-4o-mini"
});

// LangChain functions
const translateText = async () => {
  const messages = [
    new SystemMessage("Translate the following from English into Italian"),
    new HumanMessage("hi!"),
  ];

  // calling model
  try {
    const response = await model.invoke(messages);
    console.log(response.content); // 🔹 Mostra a resposta no console
  } catch (error) {
    console.error("Error:", error); // 🔹 Tratamento de erro
  }
};

// Executa a função
translateText();
