'use client'
import Image from 'next/image'
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
    <main >
      <button onClick={login}>login</button>
      <button onClick={register}>register</button>
    </main>
  )
}
