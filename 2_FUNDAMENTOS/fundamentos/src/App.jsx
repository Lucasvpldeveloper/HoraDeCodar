import './App.css'

// 2 - Importando componente
import FirstComponent from './components/FirstComponenet'

// 4 - Template expression 
import TemplateExpression from './components/TemplateExpression'

// 5 - Hierarquia de componentes 
import MyComponent from './components/MyComponent'

// 6 - eventos 

import Events from './components/Events'

function App() {
  // 3 - comentarios
  return (
    <>
    {/* 3 - comentario JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App
