import styles from '../Main/Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/104436533?v=4" alt=""></img>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Julinha Juliettes</strong>
              <time title="11 de Julho às 11:43" dataTime="2022-07-11 11:43:12">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário" size='24'>
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