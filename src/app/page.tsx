'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {useRouter} from 'next/navigation';

export default function Home() {
  const router = useRouter()
  const login = () => {
    console.log('login');
    router.push('../login')
  }
  const register = () => {
    console.log('register');
    router.push('/register')
  }
  return (
    <main className={styles.main}>
      <button onClick={login}>login</button>
      <button onClick={register}>register</button>
    </main>
  )
}
