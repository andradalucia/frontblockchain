import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'
import Footer from './Footer'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
import Body from './Body'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Blockchain Web App</title>
      </Head>
        <NavBar/>
          <Body/>
        <Footer/>
    </div>
  )
}
