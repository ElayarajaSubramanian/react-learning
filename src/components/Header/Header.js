import React from "react";
import Logo from "../../assets/logo.png"
import "./Header.module.css"
import { NavItems } from "../NavItems";
import Banner from "../../assets/banner.jpeg"

const Header = ({title}) => {
    return (
        <React.Fragment>
            <div className="flex justify-between w-[92%] mx-auto my-0 items-center">
                <img src={Logo} alt="logo" className="w-40"/>
                <ul className="flex gap-8">
                    {NavItems.map(nav => {
                        return <li key={nav}><a href="javascript;">{nav}</a></li>
                    })}
                </ul>
            </div>
            <img src={Banner} alt="banner" className="w-full h-[350px] object-cover"/>
        </React.Fragment>
    )
}

export default Header;