// Componente é uma parte da interface da nossa aplicação que pode ser repetida , inclusive com informações diferentes
//JSX = Javascript  + XML (HTML)

import React from 'react'
import { Header } from '../components/Header/Header'

import { Post } from './Perguntas/Post'
import '../global.css'
// import Style from './perguntas/style'



const App = () => {
  return (
    <div>
      <Header />
      <Post  
      author="Lucas Mendes" 
      content="Loren askoaksoaoks aoksoaskaosaao aoksask"/>
      <Post 
      author2="Gabriela Souza"
      content="Uma nova programadora"
      src="www.google.com"
      title="Sou o titulo"/>

    </div>
  )
}

export default App