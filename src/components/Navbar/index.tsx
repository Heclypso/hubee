import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {

    const [menuAberto, setMenuAberto] = useState<boolean>(false)
    const [itensEscondidos, setItensEscondidos] = useState<boolean>(true)

    return (
        <nav className={styles.nav}>
            <img className={styles.nav__brand} src="./src/assets/brand-icon.svg" alt="Ícone da marca hubee" />
    
            <ul className={`${styles.nav__list} ${menuAberto ? styles['nav__list--visible'] : ''}`}>
                <li onClick={()=> itensEscondidos ? setItensEscondidos(false) : setItensEscondidos(true)} className={styles.nav__list__item}>Serviços</li>
                {!itensEscondidos && (
                    <>
                        <li className={`${styles.nav__list__item} ${styles['nav__list__item--active']}`}>Conserto de roupas</li>
                        <li className={styles.nav__list__item}>Confeitaria</li>
                        <li className={styles.nav__list__item}>Outros serviços</li>
                    </>
                )}
                <li className={styles.nav__list__item}>Móveis usados</li>
            </ul>    
        
            {!menuAberto && (
                <img onClick={() => {setMenuAberto(true); setItensEscondidos(false);}} className={styles.nav__menu} src="./src/assets/menu-icon.svg" alt="Icone de expandir o menu" />
            )}

            {menuAberto && (
                <img onClick={() => setMenuAberto(false)} className={styles.nav__menu} src="./src/assets/close-menu-icon.svg" alt="Icone de fechar o menu" />
            )}
        </nav>
    )
}

export default Navbar