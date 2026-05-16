import { useParams } from "react-router-dom";
import vehicles from "../data/vehicles.json";
import VehicleCard from "../components/VehicleCard";

// const {id} ou let params = useParams()... {params.id} é a mesma coisa, só se torna mais simples a primeira opção
function DetalheVeiculo({ favoritos, toggleFavorito }) {
    const { id } = useParams();
    const veiculo = vehicles.find((v) => v.id === Number(id));
    
    if (!veiculo) {
        return <h1>Veículo não encontrado</h1>;
    }

    return (
        <section>
            {/* <h1>{veiculo.marca} {veiculo.modelo}</h1>
            <img src={veiculo.imagem} alt={veiculo.modelo} width="400" />
            <p>Preço: {veiculo.preco}€</p>
            <p>Combustível: {veiculo.combustivel}</p>
            <p>Ano: {veiculo.ano}</p>
            <p>Km: {veiculo.km}</p> */}

            <VehicleCard key={veiculo.id} {...veiculo} favoritos={favoritos} toggleFavorito={toggleFavorito} />
        </section>
    );
}



export default DetalheVeiculo;
