import react from "react";

import logo from "../images/Way-of-The-Cross-logos_white.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from "@fortawesome/free-solid-svg-icons";

export default function Footer(){

    return (
        <section className="footer" style={{paddingBottom:20}}>
            <div className="logoSection">

                <div className="footerLogo">
                    <img src={logo} alt="way of the cross logo footer"/>
                </div>

                <hr style={{width:"100% "}}/>
                <div className="copyright" style={{}}>
                    <p style={{fontSize:"10px",marginBottom:"0"}}>The Way of the Cross Church</p>
                    <FontAwesomeIcon icon={faCopyright} style={{color:"#ffffff"}}/>
                    
                </div>
                <p style={{fontSize:"10px", color:"white", textAlign:"left"}}>
                    124-126 W 136th St
                    <br/> New York, NY, 10030
                </p>
            </div>
            
            
        </section>
    )
}