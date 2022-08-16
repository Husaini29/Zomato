import React,{Component} from "react";
import './footer.css';

const Footer = () =>{
    return(
        <React.Fragment>
             <hr/>
         <footer>
            <div className="footer">
                <h2>Zomato</h2>
                <ul className="company">
                    <li className="li">Company</li>
                    <li>Who We Are</li>
                    <li> Blog</li>
                    <li>Investor Relations</li>
                    <li>Contact</li>
                    <li>Report Fraud</li>
                </ul>
                <ul className="add-rest"> 
                    <li className="li">For Resturant</li>
                    <li>Add Resturant</li>
                </ul>
                <ul className="for-you">
                    <li className="li">For You</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Security</li>
                    <li>Site Map</li>
                </ul>
                <div className="links">
                    <h2>Social Links</h2>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-youtube"></a>
                </div>
            </div>
                <hr/>
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</p>
            </footer>
        </React.Fragment>
    )
}

export default Footer;