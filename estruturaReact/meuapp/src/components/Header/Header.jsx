//A pasta components diz respeito a arquivos que serão usados mais de uma vez

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
    <strong>Ignite Feed</strong>
    </header>
  )
}


