import './App.css'

// 2 - imagem em assets
import praia from './assets/praia-tarde.jpg'

// 3 - useState
import Data from "./components/Data"

// 4 - renderizacao de lista
import Listrender from './components/Listrender'

function App() {

  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avancando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/praia-dia.jpg" alt="Imagem de alguma paria de dia" />
      {/* 2 - imagem em assts*/}
      <img src={praia} alt="imagem de alguma praia no por do sol" />
      {/* 3 - useState*/}
      <Data/>
      {/* 4 - render de lista*/}
      <Listrender/>
    </div>
  )
}

export default App
