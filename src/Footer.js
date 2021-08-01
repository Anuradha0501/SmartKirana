import React from 'react'
import './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="subscribe">
                <br></br>
                <h1>Subscribe Us For Latest Updates</h1>
                <br></br>
                <div className="subscribe__input">
                    <input type="text" className="subscribe__inputarea" />
                    <button className="Subscribe__button">Subscribe</button>
                </div>
                <br></br><br></br>
            </div>
            <div className="footerarea">
                <div className="footerarea__links">
                    <div className="footerarea__linkarea">
                        <h1>Get To Know Us</h1><br></br>
                        <a href="/">About Smart Kirana</a><br></br>
                        <a href="/">Our App</a><br></br>
                        <a href="/">Our Blog</a><br></br>
                        <a href="/">News</a>
                    </div>
                    <div className="footerarea__linkarea">
                        <br></br><h1>Connect With Us</h1><br></br>
                        <a href="/">Facebook</a><br></br>
                        <a href="/">Twitter</a><br></br>
                        <a href="/">Instagram</a><br></br>
                        <a href="/">YouTube</a><br></br>
                        <a href="/">LinkedIn</a>
                    </div>
                    <div className="footerarea__linkarea">
                        <h1>Partner With US</h1><br></br>
                        <a href="/">For Delivery</a><br></br>
                        <a href="/">For Shops</a><br></br>
                        <a href="/">Affiliate with us</a>
                    </div>                
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>© 2021 SmartKirana All Rights Reserved!</h3>
            </div>
        </div>
    )
}

export default Footer