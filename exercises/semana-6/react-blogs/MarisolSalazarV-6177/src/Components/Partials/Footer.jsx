import '../../App.css'
import link from '../../assets/link.webp'
import react from '../../assets/react.svg'
import git from '../../assets/git.png'

export const Footer = () => {
    return (
        <>
        <div className="footer">
            <footer>Proyecto realizado por: Marisol Salazar Valencia</footer>
            <a href=""><img src={react} alt="logo-react" /></a>
            <a href="https://www.linkedin.com/in/marisol-salazar-valencia-928091242/"><img src={link} alt="perfil-link" /></a>
            <a href="https://github.com/marisolSv22"><img src={git} alt="perfil-git" /></a>
        </div>
        </>
    )
}