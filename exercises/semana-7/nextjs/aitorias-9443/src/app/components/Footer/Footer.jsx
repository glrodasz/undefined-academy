import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="mt-4">
      <small>
        Datos extraídos de la API:{" "}
        <a href="https://dog.ceo/dog-api/" rel="noopener" target="_blank">
          Dog API
        </a>
      </small>
    </footer>
  );
}
