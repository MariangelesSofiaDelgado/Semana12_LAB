// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Cursos from './pages/Cursos'
import DetalleCurso from './pages/DetalleCurso'
import Registro from './pages/Registro'
import Footer from './components/Footer'
import App from './pages/InsCurso'
function App() {
  return (
    <>      {/* Navbar aparece en TODAS las páginas */}
      <Navbar />
      {/* Solo se renderiza la página que coincide con la URL actual */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:id" element={<DetalleCurso />} />
          <Route path="/registro" element={<Registro />} />
          {/* Ruta comodín: si ninguna coincide, mostrar página de inicio */}
          <Route path="*" element={<Inicio />} />
        </Routes>
      </div>

      <Footer/>
    </>
  )
}

export default App

