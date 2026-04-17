import { useParams } from "react-router-dom";

// const {id} ou let params = useParams()... {params.id} é a mesma coisa, só se torna mais simples a primeira opção
function DetalheVeiculo() {
    const { id } = useParams();
    return <h1>Veículo {id}</h1>
}

export default DetalheVeiculo;