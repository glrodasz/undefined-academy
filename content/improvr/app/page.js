"use client";

import { useState } from "react";
import Form from "@/organisms/Form";

import styles from "./page.module.css";
import Result from "@/organisms/Result";

export default function Home() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("english");
  const [result, setResult] = useState(null);

  const onTranslate = async () => {
    const response = await fetch(`/api/translate?lang=${lang}`, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { translatedText } = await response.json();
    setResult(translatedText);
  };

  return (
    <main className={styles.main}>
      <Form
        value={text}
        onChange={setText}
        onGrammar={() => {}}
        onTranslate={onTranslate}
        onChangeLanguage={setLang}
      />
      {result && <Result text={result} type="translate" lang={lang} />}
    </main>
  );
}
