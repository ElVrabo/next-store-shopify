import Link from "next/link"
import styles from "./Header.module.sass"
export default function Header(){
   return <header>
    <nav className={styles.Header} >
      <Link href="/" style={{textDecoration:"none",color:"violet"}} >Inicio</Link>
      <Link href="/store"  style={{textDecoration:"none",color:"violet"}}
       >Tienda</Link>
    </nav>
  </header>
}