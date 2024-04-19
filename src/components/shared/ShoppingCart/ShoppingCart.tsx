"use client"
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { FaShoppingCart } from "react-icons/fa";
// import { useState } from "react";
import styles from "./ShoppingCart.module.sass"
export const ShoppingCart = ()=>{
 
    const {cart} = useShoppingCart()
    return <button className={styles.ShoppingCart} >
        <span className={styles.ShoppingCart_counter} >{cart.length}</span>
        <FaShoppingCart />
    </button>
}