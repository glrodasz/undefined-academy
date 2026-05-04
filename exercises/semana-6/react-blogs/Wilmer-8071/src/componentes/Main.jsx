import * as React from "react";
import Card from "./Card";


function Main (){

    const articles = 
[
    {
            title: 'Sistema Solar',
            text: 'El otro dia diseñe el sistema Solar, quieres echarle un vistazo al proyecto que realice con JavaScript y CSS puro? entra en el enlace, y se testigo de la magia del CSS. Esta es solo una muestra de lo que es posible crear utilizando estas tecnologías, por lo que si te interesa el diseño web, este proyecto te puede servir de inspiración para tus propios proyectos.',
            img: 'articulo-4.png',
            enlace: 'https://frolicking-dusk-9fb1ba.netlify.app/',
            fecha: '05/06/2023'
    },
    {   
        title: "Aprendiendo React",
        text: 'React es una de las bibliotecas de JavaScript más populares y utilizadas en el desarrollo de aplicaciones web modernas. A medida que vas utilizando esta herramienta, seguramente estarás aprendiendo nuevas habilidades y conocimientos que te permitirán mejorar tus habilidades técnicas y profesionales.',
        img: 'articulo-1.png',
        enlace: '###',
        fecha: '05/01/2023'
    },
    
    {
        title: "La verdadera magia de JavaScript",
        text: 'Desde la manipulación del DOM hasta la programación orientada a objetos, en cada episodio descubrirás nuevas características y funciones avanzadas que hacen que este lenguaje de programación sea tan poderoso. Compartiré mi pasión por JavaScript y cómo esta herramienta puede ser utilizada para construir aplicaciones web dinámicas y de alta calidad. ',
        img: 'articulo-2.png',
        enlace: '###',
        fecha: '04/25/2023'
    },
    {
        title: 'VueJS y sus capacidades en el desarrollo web',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quibusdam, inventore consectetur amet est ea quasi consequuntur quis minus praesentium cupiditate tenetur incidunt repudiandae illo enim facilis maiores eius vero.',
        img: 'articulo-3.gif',
        enlace: '###',
        fecha: '04/01/2023'
    }
]

    return(
    <main>
        <h3> 📌 Entradas del Blog</h3>
        <div className="funcion__card">
        {articles.map((article) => 
        <Card title={article.title} text={article.text} img={article.img} fecha={article.fecha} enlace={article.enlace} />
        )}
        </div>
    </main>
    )
}

export default Main;