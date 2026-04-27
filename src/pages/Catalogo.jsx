import { useState } from 'react';
import vehicles from '../data/vehicles.json';
import VehicleCard from '../components/VehicleCard';
import '../components/VehicleCard.css';

function Catalogo() {
    const [marca, setMarca] = useState("");
    const [combustivel, setCombustivel] = useState("");
    const [precoMax, setPrecoMax] = useState("");

    const filtrados = vehicles.filter((v) => {
        return (
            (marca === "" || v.marca === marca) &&
            (combustivel === "" || v.combustivel === combustivel) &&
            (precoMax === "" || v.preco <= Number(precoMax))
        );
    });
    return (
        <div>
            <h1>Catálogo</h1>
            
            {/* FILTROS */}
            <div>
                <select onChange={(e) => setMarca(e.target.value)}>
                    <option value="">Todas as marcas</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Renault">Renault</option>
                    <option value="Audi">Audi</option>
                    <option value="Ford">Ford</option>
                    <option value="SEAT">SEAT</option>
                </select>

                <select onChange={(e) => setCombustivel(e.target.value)}>
                    <option value="">Todos combustíveis</option>
                    <option value="Gasolina">Gasolina</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Híbrido">Híbrido</option>
                    <option value="Híbrido Plug-in">Híbrido Plug-in</option>
                    <option value="Elétrico">Elétrico</option>
                </select>

                <input
                    type="number"
                    placeholder="Preço máximo"
                    onChange={(e) => setPrecoMax(e.target.value)}
                />
            </div>


            {/* MAPEAR VEÍCULOS */}
            {filtrados.map((v) => (
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