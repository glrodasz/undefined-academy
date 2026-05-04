import Image from "next/image";
import Link from "next/link";

import { fetchDogsImages } from "@/app/api/dogs";

import styles from "./styles.module.css";

export default async function DogPage({ params }) {
  const { breed } = params;

  const dog = await fetchDogsImages(breed);

  return (
    <>
      <h1 className={styles.title}>{breed}</h1>
      <Image
        className={styles.image}
        src={dog.image}
        width={500}
        height={500}
        alt={breed}
        priority={true}
      />
      <Link className="mt-4" href="/">
        Volver al inicio
      </Link>
    </>
  );
}
