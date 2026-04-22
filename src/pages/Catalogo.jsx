import vehicles from '../data/vehicles.json';
import VehicleCard from '../components/VehicleCard';
import '../components/VehicleCard.css';

function Catalogo() {
    return (
        <div>
            <h1>Catálogo</h1>
            {vehicles.map((v) => (
                <VehicleCard key={v.id} {...v} />
            ))}
        </div>
    )
}

export default Catalogo;



// {/* {vehicles.map((v) => (
//     <div key={v.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
//         <img src={v.imagem} alt={v.modelo} width="300" />

//         <h2>{v.marca} {v.modelo}</h2>
//         <p>{v.ano}</p>
//         <p><strong>{v.preco} €</strong></p>
//     </div>
// ))} */}