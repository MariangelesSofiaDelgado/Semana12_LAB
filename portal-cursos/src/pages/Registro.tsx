// src/pages/Registro.tsx
import { useState,type FormEvent } from 'react'

import { useNavigate }         from 'react-router-dom'

// Tipo para los datos del formulario
interface FormData {
  nombre:  string
  email:   string
  curso:   string
  mensaje: string
}

// Tipo para los errores de validación
interface FormErrors {
  nombre?:  string
  email?:   string
  curso?:   string
}

function Registro() {
  const navigate = useNavigate()

  // Estado del formulario — React como única fuente de verdad
  const [form, setForm] = useState<FormData>({
    nombre:  '',
    email:   '',
    curso:   '',
    mensaje: ''
  })

  // Estado de errores — se actualiza en tiempo real
  const [errors, setErrors] = useState<FormErrors>({})
  const [enviado, setEnviado] = useState(false)

  // Actualizar un campo del formulario sin perder los demás (spread operator)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))

    // Validar el campo que cambió en tiempo real
    validarCampo(name, value)
  }

  // Validación de un campo individual
  const validarCampo = (name: string, value: string) => {
    let error = ''

    if (name === 'nombre' && value.trim().length < 3)
      error = 'El nombre debe tener al menos 3 caracteres'

    if (name === 'email' && !/^[^s@]+@[^s@]+.[^s@]+$/.test(value))
      error = 'Ingresa un correo electrónico válido'

    if (name === 'curso' && !value)
      error = 'Selecciona un curso para continuar'

    setErrors(prev => ({ ...prev, [name]: error }))
  }

  // Validar todo el formulario antes de enviar
  const formularioEsValido = (): boolean => {
    validarCampo('nombre', form.nombre)
    validarCampo('email',  form.email)
    validarCampo('curso',  form.curso)
    return (
      form.nombre.trim().length >= 3 &&
      /^[^s@]+@[^s@]+.[^s@]+$/.test(form.email) &&
      form.curso !== ''
    )
  }

  // Manejar el envío del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault() // Evitar recarga de página

    if (!formularioEsValido()) return

    // Aquí irá la llamada a la API (Semana 14)
    console.log('Formulario enviado:', form)
    setEnviado(true)

    // Navegar a inicio después de 2 segundos
    setTimeout(() => navigate('/'), 2000)
  }

  // Pantalla de éxito tras el envío
  if (enviado) {
    return (
      <div className="alert alert-success text-center p-5">
        <h3>✅ ¡Inscripción exitosa!</h3>
        <p>Te enviamos los detalles a <strong>{form.email}</strong></p>
        <p className="text-muted small">Redirigiendo a inicio...</p>
      </div>
    )
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="mb-4">📝 Formulario de Inscripción</h2>

        <form onSubmit={handleSubmit} noValidate>

          {/* Campo Nombre */}
          <div className="mb-3">
            <label className="form-label fw-bold">Nombre completo *</label>
            <input
              type="text"
              name="nombre"
              className={'form-control ' + (errors.nombre ? 'is-invalid' : '')}
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ej: María García López"
            />
            {errors.nombre && (
              <div className="invalid-feedback">{errors.nombre}</div>
            )}
          </div>

          {/* Campo Email */}
          <div className="mb-3">
            <label className="form-label fw-bold">Correo electrónico *</label>
            <input
              type="email"
              name="email"
              className={'form-control ' + (errors.email ? 'is-invalid' : '')}
              value={form.email}
              onChange={handleChange}
              placeholder="ejemplo@utp.edu.pe"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Select de Curso */}
          <div className="mb-3">
            <label className="form-label fw-bold">Curso de interés *</label>
            <select
              name="curso"
              className={'form-select ' + (errors.curso ? 'is-invalid' : '')}
              value={form.curso}
              onChange={handleChange}>
              <option value="">-- Selecciona un curso --</option>
              <option value="js">JavaScript Avanzado</option>
              <option value="sql">Bases de Datos SQL</option>
              <option value="python">Python para Datos</option>
            </select>
            {errors.curso && (
              <div className="invalid-feedback">{errors.curso}</div>
            )}
          </div>

          {/* Textarea Mensaje */}
          <div className="mb-4">
            <label className="form-label fw-bold">Mensaje (opcional)</label>
            <textarea
              name="mensaje"
              className="form-control"
              rows={3}
              value={form.mensaje}
              onChange={handleChange}
              placeholder="¿Tienes alguna pregunta o comentario?"
            />
          </div>

          <button type="submit" className="btn btn-danger w-100 py-2">
            Enviar inscripción →
          </button>

        </form>
      </div>
    </div>
  )
}

export default Registro
