import React from "react";

function Header() {
    return <header>
        <h4>
            Identify
        </h4>
        <div>
            <nav className="nav_link">
                <a href="/app">Mint</a>
                <a href="/app">About us</a>
                <a href='/app'>White paper</a>
            </nav>
            <nav className="nav_btn">
                <button className="login">Login</button>
                <button className="getStarted">Get started</button>
            </nav>
        </div>
    </header>
}

export default Header