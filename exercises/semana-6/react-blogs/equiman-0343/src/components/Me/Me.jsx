import ReactCountryFlag from 'react-country-flag'
import './Me.css'

const Me = () => {
  return (
    <section className="me">
      <h1>
        <a id="about">👋 ¡Hola Mundo!</a>
      </h1>
      <img
        className="profile-avatar"
        src="https://avatars.githubusercontent.com/u/933393?v=4"
        alt="avatar"
      />
      <p>
        Soy <strong>Camilo Martínez</strong>, mas conocido como{' '}
        <strong>equiman</strong>
        <br />
        un desarrollador de Medellín, Colombia{' '}
        <ReactCountryFlag
          countryCode="CO"
          svg
          aria-label="Colombia"
          title="Colombia"
        />
        .
        <br />
      </p>
    </section>
  )
}
export default Me
