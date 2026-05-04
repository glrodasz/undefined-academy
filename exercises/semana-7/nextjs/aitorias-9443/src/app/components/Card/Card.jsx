import Image from "next/image";
import Link from "next/link";

import getDogs from "@/app/api/dogs";

import styles from "./Card.module.css";

export default async function Card() {
  const dogs = await getDogs();

  return (
    <>
      <section className={styles.cards}>
        {dogs.map((dog) => (
          <article key={dog.name} className={styles.card}>
            <Link href={`/${dog.name}`}>
              <Image
                className={styles.image}
                src={dog.image}
                width={250}
                height={250}
                alt={dog.name}
                priority={true}
              />
              <div className={styles.breedDescription}>
                <h2 className={styles.breed}>{dog.name}</h2>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
