import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// estes componentes têm de existir dentro de cada pagina para que funcionem
import Catalogo from './pages/Catalogo';
import Contacto from "./pages/Contacto";
import Favoritos from './pages/Favoritos';
import Home from './pages/Home';
import Sobre from './pages/Sobre';


// CRIAR A FUNÇÃO APP 
// A função App é o componente principal da aplicação React. Ele retorna o JSX que define a estrutura da interface do usuário. Neste caso, ele retorna um BrowserRouter que envolve as rotas da aplicação. Cada Route define um caminho e o componente correspondente que deve ser renderizado quando o caminho é acessado. O Link é usado para criar links de navegação entre as páginas da aplicação.


// BrowserRouter cria e dá o nome do link
// Router liga o link à página correspondente a ser mostrada

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/Catalogo">Catálogo</Link>
        <Link to="/Favoritos">Favoritos</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Contacto">Contato</Link>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
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
