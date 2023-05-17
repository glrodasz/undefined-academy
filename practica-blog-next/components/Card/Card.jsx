import classNames from "classnames/bind";

import Tag from "@/components/Tag";
import Author from "@/components/Author";
import Paragraph from "@/components/Paragraph";
import Time from "@/components/Time";
import Heading from "@/components/Heading"

import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

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
      className={cx("card", {
        "is-extended": isExtended,
        "is-reversed": isReversed,
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
            <Heading>{title}</Heading>
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
