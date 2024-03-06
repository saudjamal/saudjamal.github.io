import React from 'react';
import CarousalCss from './StylingFolder/Carousal.module.css';
import Image3 from './Images/Carousal3.avif';


export default function Carousal() {
  return (
    <>
      <div className={CarousalCss.ImageDiv}>
          <img src={Image3} className={CarousalCss.image} alt='img'/>
          <div className={CarousalCss.picText}>
            <h1>" Decoration Geniuses"</h1>
            <p>BRINGING YOUR CREATIVE IDEAS AND OUR EXPERIENCE TOGHETER</p>
            <div className={CarousalCss.buttons}>
              <a type="button" className="btn btn-outline-warning"  href="#projects" >SHOP NOW</a>
              <a type="button" className="btn btn-outline-warning"  href="#designs" >CONTACT US</a>
            </div>
          </div>
      </div>
 
    </>
  )
}
