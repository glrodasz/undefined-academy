import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contacto</h1>
      <form action="#" method="get">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ingrese su nombre completo"
          required
        />
        <label htmlFor="email">Correo-e</label>
        <input
          type="email"
          name="email"
          id="emali"
          placeholder="Ingrese el correo electrónico"
          required
        />
        <fieldset>
          <legend>Presupuesto</legend>
          <div className="option">
            <input
              type="radio"
              name="budget"
              id="10000"
              value="10000"
              required
            />
            <label htmlFor="10000">$10.000</label>
          </div>
          <div className="option">
            <input type="radio" name="budget" id="5000" value="5000" />
            <label htmlFor="5000">$5.000</label>
          </div>
          <div className="option">
            <input type="radio" name="budget" id="1000" value="1000" />
            <label htmlFor="1000">$1.000</label>
          </div>
        </fieldset>
        <div className="help">
          Este valor se refiere a la base y no al total.
        </div>
        <label htmlFor="type">Tipo de proyecto</label>
        <select name="type" id="type" defaultValue={''} required>
          <option value="" disabled>
            Elija una opción
          </option>
          <option value="website">Website</option>
          <option value="webapp">Webapp</option>
          <option value="mobile">Mobile App</option>
          <option value="design">Diseño</option>
        </select>
        <label htmlFor="description">Descripción</label>
        <textarea name="description" id="description" rows="5" required />
        <div className="help">
          Ingrese una descripción con al menos 500 palabras.
        </div>
        <label htmlFor="terms">
          <input type="checkbox" name="terms" id="terms" required />
          <span>Acepto los términos y condiciones</span>
        </label>
        <button>Enviar</button>
      </form>
    </section>
  )
}
export default Contact
