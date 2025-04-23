import Header from "@/components/Header";
import Product from "@/components/Product";
import styles from '@/styles/Representantes.module.css'


export default function Representantes() {
  return (
    <>
      <Header role="representante" title="Busca e Visualização do Produto" />

        <div className={styles.container}>
            <div className={styles.productsContainer}>
                <Product 
                    key={1}
                    titleProduct="S24 Plus" 
                    category="Eletronicos" 
                    subCategory="Celulares"
                    codeProduct=""
                    manufacturer="Samsung"
                    note={10}></Product>
                <Product 
                    key={1}
                    titleProduct="S24 Plus" 
                    category="Eletronicos" 
                    subCategory="Celulares"
                    codeProduct=""
                    manufacturer="Samsung"
                    note={8.3}></Product>
                <Product 
                    key={1}
                    titleProduct="S24 Plus" 
                    category="Eletronicos" 
                    subCategory="Celulares"
                    codeProduct=""
                    manufacturer="Samsung"
                    note={8.3}></Product>
                <Product 
                    key={1}
                    titleProduct="S24 Plus" 
                    category="Eletronicos" 
                    subCategory="Celulares"
                    codeProduct=""
                    manufacturer="Samsung"
                    note={8.3}></Product>
                <Product 
                    key={1}
                    titleProduct="S24 Plus" 
                    category="Eletronicos" 
                    subCategory="Celulares"
                    codeProduct=""
                    manufacturer="Samsung"
                    note={8.3}></Product>
                <Product 
                    key={1}
                    titleProduct="S24 Plus" 
                    category="Eletronicos" 
                    subCategory="Celulares"
                    codeProduct=""
                    manufacturer="Samsung"
                    note={8.3}></Product>
                <Product 
                    key={1}
                    titleProduct="S24 Plus" 
                    category="Eletronicos" 
                    subCategory="Celulares"
                    codeProduct=""
                    manufacturer="Samsung"
                    note={10}></Product>
            </div>
        </div>
    </>
  );
}