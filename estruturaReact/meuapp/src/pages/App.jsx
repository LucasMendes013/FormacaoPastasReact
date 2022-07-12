// Componente é uma parte da interface da nossa aplicação que pode ser repetida , inclusive com informações diferentes
//JSX = Javascript  + XML (HTML)

import React from 'react'
import { Header } from '../components/Header/Header'

import { Post } from '../components/Main/Post'

import styles from '../pages/App.module.css'

import '../global.css'
import { Sidebar } from '../components/Main/SideBar'


// author: {avatar_url: "", name: "", role:""}
//publishedAt: Date
// content: String

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/lucasmendes013.png",
        name: "Lucas Mendes",
        role: "Devoleper"
      },
      content: [
        {  type: 'paragraph', content: 'Fala galeraa 😎'},
        {  type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no HTML 5 , super especial para vocês!'},
        { type: 'link', content: '🤝 lucas.desing/doctorcare'},
      ],
      publishedAt: new Date('2022-07-12 10:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/104006679?v=4",
        nome: "Gabins",
        role: "Devoleper Back-end"
      },
      content: [
        {  type: 'paragraph', content: 'Fala galeraa 😎'},
        {  type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no HTML 5 , super especial para vocês!'},
        { type: 'link', content: '🤝 lucas.desing/doctorcare'},
      ],
      publishedAt: new Date('2022-07-10 10:00:00')
    },
  ]


  return (
    <div>
        <Header></Header>
          <div className={styles.wrapper}>
            <Sidebar>
              
            </Sidebar>

              <main>
                {posts.map( post => {
                  return (
                    <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                    />
                  ) 
                })}
              </main>
          </div>
    </div>
  )
}

export default App