import banner from './Images/groceryimagebg.jpg';
import oils from './Images/oil.jpg'
import pulses from './Images/pulses.jpg'
import flours from './Images/flours.jpg'
import './css_files/Home.css'
import Product from './Product'

function Home(){
    return(
        <div className="home">
            <img className="home__image" src={banner} 
            alt=""/>
            <div className="home__heading">
                <h1>Shop By Category</h1>
            </div>
            <div className="home__row">
                <Product
                    id="121314"
                    title="Oils"
                    price={230}
                    rating={4}
                    image={oils}
                />
                <Product
                    id="121314"
                    title="Pulses"
                    price={200}
                    rating={4}
                    image={pulses}
                />
                <Product
                    id="121314"
                    title="Flours"
                    price={250}
                    rating={4}
                    image={flours}
                />
               
            </div>
        </div>
    )
}
export default Home