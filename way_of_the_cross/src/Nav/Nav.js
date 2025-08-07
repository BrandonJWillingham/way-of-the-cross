import React, { useEffect,useState } from 'react'
import logo2 from "../images/Way-of-The-Cross-logos_black.png"

export default function NavBar(){
    const [scrollTop,setScrollTop] = useState(0)
    const [contentHeight, setContentHeight] = useState(0);
    
    const hexConvert = (num)=>{
        let returning = []
        if(num < 80) return [0,0]
        if (num > 256 ) return ["F","F"];
        const arr=  [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        returning[0] = arr[Math.floor(num/16)];
        returning[1] = arr[ Math.floor(num%16)];
        return returning
    }

    useEffect(() => {
        const measureContentHeight = () => {
            setContentHeight(document.documentElement.scrollHeight);
        };
    
        measureContentHeight(); // Initial measure
        window.addEventListener('resize', measureContentHeight);
    
        return () => window.removeEventListener('resize', measureContentHeight);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrollTop(window.scrollY);
    
        const navBar = document.getElementsByClassName("navBar")[0];
        const logo = document.getElementsByClassName("logo")[0];
    
        const [hex1, hex2] = hexConvert(scrollTop);
    
        if (contentHeight > window.innerHeight + 200) { // ← buffer room
            navBar.setAttribute("style", `background-color: #ded7cd${hex1}${hex2}`);
            logo.setAttribute("style", `opacity: ${Math.min(scrollTop / 100, 1)}`);
        } else {
            navBar.setAttribute("style", `background-color: #ded7cd`);
            logo.setAttribute("style", `opacity: 1`);
        }
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop, contentHeight]);
    

    return (
        <section className='navBar' style={{width:"100%"}}>
            <div style={{width:"50%"}}>
                <a href='/'>
                    <div className='image-container' >
                        <img src={logo2} alt='way of the cross logo' className='logo'/>
                    </div>
                </a>
            </div>

        </section>
)
}


{/* <a href='/stream ' style={{textDecorationLine:'none'}} className='flex contentCenter'><button > <p>watch online</p> </button>  </a>
 <a href='/about' className='flex contentCenter' style={{textDecorationLine:'none'}}><button>About</button></a> */}
