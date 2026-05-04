import * as React from "react"
import Card from "./Card";

function Post(){
    const posts = [
        {
          id: 1,
          title: "Introducción a JavaScript",
          content: "En este post aprenderás los conceptos básicos de JavaScript y cómo usarlos en tus proyectos. ¡Comienza tu viaje en la programación web ahora!",
          image: "https://img.freepik.com/vector-gratis/programadores-que-utilizan-lenguaje-programacion-javascript-computadora-gente-pequena-lenguaje-javascript-motor-javascript-concepto-desarrollo-web-js-ilustracion-aislada-violeta-vibrante-brillante_335657-986.jpg?w=1060&t=st=1683505509~exp=1683506109~hmac=f529543311e3273c59ac095ebbd2380338940a8a7f837a5e994f7c8d043fd092",
          date: "2023-04-15",
          avatar: "https://cdn-icons-png.flaticon.com/512/949/949677.png?w=740&t=st=1683594226~exp=1683594826~hmac=aadb18114951a80a703893cb38c78f0dd74fb39e9dafbca5822e67ee32e0f606"
        },
        {
          id: 2,
          title: "Construyendo una aplicación React",
          content: "Descubre cómo construir una aplicación web utilizando React. Aprenderás sobre componentes, estados y props, y cómo crear una interfaz de usuario dinámica.",
          image: "https://img.freepik.com/vector-gratis/concepto-educacion-online_52683-9045.jpg?w=1060&t=st=1683595525~exp=1683596125~hmac=750fce39740884cb46b102b07422c98a298bc05824a7c2c40480eb5ae6180123",
          date: "2023-04-20",
          avatar: "https://cdn-icons-png.flaticon.com/512/949/949677.png?w=740&t=st=1683594226~exp=1683594826~hmac=aadb18114951a80a703893cb38c78f0dd74fb39e9dafbca5822e67ee32e0f606"
        },
        {
          id: 3,
          title: "Optimización de rendimiento en React",
          content: "Mejora el rendimiento de tus aplicaciones React utilizando técnicas como memoización, lazy loading y virtualización. Aprende a hacer que tus aplicaciones sean más rápidas y eficientes.",
          image: "https://img.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg?w=1060&t=st=1683595100~exp=1683595700~hmac=7d5499a7a05cfcbd99b55b92c313a5b4ab10329b2bac89ea3c9ba4fd66199d8b",
          date: "2023-04-25",
          avatar: "https://cdn-icons-png.flaticon.com/512/949/949677.png?w=740&t=st=1683594226~exp=1683594826~hmac=aadb18114951a80a703893cb38c78f0dd74fb39e9dafbca5822e67ee32e0f606"
        },
        {
          id: 4,
          title: "Trabajando con APIs en JavaScript",
          content: "Descubre cómo consumir datos de APIs utilizando JavaScript. Aprende a hacer solicitudes HTTP, procesar respuestas y mostrar los datos en tu aplicación.",
          image: "https://img.freepik.com/vector-gratis/ilustracion-gradiente-api_23-2149385318.jpg?w=1060&t=st=1683595166~exp=1683595766~hmac=5a39a38ef6a7e21ec0ea5a8696efe26205c8dc421a7aac1ac7a015c3956a4428",
          date: "2023-04-30",
          avatar: "https://cdn-icons-png.flaticon.com/512/949/949677.png?w=740&t=st=1683594226~exp=1683594826~hmac=aadb18114951a80a703893cb38c78f0dd74fb39e9dafbca5822e67ee32e0f606"
        },
        {
          id: 5,
          title: "Gestión de estado con Redux",
          content: "Aprende a utilizar Redux para gestionar el estado de tu aplicación React de manera eficiente. Descubre cómo centralizar y organizar el estado de tu aplicación.",
          image: "https://img.freepik.com/vector-gratis/ilustracion-concepto-correccion-errores_114360-1822.jpg?w=1060&t=st=1683595242~exp=1683595842~hmac=8bc6ef3db7e5e1d827fb60546f5919edd5a3b949fc3127dcc1f28528672c9c48",
          date: "2023-05-05",
          avatar: "https://cdn-icons-png.flaticon.com/512/949/949677.png?w=740&t=st=1683594226~exp=1683594826~hmac=aadb18114951a80a703893cb38c78f0dd74fb39e9dafbca5822e67ee32e0f606"
        },
        {
          id: 6,
          title: "Pruebas unitarias con Jest",
          content: "Aprende a escribir pruebas unitarias para tu código JavaScript utilizando Jest. Descubre cómo automatizar las pruebas y asegurar la calidad de tu aplicación.",
          image: "https://img.freepik.com/foto-gratis/persona-alto-angulo-marcando-primer-plano-caja_23-2148265630.jpg?w=900&t=st=1683595306~exp=1683595906~hmac=072e83127812abba3fb43a35c5581bd82df535342618503265e1739a60a2e8b8",
          date: "2023-05-07",
          avatar: "https://cdn-icons-png.flaticon.com/512/949/949677.png?w=740&t=st=1683594226~exp=1683594826~hmac=aadb18114951a80a703893cb38c78f0dd74fb39e9dafbca5822e67ee32e0f606"
        }
      ];
      
      return(
        <div className='container'>
        {posts.map(({title, content, image, date, avatar})=>(
        <Card title={title} content={content} image={image} date={date} avatar={avatar}></Card>
        ))}
        </div>
      )      
}
export default Post;