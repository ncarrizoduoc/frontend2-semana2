import '../css/Categorias.css'
import categorias from '../data/categorias.json'

import { Link } from "react-router"

function Categorias() {
    return (
        <div>
            <div class="d-flex flex-container row row-cols-1 row-cols-md-3 g-4 mx-4 mb-4">
                {categorias.map((categoria) => (
                    <div class="col">
                        <div class="card categoria-card border-warning border-2 bg-secondary">
                            <img 
                                src={categoria.img} 
                                class="card-img-top" 
                                alt={`Imagen representativa de la categoria ${categoria.img}`}
                            />
                                <div class="card-body">
                                    <h5 class="card-title text-light mb-3">{categoria.nombre}</h5>
                                    <Link to='/' className="btn btn-light">Explorar</Link>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Categorias