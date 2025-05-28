import '../../global.css';
import styles from './Hero.module.css';

const Hero = (): React.JSX.Element => {

    return (
        <div className={styles.hero}>
            <div className="container">
                <div className={styles.container__left}>
                    <h1 className={styles.hero__title}>Móveis usados</h1>
                    <h2 className={styles.hero__subtitle}>Móveis semi-novos de qualidade e por um preço acessível.</h2>
                </div>
                <div className={styles.container__right}>
                    <img className={styles.container__right__image} src="https://placehold.co/100x244" alt="" />
                    <img className={styles.container__right__image} src="https://placehold.co/100x300" alt="" />
                    <img className={styles.container__right__image} src="https://placehold.co/100x244" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero