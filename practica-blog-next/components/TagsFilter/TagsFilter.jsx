import classNames from "classnames";
import { useState } from "react";
import styles from "./TagsFilter.module.scss";
import Paragraph from "../Paragraph/Paragraph";

const Filter = ({ children, href = "#", isActive, onClick }) => {
  return (
    <li
      className={classNames({
        [styles["is-active-filter"]]: isActive,
      })}
    >
      <a
        className={styles.filter}
        href={href}
        onClick={(event) => {
          event.preventDefault();
          onClick(children);
        }}
      >
        <Paragraph as="span" size="sm" weight="bold">
          {children}
        </Paragraph>
      </a>
    </li>
  );
};

const TagsFilter = ({ filters = [] }) => {
  const [firstFilter] = filters;
  const [activeFilter, setActiveFilter] = useState(firstFilter.name);

  return (
    <nav className={styles["tags-filter"]}>
      <div className="filter-list-scroll-hider">
        <ul className="nav-list filter-list">
          {filters.map(({ name, href }, index) => (
            <Filter
              key={index}
              href={href}
              isActive={activeFilter === name}
              onClick={setActiveFilter}
            >
              {name}
            </Filter>
          ))}
        </ul>
      </div>
      <input className="input" type="search" placeholder="Buscar" />
    </nav>
  );
};

export default TagsFilter;
