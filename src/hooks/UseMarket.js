import { useContext } from "react"
import MarketContext from "../context/MarketContext"

function useMarket(){
    const contexto = useContext(MarketContext)

    if(!contexto){
        throw new Error("Error al cargar el contexto. useMarket debe usarse dentro de MarketProvider")
    }
    
    return contexto
}

export default useMarket