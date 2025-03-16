import React from 'react'

const Events = () => {

    const handClick = (e) => {
        console.log(e)
        console.log("Executou")
    }

    // 8 - Funcao de renderizacao
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa!</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        </div>
        {/* 7 - Eventos com funcao */}
        <div>
            <button onClick={handClick}>Clique aqui - com funcao</button>
        </div>
        {/* 8 - Funcao com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>

  )
}

export default Events