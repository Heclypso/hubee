import { useEffect, useState } from 'react'
import styles from './Product.module.css'
import type { DadosDaAPi } from '../../types/dadosDaApi'

const Product = (): React.JSX.Element => {
    const [data, setData] = useState<DadosDaAPi>()
    // const [dataFoiCriada, setDataFoiCriada] = useState(false)

    const chamaApi = async () => {
        const endpoint = 'https://hubee-api.vercel.app/api'
        const resp = await fetch(endpoint)

        if (resp.status === 200) {
            const obj = await resp.json()
            setData(obj)
            // setDataFoiCriada(true)
        }
    }

    useEffect(()=>{
        chamaApi()
    },[])

    useEffect(()=> {
        const moveisUsados = data?.moveisUsados

        moveisUsados?.forEach(elemento => {
            console.log(elemento)
        })

        const consertoDeRoupas = data?.consertoDeRoupas

        consertoDeRoupas?.forEach(elemento => {
            console.log(elemento)
        })

        const confeitaria = data?.confeitaria

        confeitaria?.forEach(elemento => {
            console.log(elemento)
        })

        const outrosServicos = data?.outrosServicos

        outrosServicos?.forEach(elemento => {
            console.log(elemento)
        })
    }, [data])

    return (
        <div className={styles.product}>
            <img className={styles.product__image} src="https://placehold.co/300x220" alt="" />
            <div className={styles.product__infos}>
                <h2 className={styles.product__title}>Placeholder</h2>
                <div className={styles['product__tag-wrapper']}>
                    <span className={styles.product__tag}>Semi-novo</span>
                </div>
                <p className={styles['product__total-price']}>1x de R$ 157</p>
                <p className={styles.product__installment}>Em até 3x sem juros de R$ 52,33 </p>
            </div>
        </div>
    )
}

export default Product