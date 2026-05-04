import Paragraph from "@/components/Paragraph";
import styles from "./Author.module.scss";

const Author = ({
  name,
  avatarUrl = "https://i.pravatar.cc/300",
  avatarAlt = "Avatar de un autor",
}) => {
  return (
    <div className={styles.author}>
      <img src={avatarUrl} alt={avatarAlt} />
      <Paragraph size="xs" weight="bold">{name}</Paragraph>
    </div>
  );
};

export default Author;
