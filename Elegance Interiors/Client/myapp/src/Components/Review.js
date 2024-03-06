import React from 'react';
import ReviewCss from './StylingFolder/Review.module.css';

export default function Review() {
  return (
    <>
        <div className={ReviewCss.main}></div>
        <div className={ReviewCss.review}>
            <h1>CUSTOMER REVIEWSs</h1>
            <p>"Elegance Interiors provided top-notch interior design services that exceeded my expectations. Their talented team listened to my preferences, delivered a stunning
            design, and ensured practicality and functionality. The level of professionalism and dedication to client satisfaction was outstanding. Highly recommended!"</p>
            <h2>Harry Flintoff</h2>
            <h3>Sydney</h3>
        </div>
    </>
  )
}

