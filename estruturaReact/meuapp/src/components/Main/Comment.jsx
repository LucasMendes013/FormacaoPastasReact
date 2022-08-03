import styles from '../Main/Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content, deleteComment}) {
  function handleDeleteComent(){  
    console.log('ola d')
    deleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/51282495?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Julinha Juliettes</strong>
              <time title="11 de Julho às 11:43" dataTime="2022-07-11 11:43:12">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComent} title="Deletar comentário" size='24'>
              x
            </button>
          </header>

          <p>Muito bom Lursinho, parabéns! 🤌🤌🤌</p>
        </div>

        <footer>
          <button>
            
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}