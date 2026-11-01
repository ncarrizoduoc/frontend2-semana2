import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import NuestrasTiendas from './pages/NuestrasTiendas'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import { Routes, Route } from 'react-router'
import './App.css'
import NuevoArticulo from './pages/NuevoArticulo'
import MarketProvider from './context/MarketProvider'
import Inventario from './pages/Inventario'

function App() {

  return (
    <MarketProvider>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />
        
        <main className='flex-grow-1'>
          <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/nuestras-tiendas' element={<NuestrasTiendas />}/>
            <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />}/>
            <Route path='/inventario' element={<Inventario />}/>
            <Route path='/nuevo-articulo' element={<NuevoArticulo />}/>
          </Routes>
        </main>
        
        <Footer />
      </div>
    </MarketProvider>
  )
}

export default App
