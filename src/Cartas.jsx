import logo from "./assets/icono.png";

function Cartas (){
    return(
        <div className="container mt-5 mb-5 p-5">
            <div className="card" style={{width:"200px"}}>

                <img src={logo} className="card-img-top" alt="icono" />

                <div className="card-body">
                    <h4 className="card-title">Ejemplo tarjeta bootstrap</h4>
                    <p className="card-text">Ejemplo de tarjeta</p>

                    <button className="btn btn-primary">
                        Ver más
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Cartas;