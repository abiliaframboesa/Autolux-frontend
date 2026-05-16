import { Link } from "react-router-dom";

function VehicleCard(props) {

    const favorito = props.favoritos?.find(
        (v) => v.id === props.id
    );

    return (
        <div className="vehicle-card">

            <Link to={`/veiculo/${props.id}`}>
                <img src={props.imagem} alt={props.modelo} width="300" />
                <h2>{props.marca} {props.modelo}</h2>
                <p>{props.ano} - {props.combustivel}</p>
                <p><strong>{props.preco} €</strong></p>
            </Link>

            <button onClick={() => props.toggleFavorito(props)}>
                {favorito ? "Remover Favorito" : "Adicionar Favorito"}
            </button>

        </div>
    );
}

export default VehicleCard;