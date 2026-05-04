import Card from "@/app/components/Card/Card";
import Footer from "@/app/components/Footer/Footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-center">
        Dog App | by:{" "}
        <a
          className="modern-link"
          href="https://github.com/aitorias"
          target="_blank"
        >
          Aitorias
        </a>
      </h1>
      <span className="mb-4">(Las razas de perro se muestran al azar)</span>
      <Card />
      <Footer />
    </main>
  );
}
