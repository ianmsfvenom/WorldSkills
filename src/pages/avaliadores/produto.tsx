import Header from "@/components/Header";
import styles from '@/styles/ProductInfo.module.css'

export default function Produto() {
    return <>
        <Header title="Produto"></Header>
        <div className={styles.container}>
            <div className={"card " + styles.cardProduct} style={{ width: '70%' }}>
                <div className={styles.imgProduct}>
                    <img src="https://imageplaceholder.net/720x720" width={300} height={300} />
                </div>
                <div className={styles.infoProduct}>
                    <h1>S24 Plus</h1>
                    <span>Eletronicos</span>
                    <span>Celulares</span>
                    <span></span>
                    <div className={styles.buttons}>
                        <button className="btn btn-primary"><a style={{ textDecoration: 'none', color: 'white' }} href="#descricao">Descrição</a></button>
                        <button className="btn btn-success"><a style={{ textDecoration: 'none', color: 'white' }} href="#avaliacoes">Avaliações</a></button>
                    </div>
                </div>
            </div>

            <div id="descricao" className="card" style={{ width: '70%' }}>
                <div className="card-body">
                    <h2 className="card-title">Descrição</h2>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>

            <div id="avaliacoes" className="card" style={{ width: '70%' }}>
                <div className="card-body">
                    <h2 className="card-title">Avaliações</h2>
                    <div className="card-text">
                        <p>
                            <b>Usuario A</b><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <br />
                        <p>
                            <b>Usuario B</b><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}