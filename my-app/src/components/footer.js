import React, { Component } from 'react';
import FooterDiv from './footer-div';
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'

class Footer extends Component {
    render() {
        return <footer>
          <div className='footer-div-1'>
            <div className='idWeb'><p>Identify</p></div>
            <FooterDiv head='Ecosystem' link='Polygon' link2='Use-case'/>
            <FooterDiv head='Resources' link='Documentation' link2='Guides'/>
            <FooterDiv head='Company' link='Home' link2='About'/>
            <FooterDiv head='Legal' link='Privacy Policy' link2='Terms of Service'/>
          </div>
          <div className='footer-div-2'>
            <p>Copyright @2022 IDENITFY. All rights preserved</p>
            <div>
            <a href='https://github.com/nonfungiblehayor/identify'><img src={github} alt='github-logo'></img> </a>
            <a href='https://twitter.com/0x_founder'><img src={twitter} alt='twitter-logo'></img> </a>
            </div>
          </div>
        </footer>
    }
}

export default Footer;