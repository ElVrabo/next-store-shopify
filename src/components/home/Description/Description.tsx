import Image from "next/image"
import styles from "./Description.module.sass"
export function Description(){
    
    return (
        <section className={styles.Description} >
            <Image src="/images/description.jpeg" alt="products marketplace" priority={false} quality={30}  width={300} height={300} />
            <div className={styles.Description_text} >
                <h2>Bring the future today</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui illo amet ipsa reprehenderit neque cum, iusto incidunt totam eos asperiores repellendus libero perspiciatis accusamus quos expedita modi adipisci delectus labore?</p>
            </div>
            
        </section>
    )
}