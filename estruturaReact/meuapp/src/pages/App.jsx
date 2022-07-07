// Componente é uma parte da interface da nossa aplicação que pode ser repetida , inclusive com informações diferentes
//JSX = Javascript  + XML (HTML)

import React from 'react'
import { Perguntas } from './Perguntas/Perguntas'
// import Style from './perguntas/style'



const App = () => {
  return (
    <div>
      <Perguntas />
      {/* <Style /> */}
    </div>
  )
}

export default App