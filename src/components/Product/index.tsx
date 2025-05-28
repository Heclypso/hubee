import styles from './Product.module.css'

const Product = (): React.JSX.Element => {

    return (
        <div className={styles.product}>
            <img className={styles.product__image} src="https://placehold.co/300x220" alt="" />
            <div className={styles.product__infos}>
                <h2 className={styles.product__title}>Sofá reclinável 3 lugares</h2>
                <span className={styles.product__tag}>Semi-novo</span>
                <p className={styles['product__total-price']}>1x de R$ 157</p>
                <p className={styles.product__installment}>Em até 3x sem juros de R$ 52,33 </p>
            </div>
        </div>
    )
}

export default Product