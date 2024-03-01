import styles from "./Hero.module.sass"

export function Hero(){
    return (
        <section className={styles.Hero} >
            <h1>Future world</h1>
            <h2>Empowering your tomorrow, today!</h2>
        </section>
    )
}