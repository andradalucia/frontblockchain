import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'
import SearchBar from './SearchBar'

export default function Body() {
  return (
    
        <div className={styles.body}>
          <div className='container adjustment'>


            <section className="container impartial">

              <div className="row content2">

                  <div className="col text-box align-self-start">
                    
                    <h2>Welcome <br/> This is my <span>Project</span></h2><br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Sit, odio, aperiam nulla corporis rerum earum iure maxime incidunt odit illo atque voluptates voluptate iusto quod excepturi tempore nemo illum at.</p>
                    
                    <br/>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Sit, odio, aperiam nulla corporis rerum earum iure maxime incidunt odit illo atque voluptates voluptate iusto quod excepturi tempore nemo illum at.</p>
                  
                  </div>



                  <div className="col img-box align-self-end">
                      <img src="http://localhost:3000/images/car.gif" alt="Sorry! Image not available at this time" className="etherum-picture" />
                  </div>

              </div>
            </section>



            <div className={styles.searchFunction}>
              <div className="SrchFunction">
              <div className='row'> 
                <h1 className='col search-function-header'>Search function</h1>
                <br/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                          Sit, odio, aperiam nulla corporis rerum earum iure maxime incidunt odit illo atque voluptates voluptate iusto quod excepturi tempore nemo illum at.</p>
                <br/>
              </div>
            </div>
          

            <section className="impartial">
                  <SearchBar/>
            </section>
          </div>
        </div>
    </div>
  )
}