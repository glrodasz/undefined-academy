import Card from "./Components/Card/Card"

const article = [{
    imagenBlog: "Corn-Island", 
    imagenAlt: "Corn Island", 
    title: "Corn Island", 
    date: "2023-04-05", 
    text: "Corn Island es un archipiélago ubicado en la costa sur de este país, conformado por dos islas del mismo nombre con diferencias de que una es más grande que la otra, y están separadas a 16 Km de distancia. Para llegar a ella se puede hacer por avión a través el Aeropuerto Internacional de Managua lo cual son 45min de viaje, o por ferri desde Bluefields recorrido que se toma un tiempo aproximado de 02 horas.",
},
{
    imagenBlog: "Playa-Colorado", 
    imagenAlt: "Playa-Colorado", 
    title: "Playa-Colorado", 
    date: "2023-02-20", 
    text: "Ubicada en tola, pueblo al sur de la ciudad de Rivas, reconocida por ser sede del Campeonato Mundial Master en el año 2012, considerada una de las mejores playas de Nicaragua, visitada por más de 17 mil turistas en temporadas como semana santa y carnavales, Playa Colorado es popular entre los surfistas por tener olas hasta de 2 metros de alto.",
},
{
    imagenBlog: "Playa-El-Coco", 
    imagenAlt: "Playa-El-Coco", 
    title: "Playa-El-Coco", 
    date: "2023-01-21", 
    text: "A tan solo 159 km de la capital, al sur de la ciudad Puerto de San Juan, nos situamos en la hermosa Playa El Coco, donde su ubicación ideal, aguas mansas y exuberante vegetación, hace de ellas un destino ideal para vacacionar."
},
{
    imagenBlog: "San-Juan-del-Sur", 
    imagenAlt: "San-Juan-del-Sur", 
    title: "San-Juan-del-Sur", 
    date: "2022-12-15", 
    text: "Ubicada en un pequeño pueblo con el mismo nombre, San Juan del Sur es una bahía en forma de herradura, rodeada de hermosa vegetación, causa deleite por su encanto propio, clima agradable y ambiente local, esta bahía ofrece increíbles destinos para la práctica de deportes extremos como el rappel, surf, kayak, entre otros."
},
{
    imagenBlog: "playa-poneloya", 
    imagenAlt: "playa-poneloya", 
    title: "playa-poneloya", 
    date: "2022-11-15", 
    text: "Poneloya es un pueblo pesquero de una sola calle paralela al mar; y un centro de casas de veraneo. La playa es irregular y de arena oscura, y deja ver palmeras que completan su aspecto de playa tropical. Es conocida por los nicaragüenses como una playa en cuyas aguas se presentan fuertes corrientes y olas que rompen con fuerza sobre la arena."
}
]
function App() {

    return (
        <>
            <div className="container">
                <nav>
                    <ul>
                        <li>Todo</li>
                        <li>Playas</li>
                        <li>Turismo</li>
                        <li></li>
                    </ul>
                    <input type="search" placeholder="Que hacer en Nicaragua" />
                </nav>
                {article.map((article) => <Card{...article} />)}
                               
            </div>
        </>
    )
}

export default App
