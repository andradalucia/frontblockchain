import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'
import Web3 from 'web3'
import { useState } from 'react'
import swal from 'sweetalert'

 const NavBar = () => {
    const [error, setError] = useState('')
    let web3;
    // metamask here
    const connectWalletHandler = async () => {
        
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
            try{
                await window.ethereum.request({method: "eth_requestAccounts"})
                web3 = new Web3(window.ethereum)
            }
            catch(err){
                setError(err.message)
                swal({
                    title: err.message,
                    text: "Please, connect to Metamask!",
                    icon: "error",
                    button: "X",
                  });
                  changeStyle();
            }
        } else {
                console.log("Please install Metamask")
            }
    }

    return (
        <div>
        
        <div>
            <nav className = {styles.navbar}>
                <div className="container">
                    <div className="navbar-elements">
                        <h1 className="navbar-brand">Blockchain Project</h1>
                        <button onClick={connectWalletHandler} className="button is-primary navbar-connect">Connect Wallet</button>
                    </div>
                </div>
            </nav>
            
        </div>

        </div>
    )
}


function changeStyle(){
    
    /* Icon */
    document.getElementsByClassName("swal-icon--error")[0].style.borderColor='#51eaa5';  
    document.getElementsByClassName("swal-icon--error__line")[0].style.backgroundColor='#51eaa5';
    document.getElementsByClassName("swal-icon--error__line")[1].style.backgroundColor='#51eaa5';

    /* Change buton style */
    document.getElementsByClassName("swal-button swal-button--confirm")[0].style.backgroundColor='#278355';

    /* Background colors */
    document.getElementsByClassName("swal-modal")[0].style.backgroundColor='#353535';
    document.getElementsByClassName("swal-modal")[0].style.border="thick solid";

    /* Change text color */
    document.getElementsByClassName("swal-title")[0].style.color='#f8fafa';
    document.getElementsByClassName("swal-text")[0].style.color='#f8fafa';

    /* Change background to become darker */
    document.getElementsByClassName("Home_body__XYSzx")[0].style.backgroundBlendMode='darken';
    
}

export default NavBar