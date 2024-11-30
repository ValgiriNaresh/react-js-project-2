import React from "react";
import h from "./about.module.css"
import aboutImg from './../../assets/aboutimg.jpg'

function About(){
    return(
        <div className={`${h.about_about}about`}>
            <div className={h.about_img}>
                <img src={aboutImg} alt="about-img" />
            </div>
            <div className={h.about_content}>
                <small className="small">The Deluxe Hotel</small>
                <h2 className="about_title">Where Elegance Meets <span>Excellence</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore officia minima, totam cum atque consequatur fuga, numquam delectus dolorum similique earum hic ratione tenetur, id enim est sint odit?</p>
                    <div className={h.card}>
                    <p style={{fontSize:"10px",marginLeft:"562px"}}>260+ <span style={{fontSize:"10px",fontFamily:"cursive"}}>Awrds Wins</span></p>
                    <p style={{fontSize:"10px",marginLeft:"42px"}}>260k <span style={{fontSize:"10px",fontFamily:"cursive"}}>Visitors Visit</span></p>
                    <p style={{fontSize:"10px",marginLeft:"42px"}}>150k+ <span style={{fontSize:"10px",fontFamily:"cursive"}}>Events</span></p>
                    </div>
                
            </div>
        </div>
    )
}

export default About;