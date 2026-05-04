import Dog from "@/components/Dog";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <title>Dog Breeds</title>
      <meta name="description" content="Dog Randomizing" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <h1 className="my-3 text-3xl text-center font-bold underline">
        DOG BREEDS
      </h1>
      <main className={`${styles.body}`}>
        <Dog />
      </main>
    </>
  );
}
