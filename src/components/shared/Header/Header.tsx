import Link from "next/link"
import styles from "./Header.module.sass"
export default function Header(){
   return <header>
    <nav className={styles.Header} >
      <Link href="/" >Inicio</Link>
      <Link href="/store" >Tienda</Link>
    </nav>
  </header>
}