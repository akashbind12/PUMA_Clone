import { useEffect } from "react"
import MultipleSelectCheckmarks from "../components/selectbar"
import "../css/Mens.css"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import CircularIndeterminate from "../components/Loading"

export const Womens = () => {

    const location = useLocation();
    const [womensdata, setWomensdata] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [sort, setSort] = useState([])

    const [filter, setFilter] = useState({
        Category: [],
        ProductType: [],
        Price: [],
        Gender: [],
        Size: [],
        Color: [],
        order : []
    })
    
    useEffect(() => {
        getdata()
    }, [location.search])
    

    useEffect(() => {
        setSearchParams(filter, { replace: true })
      },[sort,setSearchParams,filter])

    const getdata = () => {
        setLoading(true)
        axios.get(`https://puma-backend-new.onrender.com/womens${location.search}`)
            .then(function (response) {
              setLoading(false)
              console.log(response.data);
              setWomensdata(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleSort = (value) => {
        setFilter({...filter, order : value})
    }

    

    const Categories = ["Apparel","Footwear"]
    const ProductType = ["Casual Shoes","Running Shoes","Sneakers","T-Shirts", "Pants","Shorts","Suit"]
    const Price = ["1000-3000", "3000-5000", "5000-7000","7000-12000"]
    const Gender = ["Female", "Male", "Unisex"]
    const Size = ["Small", "Medium", "Large"]
    const Color = ["Black", "Gray","Pink","Blue", "Green", "Yellow", "White","Orange"]
    const Sortby = ["Price Low To High","Price High To Low","Newest"]

    return (
        <div className="mens-page">
            <div className="path">
                <div>Home</div>
                <div>.</div>
                <div>Womens</div>
                <div>.</div>
                <div className="new-arrival">New Arrivals</div>
            </div>
            <h1 className="heading">WOMEN'S NEW ARRIVALS</h1>
            <p className="para">Discover the latest trends of men's sports clothing, shoes and accessories and shop PUMA's new arrivals collection for men. Shop the latest styles for your athleisure look now and make the most out of your training. PUMA sports products combine the high quality of a traditional company with the innovative spirit of a trend-conscious brand. "Always new, always better," is the motto. High-tech materials and the latest findings in sports science are reflected in the newest arrivals.</p>
            <div className="filters-div">
                <div className="filers-line">
                    <div className="bar-left">
                    <MultipleSelectCheckmarks  setState={setFilter} state={filter} title={"Category"} names={Categories}></MultipleSelectCheckmarks>
                    <MultipleSelectCheckmarks setState={setFilter} state={filter} title={"ProductType"} names={ProductType}></MultipleSelectCheckmarks>
                    <MultipleSelectCheckmarks setState={setFilter} state={filter} title={"Price"} names={Price}></MultipleSelectCheckmarks>
                    <MultipleSelectCheckmarks setState={setFilter} state={filter} title={"Gender"} names={Gender}></MultipleSelectCheckmarks>
                    <MultipleSelectCheckmarks setState={setFilter} state={filter} title={"Size"} names={Size}></MultipleSelectCheckmarks>
                    <MultipleSelectCheckmarks setState={setFilter} state={filter} title={"Color"} names={Color}></MultipleSelectCheckmarks>
                    </div>
                    <div className="bar-right">
                        {/* <MultipleSelectCheckmarks title={"Sortby"} names={Sortby}></MultipleSelectCheckmarks> */}
                        <select name=""  onChange={(e) => handleSort(e.target.value)}>
                            <option value="desc">Price High To Low</option>
                            <option value="asc">Price Low To High</option>
                            <option value="">Newest</option>
                         </select>
                    </div>
                </div>
            </div>
            
            {loading ? <div className="loading"><CircularIndeterminate /></div>
                :
                <div className="product-div">
                    {womensdata?.map((e, i) => {
                        return (
                            <Link to={`/womens/${e._id}`} style={{ textDecoration: 'none' }} key={i} >
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

                </div>}
        </div>
    )
}