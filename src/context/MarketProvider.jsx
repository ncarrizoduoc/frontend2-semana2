import { useState } from 'react'
import MarketContext from './MarketContext'
import articulosIniciales from '../data/articulos.json'

// Carga lista de articulos desde el archivo JSON
function construirEstadoInicial() {
    return articulosIniciales.map((articulo) => ({...articulo}))
}

function MarketProvider({ children }) {
    const [articulos, setArticulos] = useState(construirEstadoInicial)

    // Funcion para agregar un articulo al inventario
    const agregarArticulo = (articulo) => {
        const nuevoArticulo = {
            id: crypto.randomUUID(),
            ...articulo
        }

        setArticulos((previos) => [...previos, nuevoArticulo])

        return {exito : true}
    }

    // Disponibilizar lista de articulos y funcion agregarArticulo a todos los componentes "hijos"
    return (
        <MarketContext.Provider value={{ articulos, agregarArticulo }}>
            {children}
        </MarketContext.Provider>
    )
}

export default MarketProvider