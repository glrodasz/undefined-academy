import "./Author.scss";

const Author = ({
  name,
  avatarUrl = "https://i.pravatar.cc/300",
  avatarAlt = "Avatar de un autor",
}) => {
  return (
    <div className="author">
      <img src={avatarUrl} alt={avatarAlt} />
      <span className="paragraph paragraph-xs font-bold">{name}</span>
    </div>
  );
};

export default Author;
