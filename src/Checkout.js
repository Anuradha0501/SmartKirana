import React from 'react'
import './css_files/Checkout.css'
import Subtotal from './Subtotal'

function Checkout(){
    return(
        <div className="checkout">
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">Your shopping basket is empty</h2>
                    <p>Your have not items in your basket. Buy one.</p>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}
export default Checkout