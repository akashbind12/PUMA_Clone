import { useState } from "react";
import "../css/Account.css"
import {Link} from "react-router-dom"

export const Account = () => {
    
    const [name, setName] = useState(false);

    const [account, setAccount] = useState("login")
    const [regiser, setResgister] = useState("")

    return (
        <div className="account-page">
            <div className="my_account_heading">
                <div>MY ACCOUNT</div>
            </div>

            <div className="auth_div">
                <div className="left_div">
                    <div className="top">
                        <div className="login_div" id={`${account}`} onClick={() => {
                            setAccount("login")
                            setResgister("")
                        }}>Login</div>
                        <div className="signup_div" id={`${regiser}`} onClick={() =>{
                            setAccount("")
                            setResgister("register")
                        }}>Create Account</div>
                    <div className="line"></div>
                    <div className="line"></div>
                    </div>
                    
                    {account == "login" ?
                    <div className="login-input-div">
                        <div className="mid">
                        <input type="text" placeholder=" USER NAME" className="user_name" required={true} onChange={()=> setName(true)} />
                        <input type="text" placeholder=" PASSWORD" className="login_password" required="true" />
                        </div>

                        <div className="bottom">
                        <div className="check_box">
                            <div>
                            <input type="checkbox" />
                            </div>
                            <div>
                            <span>Remember me</span>
                            </div>
                        </div>
                        <div className="login_btn_div">
                            <div>
                            <Link to="/"><button  className="login_btn">Login</button></Link>
                            {/* disabled={!name} */}
                            </div>
                            <div>
                            <Link to="">FORGOTTEN YOUR PASSWORD?</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    :
                    <div className="login-input-div">
                        <div className="mid">
                        <input type="text" placeholder=" FIRST NAME" className="user_name" />
                            <input type="text" placeholder=" LAST NAME" className="login_password" />
                            <input type="text" placeholder=" EMAIL" className="login_password" />
                            <input type="text" placeholder=" PASSWORD" className="login_password" />
                        </div>

                        <div className="bottom">
                        <div className="login_btn_div">
                            <button className="login_btn" style={{width : "410px"}} onClick={() => {
                            setAccount("login")
                            setResgister("")
                         }}>CREATE ACCOUNT</button>
                        </div>
                        </div>
                    </div>
                    }

                </div>
                <hr className="hr"/>
                <div className="right_div">
                    <div className="right_top">
                    <div>
                        <h3>Check Order / Initiate return</h3>
                    </div>
                    <div>
                        See your order even if you are not a registered user. Enter the
                        order number and phone number.
                    </div>
                    </div>
                    <div className="right_mid">
                    <input type="text" placeholder=" ORDER NUMBER" />
                    <input type="text" placeholder=" ORDER PHONE" />
                    </div>
                    <div className="right_bottom">
                    <button>CHECK STATUS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}