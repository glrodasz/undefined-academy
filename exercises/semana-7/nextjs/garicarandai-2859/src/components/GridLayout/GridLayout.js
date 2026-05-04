import style from "@/components/GridLayout/GridLayout.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


function GridLayout(){

  const [dogs, setDogs] = useState([]);
  const [loadContent, setLoadContent] = useState(false);

  useEffect(()=>{
    const getDogs  = async ()=>{
      const result = await fetch("api/dogs")
      .then((data)=>data.json());

      setLoadContent(true);
      setDogs(result);
      
    }

    getDogs();

  }, []);


  function Placeholder(){
    return Array(12).fill(0).map( () => <Card img={"/placeholder.png"} name={"Name"}/> )
  }
  function Content(){
    return dogs.map( dog => <Card img={dog[1]} name={dog[0]}/> )
  }


  return(<>
    <div className={style["grid_box"]}>
      { loadContent ? Content() : Placeholder() }
    </div>
  </>)
}

export default GridLayout;