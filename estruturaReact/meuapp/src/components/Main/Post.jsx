import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'



export function Post() {
  return (
   <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar className={styles.avatar} src="https://avatars.githubusercontent.com/u/104436533?v=4" alt="picture" title="picture"/>
        <div className={styles.authorInfo}>
          <strong>Lucas Telezinho</strong>
          <span>Mobile Developer</span>
        </div>
      </div>
      <time title="11 de Julho às 09:56" dateTime="2022-05-11 08:13:30">Publicado há</time>
    </header>
    <div className={styles.content}>
      <p>Fala galeraa 😎</p>
      <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no HTML 5 , super especial para vocês!</p>

      <p><a href="/">🤝 lucas.desing/doctorcare</a></p>

      <p><a href="/">#novoprojeto #html #programacao</a></p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu Feedback</strong>
      <textarea
      placeholder='Deixe seu comentário'
      />
      
      <footer>
        <button type='submit'>Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
    </div>
   </article>
  )
}