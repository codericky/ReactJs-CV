import React from "react"
import "./assets/style.css"
const Header = () => {
    return(
        <div class="">
            <nav class="navigasi">
                <ul class="icon">
                <li class="logo">logo</li>  
                <ul class="list-menu">
                    <a href="#home"><li class="menu">Home</li></a>
                    <a href="#about"><li class="menu">About</li></a>
                    <a href="#project"><li class="menu">Project</li></a>
                    <a href="#project"><li class="contact">Contact</li></a>
                    </ul>
                </ul>
            </nav>
        </div>
    )
}

export default Header