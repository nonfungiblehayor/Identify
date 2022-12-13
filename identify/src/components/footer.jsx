import React from "react";
import FooterLink from "./footer-links";
import twitter from '../images/twitter.svg'
import github from '../images/github.svg'

function Footer() {
    return <footer>
        <div className="footer-div-1">
            <h3>Identify</h3>
            <nav>
                <FooterLink h5='Ecosystem' links='Ethereum' links2='Use cases'/>
                <FooterLink h5='Resources' links='Documentation' links2='Guides'/>
                <FooterLink h5='Company' links='Home' links2='About'/>
                <FooterLink h5='Legal' links='Privacy policy' links2='Terms of services'/>
            </nav>
        </div>
        <div className="footer-div-2">
            <span>Copyright @2022 IDWEB. All rights preserved</span>
            <nav>
            <a href='twitter.com/0x_founder'><img src={twitter} alt='twitter-logo'></img></a>
            <a href="github.com/nonfungiblehayour"><img src={github} alt='github-logo'></img></a>
            </nav>
        </div>
    </footer>
}

export default Footer