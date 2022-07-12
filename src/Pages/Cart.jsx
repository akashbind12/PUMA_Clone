import "../css/Cart.css"
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';


export const Cart = () => {

    return (
        <div>
            <div id="sub">
            <h1>MY SHOPPING CART<span id="cart-count">(1)</span></h1>
                <div id="easy-returns">
                    <p>
                        <i className="fas fa-undo"></i> Free and easy returns on all orders.
                    </p>
                </div>

                <div id="cart-items">
                    <div id="item-design">
                    <div id="cart-image">
                        <img
                        id="item-image"
                        src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/586676/58/mod01/fnd/IND/fmt/png/Essentials-Regular-Fit-Men's-Jersey-Polo"/>
                    </div>
                    <div id="cart-item-details">
                        <h3>Essentials Regular Fit Men's Jersey Polo</h3>
                        <p className="black">Color:<span> Puma Royal </span></p>
                        <p className="black">Size:<span> L</span></p>
                        <p className="black">Style_Number:<span> 586676_58</span></p>
                        <select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        </select>
                    </div>
                    <div id="cart-item-price">
                        <p id="original-price">₹1,299</p>
                        <div id="cart-icons">
                        <AiOutlineEdit></AiOutlineEdit>
                        <RiDeleteBinLine></RiDeleteBinLine>
                        </div>
                    </div>
                    </div> 

                <div id="cart-details">
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                    <div id="Promocode">Apply a Promo Code
                    <div className="Enterpromo">Enter Promo Code</div>
                    <div id="js-promo-box" className="promo-box">
                        <input type="text" />
                        <button id="promo-button">Apply</button>
                    </div>
                    </div>
                    <div id="prices">
                    <p className="sub-total">
                        SubTotal<span className="price-span"> ₹1,039 </span>
                    </p>

                    <p className="sub-total">
                        Shipping costs<span className="price-span Shipping">₹0</span>
                    </p>
                    <div className="line"></div>
                    </div>

                    <p className="grand-total">
                    <b>Grand Total</b><span id="tax"> Prices include GST</span>
                    <span className="price-span grand_total"><b>₹1,039</b></span>
                    </p>

                    <div id="cart-checkout">
                        <p id="checkout"><b>CHECKOUT</b></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}