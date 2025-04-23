import styles from  '@/styles/Product.module.css'
import Image from 'next/image'

interface ProductProps {
    titleProduct: string
    category: string
    subCategory: string
    manufacturer: string
    codeProduct: string
    note: number
}

export default function Product(props: ProductProps) {
    return (
        <>
        <div className={styles.product}>
        <Image src="https://imageplaceholder.net/720x720" alt='' width={100} height={100}></Image>
        <div className={styles.productInfo}>
            <h3 className={styles.titleProduct}>{props.titleProduct}</h3>
            <span>Categoria: {props.category + ' > ' + props.subCategory}</span>
            <span>{props.manufacturer}</span>
            <span>Código: {props.codeProduct}</span>
        </div>
        <div className={styles.rating}>
            <div className={styles.sliderRating}>
                <img alt='' src='/barra_vertical_color.png' width={200}></img>
                <div style={{left: (props.note / 10) * 188}} className={styles.dot}></div>
            </div>
            <h3 className={styles.ratingNote}>
                {props.note}
            </h3>
        </div>
        </div>
        </>)
}