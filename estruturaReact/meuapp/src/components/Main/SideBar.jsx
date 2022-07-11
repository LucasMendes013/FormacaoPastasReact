import { PencilLine} from 'phosphor-react'

import styles from './SideBar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img 
        className={styles.cover}
          src="https://images.unsplash.com/photo-1654139345546-2e1dd1f67a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
          alt="Capa do Perfil"
          title="Capa do Perfil"></img>

        <div className={styles.profile}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/104436533?v=4" alt="Imagem de Perfil"></img>

          <strong>Vanessa Vanessets</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="/">
            <PencilLine size={20} />
             Editar seu perfil
          </a>
        </footer>
    </aside>
  )
}