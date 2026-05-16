import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


// import { Link } from "react-router-dom";

//NOTA: /veiculo/:id significa que o valor que vier no URL será usado como parâmetro para identificar qual veículo deve ser mostrado na página de detalhes. O :id é um placeholder que será substituído pelo valor real do ID do veículo quando a rota for acessada

function Navbar({ favoritos }) {
    return (
        <div className="nav-wrapper"> {/* Fundo que estica 100% */}
            <nav className='navbar'> {/* Container com os teus 1280px e paddings */}
                <div className="nav-logo">AUTOLUX</div>
                   
                <ul className="nav-links">
                    
                    <Link to="/" className="active">HOME</Link>
                    <Link to="/catalogo">CATALOG</Link>
                    <Link to="/favoritos" className="nav-fav">FAVORITES ({favoritos.length})</Link>
                    <Link to="/sobre">ABOUT US</Link>

                    {/* <li><a href="/" className="active">HOME</a></li> */}
                    {/* <li><a href="/favoritos">FAVORITES</a></li> */}
                    {/* <li><a href="/catalogo">CATALOG</a></li> */}
                    {/* <li><a href="/sobre">ABOUT US</a></li> */}
                </ul>
                
                <div className="nav-actions">
                    {/* <SearchBar /> */}
                    
                    <button className="enquire-btn">ENQUIRE</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;