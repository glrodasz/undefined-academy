const Card = ({unsplashId, unsplashAlt, title, extract}) => {
    return (
      <div className="container">
        <div className='banner-img'></div>
        <img 
        src={`https://source.unsplash.com/${unsplashId}`} 
        alt={unsplashAlt} className="example-img"
        />
        <h1 className="name">{title}</h1>
        <p className="description">{extract}</p>
        <button className="btn">Read</button>
      </div>
    );
};

export default Card;