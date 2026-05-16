import VehicleCard from "../components/VehicleCard";


function Favoritos({ favoritos, toggleFavorito }) {
    
    return (
        <div>
            <h1>Favoritos</h1>
            {favoritos.length === 0 ? (
                <p>Sem favoritos</p>
            ) : (
                favoritos.map((v) => (
                    <div key={v.id} className="vehicle-card">
                    <img src={v.imagem} width="300" />
                    <h2>{v.marca} {v.modelo}</h2>
                    <p>{v.ano} - {v.combustivel}</p>
                    <p><strong>{v.preco} €</strong></p>
                    <button onClick={() => toggleFavorito(v)}>
                    Remover
                    </button>
                </div>
                ))
            )}
        </div>
    );
}

export default Favoritos;