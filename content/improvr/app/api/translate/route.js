import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function buildMessage(text, lang) {
  return [
    {
      role: "system",
      content: `
        You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into ${lang}.
      
        Keep the meaning the same. If possible, retain the structure of the paragraphs.
        
        If the original text is in the same language as the target language, simply repeat the original text.
        
        Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.
      `,
    },
    {
      role: "user",
      content: `
        Text:
        \`\`\`
        ${text}
        \`\`\`
      `,
    },
  ];
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang");
  const { text } = await request.json();

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: buildMessage(text, lang),
      temperature: 0,
      max_tokens: 500,
    });

    const translatedText = response.choices?.[0].message?.content?.trim();

    return NextResponse.json({ translatedText });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
