// src/components/Navbar.tsx
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">

        {/* Logo / Marca */}
        <NavLink className="navbar-brand fw-bold" to="/">
          ⚛ Portal de Cursos UTP
        </NavLink>

        {/* Botón hamburguesa para móviles */}
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              {/* NavLink añade clase 'active' cuando la URL coincide */}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
                to="/">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
                to="/cursos">
                Cursos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
                to="/registro">
                Inscribirme
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
