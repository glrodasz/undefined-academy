import * as React from "react"
import Card from "./Card";

function Post(){
const posts = [
  {
    title: "Introduction to Frontend Development",
    content: "Frontend development involves creating the user interface and user experience of a website or application. It includes HTML, CSS, and JavaScript to build interactive and responsive interfaces that users interact with directly in their browsers.",
    image: "https://img.freepik.com/vector-gratis/desarrolladores-web-dibujados-mano_23-2148819604.jpg?w=740&t=st=1683581783~exp=1683582383~hmac=2c035e30de3acef9e4d5e5e106063c01a835f689e1129985db5808794875e7f7",
    avatar: "https://img.freepik.com/vector-gratis/ilustracion-icono-avatar-usuario_53876-5907.jpg?w=740&t=st=1683582158~exp=1683582758~hmac=468ee88614e92ddf33669419088c4e9964f25744cc95fdba3d7de03484beac83",
    date: "2023-04-15"
  },
  {
    title: "Backend Development with Node.js",
    content: "Backend development focuses on the server-side of web development. With Node.js, developers can use JavaScript to build scalable and efficient server-side applications, handle database operations, implement security measures, and create APIs for frontend communication.",
    image: "https://img.freepik.com/vector-gratis/ilustracion-api-diseno-plano-dibujado-mano_23-2149365021.jpg?w=740&t=st=1683581850~exp=1683582450~hmac=4c5c46a68d83f0b2970c37ecb8f9ee2b2f8d73104538c9acbc97da291a7605f8",
    avatar: "https://img.freepik.com/vector-gratis/ilustracion-icono-avatar-usuario_53876-5907.jpg?w=740&t=st=1683582158~exp=1683582758~hmac=468ee88614e92ddf33669419088c4e9964f25744cc95fdba3d7de03484beac83",
    date: "2023-04-16"
  },
  {
    title: "Building Responsive Web Designs",
    content: "Responsive web design is a technique that ensures websites adapt and display properly on various devices and screen sizes. By using HTML, CSS, and JavaScript frameworks like Bootstrap or Flexbox, developers can create fluid layouts and optimize user experiences across desktops, tablets, and mobile devices.",
    image: "https://img.freepik.com/vector-gratis/diseno-web-receptivo-mockup-pantallas-tabletas-telefonos-inteligentes_613284-990.jpg?w=740&t=st=1683581905~exp=1683582505~hmac=0cfbf2460daead4cefb8dd720027560032634420ba04f0d5b3873d5190d9e863",
    avatar: "https://img.freepik.com/vector-gratis/ilustracion-icono-avatar-usuario_53876-5907.jpg?w=740&t=st=1683582158~exp=1683582758~hmac=468ee88614e92ddf33669419088c4e9964f25744cc95fdba3d7de03484beac83",
    date: "2023-04-17"
  },
  {
    title: "RESTful API Development",
    content: "RESTful APIs provide a standardized way for frontend and backend systems to communicate and exchange data. With JavaScript and frameworks like Express.js, developers can create robust and scalable APIs, enabling seamless integration between different applications and services.",
    image: "https://img.freepik.com/vector-gratis/ilustracion-gradiente-api_23-2149379656.jpg?w=740&t=st=1683581954~exp=1683582554~hmac=853cbbf50d2897186970280ce17a880ac5c112fefe77679bf11409d77b00914c",
    avatar: "https://img.freepik.com/vector-gratis/ilustracion-icono-avatar-usuario_53876-5907.jpg?w=740&t=st=1683582158~exp=1683582758~hmac=468ee88614e92ddf33669419088c4e9964f25744cc95fdba3d7de03484beac83",
    date: "2023-04-18"
  },
  {
    title: "Frontend Frameworks: React and Vue",
    content: "React and Vue are popular JavaScript frameworks for building interactive and dynamic user interfaces. They offer reusable components, state management, and virtual DOM for efficient rendering. Frontend developers leverage these frameworks to create powerful and interactive web applications.",
    image: "https://img.freepik.com/vector-gratis/ilustracion-devops-gradiente_23-2149379660.jpg?w=740&t=st=1683582027~exp=1683582627~hmac=03d4e124d443e712f5ad4123ccf29d84513dcf17682ce22cbc3d581df286ff6e",
    avatar: "https://img.freepik.com/vector-gratis/ilustracion-icono-avatar-usuario_53876-5907.jpg?w=740&t=st=1683582158~exp=1683582758~hmac=468ee88614e92ddf33669419088c4e9964f25744cc95fdba3d7de03484beac83",
    date: "2023-04-19"
  },
  {
    title: "Securing Web Applications",
    content: "Web application security is crucial to protect user data and prevent unauthorized access. Backend developers use techniques like authentication, authorization, input validation, and encryption to ensure the security of web applications. JavaScript libraries like Passport.js and bcrypt.js assist in implementing these security measures.",
    image: "https://img.freepik.com/vector-gratis/protegerse-contra-ataques-informaticos_23-2148542363.jpg?w=740&t=st=1683582077~exp=1683582677~hmac=2a4868055b68b9ee491728fc41cf4fa6b4b131ee53cea69db8354ccc25b6f80a",
    avatar: "https://img.freepik.com/vector-gratis/ilustracion-icono-avatar-usuario_53876-5907.jpg?w=740&t=st=1683582158~exp=1683582758~hmac=468ee88614e92ddf33669419088c4e9964f25744cc95fdba3d7de03484beac83",
    date: "2023-04-20"
  }
];
      
      return(
        <section className='container'>
        {posts.map(({title, content, image, date, avatar})=>(
        <Card title={title} content={content} image={image} date={date} avatar={avatar}></Card>
        ))}
        </section>
      )      
}
export default Post;