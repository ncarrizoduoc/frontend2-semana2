import { useState } from 'react'
import categorias from '../data/categorias.json'
import { validarArticulo } from '../util/ValidarArticulo'
import useMarket from '../hooks/UseMarket'

// Formulario para agregar un nuevo artículo al inventario
function NuevoArticuloForm() {

    const { agregarArticulo } = useMarket()

    // Variables para campos del form
    const [articulo, setArticulo] = useState({
        nombre: '',
        marca: '',
        url: '',
        categoria: ''
    })

    // Variables para validez de campos del form
    const [validez, setValidez] = useState({
        nombre: true,
        marca: true,
        url: true,
        categoria: true
    })

    // Handler que actualiza valores del formulario cada vez que se modifiquen
    const handleChange = (event) => {
        const { id, value } = event.target
        setArticulo((prev) => ({ ...prev, [id]: value }))
    }

    // Reiniciar valores del formulario y booleanos de validacion
    const limpiarFormulario = () => {
        setArticulo({
            nombre: '',
            marca: '',
            url: '',
            categoria: ''
        })
        setValidez({
            nombre: true,
            marca: true,
            url: true,
            categoria: true
        })
    }

    // Funcion para enviar el formulario (primero valida los datos y luego crea el nuevo artículo)
    const submitForm = (event) => {
        event.preventDefault()

        // Si los datos son validos, se agrega el articulo.
        // Si no, se muestran los invalid-feedback que correspondan
        const formularioValido = validarArticulo(articulo)
        if (Object.values(formularioValido).every(Boolean)) {
            agregarArticulo(articulo)
            alert("Se ha agregado el producto al inventario")
            limpiarFormulario()
        } else {
            setValidez(formularioValido)
        }
    }

    return (
        <section>

            <form className="container text-start bg-body-secondary border border-warning rounded p-3" onSubmit={submitForm}>
                <div className="d-flex flex-column gap-2">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label htmlFor="nombre" className="form-label">Nombre:</label>
                            <input
                                type="text"
                                value={articulo.nombre}
                                className={`form-control ${validez.nombre ? '' : 'is-invalid'}`}
                                id="nombre"
                                placeholder="Nombre del producto"
                                onChange={handleChange}
                            />
                            <div id="articuloNombreFeedback" className="invalid-feedback">
                                Debes ingresar un nombre (no más de 150 caracteres).
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="marca" className="form-label">Marca:</label>
                            <input
                                type="text"
                                value={articulo.marca}
                                className={`form-control ${validez.marca ? '' : 'is-invalid'}`}
                                id="marca"
                                placeholder="Marca del producto"
                                onChange={handleChange}
                            />
                            <div id="articuloMarcaFeedback" className="invalid-feedback">
                                Debes ingresar una marca (no más de 50 caracteres).
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="url" className="form-label">URL de la imagen:</label>
                        <input
                            type="text"
                            value={articulo.url}
                            className={`form-control ${validez.url ? '' : 'is-invalid'}`}
                            id="url"
                            onChange={handleChange}
                        />
                        <div id="articuloUrlFeedback" className="invalid-feedback">
                            Debes ingresar una URL válida.
                        </div>
                    </div>
                    <div>
                        <label htmlFor="categoria" className="form-label">Categoría:</label>
                        <select
                            value={articulo.categoria}
                            className={`form-control ${validez.categoria ? '' : 'is-invalid'}`}
                            aria-label="Categoria form"
                            id="categoria"
                            onChange={handleChange}
                        >
                            <option disabled value="">Seleccione una categoría:</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.nombre}>
                                    {categoria.nombre}
                                </option>
                            ))}
                        </select>
                        <div id="articuloCategoriaFeedback" className="invalid-feedback">
                            Debes seleccionar una categoría.
                        </div>
                    </div>
                    <div className="row mt-4 gap-4 justify-content-between">
                        <div className="col-12 col-md-3">
                            <button type="submit" className="btn btn-warning w-100">
                                Agregar artículo
                            </button>
                        </div>
                        <div className="col-12 col-md-3">
                            <button type="button" className="btn btn-danger w-100" onClick={limpiarFormulario}>
                                Limpiar formulario
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>

    )
}

export default NuevoArticuloForm