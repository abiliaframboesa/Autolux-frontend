import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// estes componentes têm de existir dentro de cada pagina para que funcionem
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import DetalheVeiculo from './pages/DetalheVeiculo';
import Favoritos from './pages/Favoritos';
import Contacto from "./pages/Contacto";
import Sobre from "./pages/Sobre";


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';


// CRIAR A FUNÇÃO APP 
// A função App é o componente principal da aplicação React. Ele retorna o JSX que define a estrutura da interface do usuário. Neste caso, ele retorna um BrowserRouter que envolve as rotas da aplicação. Cada Route define um caminho e o componente correspondente que deve ser renderizado quando o caminho é acessado. O Link é usado para criar links de navegação entre as páginas da aplicação.


// BrowserRouter cria e dá o nome do link
// Router liga o link à página correspondente a ser mostrada

function App() {

  const [favoritos, setFavoritos] = useState([]);
  
  const toggleFavorito = (veiculo) => {
    const existe = favoritos.find((v) => v.id === veiculo.id);

    if (existe) {
      setFavoritos(favoritos.filter((v) => v.id !== veiculo.id));
    } else {
      setFavoritos([...favoritos, veiculo]);
    }
  };

  return (
    <BrowserRouter>

      {/* a navbar e o footer podiam ter ficado aqui */}
      <Navbar favoritos={favoritos} />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo favoritos={favoritos}
          toggleFavorito={toggleFavorito} />} />
        <Route path="/veiculo/:id" element={<DetalheVeiculo favoritos={favoritos}
          toggleFavorito={toggleFavorito} />} />
        <Route path="/favoritos" element={<Favoritos favoritos={favoritos}
          toggleFavorito={toggleFavorito} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer />

    </BrowserRouter>


  )
}

export default App









// ######################################################

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
