import { useEffect, useState } from 'react'
import styles from './ProductFilter.module.css'

const ProductFilter = (): React.JSX.Element => {
    const [larguraDaTela, setLarguraDaTela] = useState<number>(window.innerWidth)

    useEffect(() =>{
        const primeiroFiltro = document.getElementsByTagName('option')[0] as HTMLElement
        const segundoFiltro = document.getElementsByTagName('option')[1] as HTMLElement
        const terceiroFiltro = document.getElementsByTagName('option')[2] as HTMLElement
        
        if (larguraDaTela < 1024) {
            primeiroFiltro.innerHTML = 'Todos'
            segundoFiltro.innerHTML = 'Caros'
            terceiroFiltro.innerHTML = 'Baratos'
        } else {
            primeiroFiltro.innerHTML = 'Todos os produtos'
            segundoFiltro.innerHTML = 'Mais caros'
            terceiroFiltro.innerHTML = 'Mais baratos'
        }
    }, [larguraDaTela])

    window.addEventListener('resize', () => {
        setLarguraDaTela(window.innerWidth)
    })
    
    return (
        <div className={styles['product-filter']}>
            <h2 className={styles['product-filter__title']}>Ordenar por</h2>
            <div className={styles['product-filter__controls']}>
                <div className={styles['product-filter__select-wrapper']}>
                    <select className={styles['product-filter__select']}>
                        <option className={styles['product-filter__option']}>Todos os produtos</option>
                        <option className={styles['product-filter__option']}>Mais caros</option>
                        <option className={styles['product-filter__option']}>Mais baratos</option>
                    </select>
                    <img className={styles['product-filter__icon']} src="./src/assets/arrow-down-icon.svg" alt="Ícone de expandir filtros" />
                </div>
                <div className={styles['product-search__wrapper']}>
                    <input className={styles['product-search__input']} type="text"/>
                    <img className={styles['product-search__icon']} src="./src/assets/search-icon.svg" alt="Ícone da barra de pesquisa" />
                </div>
            </div>
        </div>
    )
}

export default ProductFilter