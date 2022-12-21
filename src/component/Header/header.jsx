import React from "react";
import style from "./header.module.css"
import Logo from "../../assets/logo.png"
import {CgShoppingBag} from "react-icons/cg";


const Header =()=>{
    return(
        <div className={style.container}>
            <div className={style.logo}>
                <img src={Logo} alt=""/>
                <span>Amazon</span>
            </div>
            <div className={style.right}>
                <div className={style.menu}>
                    <ul className={style.menu}>
                        <li>Collection</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>

                    </ul>
                </div>


                <input placeholder={"search"} type="text" className={style.search}/>

                <CgShoppingBag className={style.cart}/>
            </div>
        </div>

    )
}
export default Header