//A pasta components diz respeito a arquivos que serão usados mais de uma vez

import styles from './Header.module.css'

import fogueteLogo from '../../assets/assetsHome/ignite-logo.png'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={fogueteLogo} alt="Logotipo do Ignite"></img>
    </header>
  )
}


