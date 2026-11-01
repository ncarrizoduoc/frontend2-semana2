import NuevoArticuloForm from "../components/NuevoArticuloForm"


function NuevoArticulo(){
    return(
        <div className="my-5">
            <div className="container mb-3">
                <h1>Agregar artículo</h1>
                <p>Rellene el siguiente formulario para agregar un nuevo artículo al inventario</p>
            </div>
            <NuevoArticuloForm />
        </div>
    )
}

export default NuevoArticulo