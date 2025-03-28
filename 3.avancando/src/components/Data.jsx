import { useState } from "react"

const Data = () => {
    let someData = 10

    const [anotherNumber, setanotherNumber] = useState(15)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>
        </div>
        <div>
            <p>Valor; {anotherNumber}</p>
            <button onClick={() => setanotherNumber(20)} >Mudar state</button>
        </div>
    </div>
  )
}

export default Data