function CardFooter({date}){
  return(
    <time className="dates" dateTime={date}>
      {date}
    </time>
  );
}

export default CardFooter;