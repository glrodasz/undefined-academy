import * as React from 'react';
import Articulo from './Articulo';

function Main() {

    const articulos = [
        {
            id: 1,
            titulo: 'Titulo 1',
            contenido: 'Aliquam tempus faucibus erat et tristique. Praesent a dignissim justo. Integer facilisis id tellus ac semper. Praesent aliquet tempor justo, a cursus dui auctor in.',
            img: 'blog-1.webp',
            fecha: '2023/05/05'
        },
        {
            id: 2,
            titulo: 'Titulo 2',
            contenido: 'Donec pellentesque volutpat nisi ut pretium. Quisque vitae ligula et velit pretium condimentum at non eros. Ut convallis ligula sit amet mattis pretium. Aliquam eget erat vitae nunc.',
            img: 'blog-2.webp',
            fecha: '2022/05/20'
        },
        {
            id: 3,
            titulo: 'Titulo 3',
            contenido: 'Quisque sagittis hendrerit neque, ut tincidunt sapien fringilla quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            img: 'blog-3.webp',
            fecha: '2023/01/18'
        },
        {
            id: 4,
            titulo: 'Titulo 4',
            contenido: 'Aenean fringilla vel mauris quis tincidunt. Nullam dapibus interdum magna, ut tempus justo cursus et. Duis nec maximus diam. Fusce nec nulla non erat elementum ultricies. Proin egestas.',
            img: 'blog-4.webp',
            fecha: '2023/05/03'
        },
        {
            id: 5,
            titulo: 'Titulo 5',
            contenido: 'Etiam laoreet sit amet erat euismod vulputate. Ut iaculis, erat quis aliquet efficitur, quam quam gravida urna, eu maximus eros tortor feugiat purus. Duis nec ipsum orci. Suspendisse.',
            img: 'blog-5.webp',
            fecha: '2019/05/06'
        }
    ]


    return (
        <main className="main">
        <div className="contenedor contenedor-main">
            <section id="blog" className="blog">
                <h2>&diams; Blog &diams;</h2>

                <div className="articulos">
                    {articulos.map( articulo => (
                        <Articulo key={articulo.id} id={articulo.id} titulo={articulo.titulo} contenido={articulo.contenido} img={articulo.img} fecha={articulo.fecha} />
                    ))}


                </div>
            </section>
        </div>
    </main>
    )
}

export default Main;