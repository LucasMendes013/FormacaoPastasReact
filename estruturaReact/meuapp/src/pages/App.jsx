// Componente é uma parte da interface da nossa aplicação que pode ser repetida , inclusive com informações diferentes
//JSX = Javascript  + XML (HTML)

import React from 'react'
import { Header } from '../components/Header/Header'

import { Post } from './Perguntas/Post'

import styles from '../pages/App.module.css'

import '../global.css'
import { Sidebar } from '../components/Main/SideBar'




export function App() {
  return (
    <div>
        <Header></Header>
          <div className={styles.wrapper}>
            <Sidebar>
              
            </Sidebar>

              <main>
                <Post 
                  author="Lucas Mendes"
                  content="Novo programador"/>
                <Post 
                  author="Gabriela Souza"
                  content="Nova programadora"/>
              </main>
          </div>
    </div>
  )
}

export default App