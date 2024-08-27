import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import lunar from "./images/lunar.png"
import sun from "./images/sun.png"
import "./index.css"

const Layout = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.style.backgroundColor = "rgb(29,29,29)";
        } else{
            body.style.backgroundColor = "rgb(164, 164, 164)";
        }
        
    }, [isDarkMode])
    return (
        <div>
            <header>
                <img onClick={() => setIsDarkMode(!isDarkMode)} className="modebtn" src={isDarkMode ? lunar : sun} alt="dark button"/>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;