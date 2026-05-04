import { useState, useEffect } from "react"
import Dog from "../components/Dog"

const Home = () => {  
const [ dogs, setDogs] = useState([])
const getDogs = async () => {
    const list = await fetch('/api/dogs').then(data => data.json())
    setDogs(list)
}
useEffect( () => { getDogs() }, [])
    return (
    <>
    <h1>Dog Listing</h1>
    <div className="grid-wrapper">{dogs.map( (dog, index) => { return <Dog key={index} {...dog}/>})}</div>
    </>)}

export default Home