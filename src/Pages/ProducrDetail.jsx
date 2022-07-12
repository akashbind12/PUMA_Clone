import "../css/ProductDetail.css"


export const ProductDetails = () => {

    return (
        <div className="Product-detail-page">
            <div className="product_nav">
                <ul className="ul">
                    <li>
                    Home
                    <div className="items_dot">
                        <span className="item-separator-dot"></span>
                    </div>
                    </li>
                    <li>
                    Women
                    <div className="items_dot">
                        <span className="item-separator-dot"></span>
                    </div>
                    </li>
                    <li>
                    Sports
                    <div className="items_dot">
                        <span className="item-separator-dot"></span>
                    </div>
                    </li>
                    <li>
                    Shoes
                    <div className="items_dot">
                        <span className="item-separator-dot"></span>
                    </div>
                    </li>
                    <li className="last_list">Velocity NITRO Men's Running Shoes</li>
                </ul>
            </div>

            <div className="main-body-of-prod-data">
                <div className="product-details-section">
                    {/* <!-- this is for product images part  start here--> */}
                    <div className="left-product-imgs">
                    <img
                        className="product-img1"
                        src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194596/06/sv01/fnd/PNA/fmt/png/Velocity-NITRO-Men's-Running-Shoes"
                        alt="There must be a issue on server image not upload automaticly"
                    />
                    <div className="prod-mid-img">
                        <img
                        className="img-size product-img2"
                        src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194596/06/fnd/PNA/fmt/png/Velocity-NITRO-Men's-Running-Shoes"
                        alt="There must be a issue on server image not upload automaticly"
                        />
                        <img
                        className="img-size product-img3"
                        src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194596/06/bv/fnd/PNA/fmt/png/Velocity-NITRO-Men's-Running-Shoes"
                        alt="There must be a issue on server image not upload automaticly"
                        />
                    </div> 
                    
                    </div>
                    {/* <!-- end here --> */}

                    {/* <!-- this part for price of product start here --> */}
                    <div className="rigth-product-data">
                    <div className="rigth-product-data-div">
                        <div className="left-prod-heading">
                        <h1 className="prod-name">Velocity NITRO Men's Running Shoes</h1>
                        </div>
                        <div className="prod-price">
                        <span className="text-danger">₹4,999</span>
                        </div>
                        <div className="strick-price">
                        <span className="text-secondary">₹4,99</span>
                        </div>
                        <p style={{
                            color :"gray",
                            fontSize : "14px"
                        }}>(Prices include GST)</p>
                        {/* <!-- end here-->

                        <!-- this part for product design image start here--> */}

                        <hr className="hr-line" />
                          <p className="redline">Additional 5% off on prepaid orders</p>
                        <hr className="hr-line" />

                        <div className="product-variation-container">
                        <h3 className="prod-variation-lable">Size</h3>
                        </div>

                        <ul className="prod-size-cate">
                        <li className="design-size">
                            <p className="p-size">S</p>
                        </li>
                        <li className="design-size">
                            <p className="p-size">M</p>
                        </li>
                        <li className="design-size">
                            <p className="p-size">L</p>
                        </li>
                        </ul>

                        <div className="quantity-add-to-card">
                        <div className="quantity-div">
                            <select name="" id="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                        </div>
                        <div className="add-to-cart-btn">
                            <button className="cart-btn">Add to Cart</button>
                            <button className="cLook-btn">Complete the Look</button>
                            <div className="wish-list">
                            <button className="wish-list-btn">
                                <img
                                className="heart-img"
                                src="https://e7.pngegg.com/pngimages/799/396/png-clipart-heart-gold-heart-icon-love-metal-thumbnail.png"
                                alt=""
                                />
                                <span>Add to wishlist</span>
                            </button>
                            </div>
                        </div>
                        </div>
                        <hr className="hr-line" />

                        <div className="shipping">
                        <img
                            className="shpping-img"
                            src="https://cdn3.iconfinder.com/data/icons/glypho-shopping-and-ecommerce/64/truck-fast-delivery-speed-128.png"
                            alt=""
                        />
                        <span>This item ship free*</span>
                        </div>

                        <hr className="hr-line" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}