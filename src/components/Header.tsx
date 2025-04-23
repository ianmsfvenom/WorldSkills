import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


interface HeaderProps {
    title: string
    role?: 'avaliador' | 'representante'
}
export default function Header(props: HeaderProps) {
    
    return (
        <>
        <Head>
            <title>{props.title}</title>
        </Head>
        <div className={styles.header}>
            <div className={styles.startSide}>
            <div className={styles.dropdown}>
                <Image id={styles.menuDrop}alt='' src='/hamburger_icon_64px.png' width={32} height={32} />
                <div className={styles['dropdown-content']}>
                    <p><Link href={'/perfil'}>Acessar perfil</Link></p>
                    <p><Link href={'/registrar-avaliacao'}>Registrar avaliacao</Link></p>
                    <p style={{ display: props.role != 'representante' ? 'none' : 'block'}}><Link href={'/'}>Gerenciar produtos</Link></p>
                </div>
            </div>
                <div className={styles.searchProduct}>
                    <label htmlFor="searchProductField">Buscar produto:</label>
                    <input type="text" className="form-control" name="searchProductField" id="searchProductField" />
                </div>
            </div>
            <button style={{ backgroundColor: '#37B06D', marginRight: 5 }} className={"btn btn-success " + styles.managementButton}>Gerenciamento</button>
        </div>
        </>
    )
}