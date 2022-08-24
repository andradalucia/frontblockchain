import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'

export default function SearchBar() {
    return (
            <div className={styles.search}>
                    <div className="search-box">
                        <input className="search-txt" type="text" placeholder="Wallet Adress"/>
                        <button   className="search-btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                <div id="nfts" className='flex gap-7 flex-wrap'></div>

                <template id="nft template">

                    <section>
                            

                    </section>

                </template>


            </div>
    )
}
