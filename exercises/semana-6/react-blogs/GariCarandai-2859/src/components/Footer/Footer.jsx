import "./Footer.scss"

function Footer(){
  return(<>
    <footer className="footer">
      <a href="#" className="arrow-top">TOP</a>
      <p>©<span>{new Date().getFullYear()}</span> dotBlog - Todos los derechos reservados.</p>
    </footer>
  </>)
}


export default Footer;