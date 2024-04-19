"use client"
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import styles from "./ShoppingCart.module.sass"
import { ShoppingCartItem } from "./ShoppingCartItem";
export default function ShoppingCart(){


    const {cart} = useShoppingCart()
    const [isBuying, setIsBuying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = cart.length > 0;
  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen)
    }
  };


    return <button className={styles.ShoppingCart} >
        <span className={styles.ShoppingCart_counter} >{cart.length}</span>
        <FaShoppingCart />
        {isOpen && hasItems && (
        <div className={styles.ShoppingCart__items} >
          {
            cart.map(item => (<ShoppingCartItem key={item.id} item={item} />))
          }
          <button className={styles.ShoppingCart__buyButton} disabled={isBuying}>
            Buy
          </button>
        </div>)}
    </button>
}