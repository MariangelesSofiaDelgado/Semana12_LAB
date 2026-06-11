// src/pages/Cursos.tsx
import { useState } from 'react'
import type { Curso }    from '../types'
import TarjetaCurso from '../components/TarjetaCurso'

// Datos de ejemplo (en producción vendrían de una API REST)
const listaCursos: Curso[] = [
  {
    id: 1,
    titulo:      'JavaScript Avanzado',
    descripcion: 'React, Angular, Node.js y más frameworks modernos.',
    duracion:    '72 horas',
    nivel:       'Avanzado',
    imagen:      'https://placehold.co/400x200/C0392B/white?text=JavaScript'
  },
  {
    id: 2,
    titulo:      'Bases de Datos SQL',
    descripcion: 'Diseño, consultas y optimización en PostgreSQL.',
    duracion:    '48 horas',
    nivel:       'Intermedio',
    imagen:      'https://placehold.co/400x200/2980B9/white?text=SQL'
  },
  {
    id: 3,
    titulo:      'Python para Datos',
    descripcion: 'Pandas, NumPy y visualización con Matplotlib.',
    duracion:    '60 horas',
    nivel:       'Básico',
    imagen:      'https://placehold.co/400x200/27AE60/white?text=Python'
  },
]

function Cursos() {
  // useState para el filtro de búsqueda
  const [filtro, setFiltro] = useState('')

  // Filtrar cursos en tiempo real según lo que escribe el usuario
  const cursosFiltrados = listaCursos.filter(c =>
    c.titulo.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <div>
      <h2 className="mb-4">📚 Catálogo de Cursos</h2>

      {/* Buscador — formulario controlado simple */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar cursos..."
          value={filtro}
          onChange={e => setFiltro(e.target.value)} // Actualiza estado en cada tecla
        />
      </div>

      {/* Grid de tarjetas — el mismo componente con diferentes props */}
      <div className="row">
        {cursosFiltrados.map(curso => (
          <TarjetaCurso key={curso.id} curso={curso} />
        ))}
      </div>

      {cursosFiltrados.length === 0 && (
        <p className="text-center text-muted">
          No se encontraron cursos para "{filtro}"
        </p>
      )}
    </div>
  )
}

export default Cursos
