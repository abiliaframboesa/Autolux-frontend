import { Link } from "react-router-dom";

//NOTA: /veiculo/:id significa que o valor que vier no URL será usado como parâmetro para identificar qual veículo deve ser mostrado na página de detalhes. O :id é um placeholder que será substituído pelo valor real do ID do veículo quando a rota for acessada

function Navbar() {
    return (
        <nav className='navbar'>
            <Link to="/">Página Inicial</Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/veiculo/:id">Detalhe do Veículo</Link>
            <Link to="/favoritos">Favoritos</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/sobre">Sobre Nós</Link>
        </nav>
    );
}

export default Navbar;