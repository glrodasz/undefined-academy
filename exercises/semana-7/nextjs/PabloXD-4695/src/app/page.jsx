import Link from "next/link";
import styles from "./page.module.css";
import Container from "@/components/Container/Container";

export default function Home() {
  return (
    <div>
      <h1 className={styles.mainTitle}>List of Dogs</h1>
      <Container></Container>
    </div>
  );
}
