import * as React from "react";

function Barra() {
  return (
    <div className="barra-navegacion">
      <form onSubmit={(e) => e.preventDefault()} className="form-navegacion">
        <input type="text" placeholder="Buscar..." name="busqueda" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Barra;