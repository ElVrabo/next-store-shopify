import Link from "next/link"
import styles from "./Header.module.sass"
import { cookies } from "next/headers"
import { validateAccesToken } from "app/utils/auth/validateAccesToken"
import { ShoppingCart } from "../ShoppingCart"
export default async function Header(){
const customer = await validateAccesToken()


   return <header>
    <nav className={styles.Header} >
      <Link href="/" style={{textDecoration:"none",color:"violet"}} >Inicio</Link>
      <Link href="/store"  style={{textDecoration:"none",color:"violet"}}
       >Tienda</Link>
       {customer?.firstName ? (<p style={{color:"violet", marginTop:"-0px"}} >Hola: {customer.firstName}</p>) : <Link href="/login" style={{textDecoration:"none", color:"violet"}} >Login</Link>}
       <ShoppingCart/>
    </nav>
  </header>
}