// src/types/index.ts — Tipo del curso
export interface Curso {
  id:          number
  titulo:      string
  descripcion: string
  duracion:    string
  nivel:       'Básico' | 'Intermedio' | 'Avanzado'
  imagen:      string
}
