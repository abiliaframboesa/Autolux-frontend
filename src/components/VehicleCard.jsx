function VehicleCard(props) { 
    return (
        <div className="vehicle-card">
            <img src={props.imagem} alt={props.modelo} width="300" />
            <h2>{props.marca} {props.modelo}</h2>
            <p>{props.ano}</p>
            <p><strong>{props.preco} €</strong></p>
        </div>
    )
}

export default VehicleCard;