"use client"
import styles from "./LoginForm.module.sass";
import { handleLogin } from "app/actions";

export const LoginForm = () => {

  const hanldeSubmit = async (event)=>{
    const formData = new FormData(event.target)
event.preventDefault()
await handleLogin(formData)
  }
  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>Login</h1>
      <form onSubmit={hanldeSubmit} className={styles.NewAccountForm__form}>
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  );
}