import { useParams } from 'react-router-dom'

function DetalleCurso() {
  const { id } = useParams()

  return (
    <div>
      <h2>Detalle del curso</h2>
      <p>Estás viendo el curso con ID: {id}</p>
    </div>
  )
}

export default DetalleCurso