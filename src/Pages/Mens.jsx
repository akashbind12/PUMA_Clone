import { useEffect } from "react"
import MultipleSelectCheckmarks from "../components/selectbar"
import "../css/Mens.css"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom";


export const Mens = () => {

    const [mensdata, setMensdata] = useState([])
    
    useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get('http://localhost:8080/Mens')
          .then(function (response) {
            //   console.log(response.data);
              setMensdata(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const Categories = ["footewesr", "accossries", "appreal"]
    const ProductType = ["Casual Shoes", "T-Shirts", "Pants", "Gloves", "Cricket"]
    const Price = ["Less Than 1000", "1000-3000", "3000-5000", "5000-7000"]
    const Gender = ["Female", "Male", "Unisex"]
    const Size = ["Low", "Medium", "High"]
    const Color = ["Black", "gray", "Blue", "Green", "Red", "Orange", "Yellow", "White"]
    const Sortby = ["Price Low To High","Price High To Low","Newest"]

    return (
        <div className="mens-page">
            <div className="path">
                <div>Home</div>
                <div>.</div>
                <div>Men</div>
                <div>.</div>
                <div className="new-arrival">New Arrivals</div>
            </div>
            <h1 className="heading">MEN'S NEW ARRIVALS</h1>
            <p className="para">Discover the latest trends of men's sports clothing, shoes and accessories and shop PUMA's new arrivals collection for men. Shop the latest styles for your athleisure look now and make the most out of your training. PUMA sports products combine the high quality of a traditional company with the innovative spirit of a trend-conscious brand. "Always new, always better," is the motto. High-tech materials and the latest findings in sports science are reflected in the newest arrivals.</p>
            <div className="filters-div">
                <div className="filers-line">
                    <div className="bar-left">
                        <MultipleSelectCheckmarks title={"Category"} names={Categories}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"ProductType"} names={ProductType}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"Price"} names={Price}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"Gender"} names={Gender}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"Size"} names={Size}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"Color"} names={Color}></MultipleSelectCheckmarks>
                    </div>
                    <div className="bar-right">
                        {/* <MultipleSelectCheckmarks title={"Sortby"} names={Sortby}></MultipleSelectCheckmarks> */}
                        <select name="" id="">
                            <option value="">Price High To Low</option>
                            <option value="">Price Low To High</option>
                            <option value="">Newest</option>
                         </select>
                    </div>
                </div>
            </div>

            <div className="product-div">
                {mensdata?.map((e,i) => {
                    return (
                        <Link to={`/mens/${e.id}`} style={{ textDecoration: 'none' }} key={e.id} >
                        <div className="product-div-div" key={i}>
                            <div className="prod-img">
                                <img src={e.img} alt="img" />
                            </div>
                            <div className="prod-title">
                                <div className="title">
                                    <div>{e.title}</div>
                                    <div>Additional 5% off on prepaid orders</div>
                                </div>
                                <div className="price">₹{e.price}</div>
                            </div>
                        </div> </Link>   
                    )
                })}

            </div>
        </div>
    )
}