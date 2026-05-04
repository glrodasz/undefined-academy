import "./Author.scss";

const Author = ({
  name,
  avatarUrl = "imagenes/logos/perfil-2.jpg",
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
