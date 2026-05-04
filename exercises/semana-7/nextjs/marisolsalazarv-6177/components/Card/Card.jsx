import styles from "@/styles/Home.module.css";

function Card({ title, img }) {
  return (
    <div className={`${styles.main}`}>
      <h2
        id="breeds"
        className="flex mt-3 justify-center font-bold text-red-800 text-center"
      >{`Raza: ${title}`}</h2>
      <div className="flex w-full justify-evenly m-auto">
        <div className="flex w-full h-[380px] md:py-1 px-2 m-2">
          <img
            className="flex w-full h-[380px] m-auto md:py-2 sm:py- justify-center"
            src={img}
            alt={` ${title} `}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
