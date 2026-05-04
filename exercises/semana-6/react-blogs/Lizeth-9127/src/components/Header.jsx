import links from "../js/links.json";

const setNavLinks = ({ text, url = "#" }) => <li><a href={url}>{text}</a></li>;

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {links.map(setNavLinks)}
            <li><a href="#"><img className="icon" src="/src/assets/icon.png" alt="icon" /></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};
