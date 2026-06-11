// src/components/TarjetaCurso.tsx
import { Link } from 'react-router-dom'
import type { Curso } from '../types'

// Props del componente: recibe un objeto Curso
interface Props {
  curso: Curso
}

function TarjetaCurso({ curso }: Props) {
  // Colores según el nivel del curso
  const colorNivel = {
    'Básico': 'success',
    'Intermedio': 'warning',
    'Avanzado': 'danger'
  }[curso.nivel]

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">

        {/* Imagen del curso */}
        <img src={curso.imagen} className="card-img-top"
          alt={curso.titulo} style={{ height: '180px', objectFit: 'cover' }} />

        <div className="card-body">
          {/* Badge de nivel */}
          <span className={'badge bg-' + colorNivel + ' mb-2'}>
            {curso.nivel}
          </span>

          <h5 className="card-title">{curso.titulo}</h5>
          <p className="card-text text-muted small">{curso.descripcion}</p>
          <p className="card-text">
            <small className="text-muted">⏱ {curso.duracion}</small>
          </p>
        </div>

        <div className="card-footer">
          {/* Link navega a la página de detalle sin recargar */}
          <Link to={'/cursos/' + curso.id}
            className="btn btn-danger btn-sm w-100">
            Ver detalle →
          </Link>
        </div>

      </div>
    </div>
  )
}

export default TarjetaCurso
