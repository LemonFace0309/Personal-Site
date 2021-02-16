import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <footer></footer>
    </>
  )
}
