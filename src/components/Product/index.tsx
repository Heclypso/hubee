import styles from './Product.module.css'

const Product = (): React.JSX.Element => {

    return (
        <div className={styles.product}>
            <img className={styles.product__image} src="https://placehold.co/300x220" alt="" />
            <div className={styles.product__infos}>
                <h2 className={styles.product__title}>Sofá reclinável 3 lugares</h2>
                <div className={styles['product__tag-wrapper']}>
                    <span className={styles.product__tag}>Semi-novo</span>
                    <span className={styles.product__tag}>Cubro folga</span>
                    <span className={`${styles.product__tag} ${styles['product__tag--purple']}`}>Diária</span>
                    <span className={`${styles.product__tag} ${styles['product__tag--purple']}`}>P/Hora</span>
                    <span className={`${styles.product__tag} ${styles['product__tag--green']}`}>P/Unidade</span>
                    <span className={`${styles.product__tag} ${styles['product__tag--green']}`}>P/Kg</span>
                    <span className={`${styles.product__tag} ${styles['product__tag--green']}`}>P/Cento</span>
                    <span className={`${styles.product__tag} ${styles['product__tag--ran-out']}`}>Acabou</span>
                    <span className={`${styles.product__tag} ${styles['product__tag--pink']}`}>P/Serviço</span>
                </div>
                <p className={styles['product__total-price']}>1x de R$ 157</p>
                <p className={styles.product__installment}>Em até 3x sem juros de R$ 52,33 </p>
            </div>
        </div>
    )
}

export default Product