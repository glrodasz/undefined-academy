import classNames from "classnames";

import Tag from "@/components/Tag";
import Author from "@/components/Author/Author";
import Paragraph from "@/components/Paragraph/Paragraph";
import Time from "@/components/Time/Time";

import styles from "./Card.module.scss";

const Card = ({
  unsplashId,
  unsplashAlt,
  tags,
  title,
  extract,
  date,
  author,
  readTime,
  isExtended = false,
  isReversed = false,
}) => {
  return (
    <article
      className={classNames(styles["card"], {
        [styles["is-extended"]]: isExtended,
        [styles["is-reversed"]]: isReversed,
      })}
    >
      <img
        src={`https://source.unsplash.com/${unsplashId}`}
        alt={unsplashAlt}
      />
      <section>
        <div className={styles["card-content"]}>
          <header>
            <div className={styles["card-tags"]}>
              {tags?.map((tag, index) => (
                <Tag type={isExtended ? "secondary" : "primary"} key={index}>
                  {tag}
                </Tag>
              ))}
            </div>
            <h2 className="heading heading-sm font-bold">{title}</h2>
            <Time>{date}</Time>
          </header>
          <Paragraph>{extract}</Paragraph>
        </div>
        <footer>
          <Author name={author} />
          <Paragraph size="xs" isHelpText as="span">
            {readTime}
          </Paragraph>
        </footer>
      </section>
    </article>
  );
};

export default Card;
