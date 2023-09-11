"use client";

import { useState } from "react";
import Form from "@/organisms/Form";

import styles from "./page.module.css"

export default function Home() {
  const [text, setText] = useState("");

  return (
    <main className={styles.main}>
      <Form
        value={text}
        onChange={setText}
        onGrammar={() => {}}
        onTranslate={() => {}}
        onChangeLanguage={() => {}}
      />
    </main>
  );
}
