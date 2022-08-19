import React from "react";
import { FiSearch } from "react-icons/fi"
import { AiOutlineMenu } from "react-icons/ai"

function Header() {
    return (
        <>
            <div className="header">
                <div className="input-container">
                    <button><FiSearch /></button>
                    <input placeholder="search " className="header-input" />
                </div>
                <div className="menu-icon">
                    <AiOutlineMenu />
                </div>
            </div>
        </>
    )
}
export default Header