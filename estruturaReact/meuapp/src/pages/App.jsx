// Componente é uma parte da interface da nossa aplicação que pode ser repetida , inclusive com informações diferentes
//JSX = Javascript  + XML (HTML)

import React from 'react'
import { Header } from '../components/Header/Header'

import { Post } from '../components/Main/Post'

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
                <Post />
              </main>
          </div>
    </div>
  )
}

export default App