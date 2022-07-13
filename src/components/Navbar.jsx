import "../css/Navbar.css"
import { FiHeart } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <div className="navcontainer">
            <div className="nav_section">
                    <div className="nav_logo">
                    <Link to="/"><img className="nav_logo_img" src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1970-1974.png" alt="" /></Link>
                    </div>
                <div className="nav_catgories">
                    <div>New Arrivals</div>
                    <div>Womem</div>
                    <Link to="/mens"><div className="links">Men</div></Link>
                    <div>Kids</div>
                    <div>Collabrations</div>
                    <div>Sport</div>
                    <div>Outlet</div>
                </div>
            </div>
            <div className="nav_icon">
                <div className="nav_search_icon"><FiSearch></FiSearch></div>
                <div className="nav_search">
                    <input className="nav_input" type="text" placeholder="SEARCH PUMA.COM" />
                </div>
                <div className="navbar-icons">
                    <div className="navbar-icons-div" ><FiHeart></FiHeart></div>
                    <Link to="/cart"><div className="navbar-icons-div"><BsCart3></BsCart3></div></Link>
                    <div className="navbar-icons-div"><VscAccount></VscAccount></div>
                </div>
            </div>
        </div>
    )
}