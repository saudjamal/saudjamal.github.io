import React from 'react';
import ServicesCss from './StylingFolder/Services.module.css';
import Picture1 from './Images/renovation.jpg';
import Picture2 from './Images/design3.jpg';
import Picture3 from './Images/design8.jpg';


export default function Services() {
  return (
    <>
        <div className={ServicesCss.mainDiv}>
            
        </div>
        <div className={ServicesCss.OverlapDiv}>
            <div className={ServicesCss.paratext}>
                <h1>Our Services</h1>
                <p>Elegance Interiors is a renowned design firm offering a comprehensive 
                range of services for renovation, office designs, home makeovers, and 
                captivating hospitality spaces. With an unwavering commitment to excellence
                , their team of talented designers transforms spaces into captivating and 
                functional environments. From revitalizing outdated spaces to creating inspiring 
                work environments and crafting stunning home designs.<br></br> <br></br>Elegance Interiors brings 
                creativity, attention to detail, and a deep understanding of their clients'
                needs to every project. Their expertise extends to designing immersive and 
                enchanting hospitality spaces, where ambiance and functionality seamlessly 
                intertwine. With a passion for excellence and a focus on client satisfaction,
                Elegance Interiors is a trusted name in the interior design industry, creating
                spaces that exude elegance and leave a lasting impression.</p>
            </div>
        </div>
    </>
  )
}

