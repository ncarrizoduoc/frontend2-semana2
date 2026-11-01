import useMarket from "../hooks/UseMarket"

function Inventario() {
    const { articulos } = useMarket()

    return (
        <>
            <div>
                <h1>Inventario</h1>
                <p className="leading-relaxed">La siguiente tabla contiene un listado de todos los productos disponibles en tienda</p>
            </div>
            <table className="table table-striped table-bordered border-dark container my-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Categoría</th>
                    </tr>
                </thead>
                <tbody>
                    {articulos.map((articulo, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <img
                                    src={articulo.url}
                                    alt={articulo.nombre}
                                    width="56"
                                    height="56"
                                    className="object-fit-cover"
                                />
                            </td>
                            <td>{articulo.nombre}</td>
                            <td>{articulo.marca}</td>
                            <td>{articulo.categoria}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Inventario