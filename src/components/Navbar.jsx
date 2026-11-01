import { Link } from "react-router"
import { useState } from "react";
import logo from "../assets/img/orange_logo.svg"

function Navbar() {

    const[isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <div>
                    <img
                        src={logo}
                        alt="Logo de Market"
                        width="30"
                        height="30"
                        className='me-1'

                    />
                    <Link to="/" className="navbar-brand">
                        Market
                    </Link>
                </div>
                <button 
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/nuestras-tiendas' className="nav-link">
                                Nuestras tiendas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/preguntas-frecuentes' className="nav-link">
                                Preguntas Frecuentes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/inventario' className="nav-link">
                                Inventario
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/nuevo-articulo' className="nav-link">
                                Agregar artículo
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar