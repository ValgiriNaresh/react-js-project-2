import st from "./nav.module.css"
import React from "react"
function Navbar(){

    return(

        <>
        <div className={st.nav}>
            <div className={st.logo} >
            <a href="a">DELUX HOTEL</a>
            </div>

            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Category</a></li>
            <li><a href="#">Rooms</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blogs</a></li>
        </ul>

        <div className={st.nav_btns}>
            <button>BookNow</button>
        </div>

        </div>

        </>

    )
}
export default Navbar;