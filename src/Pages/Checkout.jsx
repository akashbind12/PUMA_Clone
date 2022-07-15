import "../css/Checkout.css"

export const Checkout = () => {
    
    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-left">
                    <h1>CHECKOUT</h1>
                    <h2>Signin for faster checkout experience</h2>
                    <div className="sign-btn" > sign in</div>
                    <div className="addresses">
                        <h4 style={{fontWeight : "400"}}> ADDRESSES</h4>
                    </div>
                    <form id="checkout-input">
                        <input name="firstName" type="text" placeholder="First name" />
                        <input name="lastName" type="text"placeholder="Last name" />
                        <input name="pin" type="number"placeholder="Post code" />
                        <input name="Address1"  type="text"placeholder="Address1" />
                        <input name="Address2" type="text"placeholder="Address2"/>
                        <input name="city" type="text"placeholder="city"/>
                        <input name="state" type="text"placeholder="State" />
                        <input name="Country" type="text"placeholder="Country" />
                        
                        <div id="checkout-addinfo"> 
                            <p >Enter Contact Info (for Order Invoice)</p>
                            <input name="email" type="text"placeholder="Email" />
                            <input name="mob" type="text"placeholder="Number" />
                            <input name="mob2" type="text"placeholder="Additional Number" />
                        </div>
                        <input  type="submit" value="Place Order" />
                    </form>
                </div>

                {/* ----------rigt part----------- */}
                <div className="checkout-right">
                    <h2>Order Details(1) </h2>
                    <div className="line"></div>
                    <div className="card">
                        <img style={{Height : "70%"}} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_100,h_100/global/380435/04/sv01/fnd/IND/fmt/png/Electron-E-Unisex-Shoes"
                        alt="" />
                        <div className="detail">
                        <div className="detail-left">PUMA Serve Pro Lite Unisex Shoes</div>
                        <div className="detail-right">
                            <p>₹2,699</p>
                        </div>
                        </div>
                    </div>
                    <div className="card-below">
                        <div className="card-left"></div>
                        <div className="card-right">
                            <p>EAN : 4063699564136 </p>
                            <p> Puma White-Balsam Green-Puma Team Gold</p>
                            <p>Size:11</p>
                            <select  name="" id="selt"></select>
                            <div className="edit">
                                <span className="editing" >Edit</span>
                                <span className="editing">Remove</span>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div> 
                    <div className="promo">
                        <h2>Apply a Promo Code</h2>
                        <p>Enter a Promo Code</p>
                        <span><input style={{padding : "0.6rem 0.1rem" }} type="text" /><button className="Apply-btn">Apply</button></span>
                    </div>
                    <div className="total">
                        <div className="subtotal">
                            <p>SubTotal</p>
                            <p>₹ 2699</p>
                            </div>
                            <div className="subtotal">  
                            <p>Shipping costs</p>
                            <p>₹0</p>
                            </div>
                            <div className="subtotal">
                            <h4>Grand Total</h4>
                            <h4>₹2699</h4>
                        </div>
                    </div>  
                </div>
          
            </div>
        </div>
    )
}