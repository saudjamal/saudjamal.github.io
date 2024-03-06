import React from 'react'
import FooterCss from './StylingFolder/Footer.module.css';

export default function Footer() {
  return (
    <>
        <div className={FooterCss.main}>
            <div className={FooterCss.first}>
                <h1>Elegance Interiors</h1>
                <p>With a remarkable 41 years of experience in interior design,
                Elegent Interiors is dedicated to bringing the expertise directly
                to your home or office. Our team of skilled designers is equipped
                to assist you in identifying the ideal products and designs that
                perfectly suit your needs.</p>
                <p>(+021) 456 112 987</p>
                <hr></hr>
                <p>Phase VIII Dha, Saba Avenue</p>
                <hr></hr>
                <p>EleganceInterior@gmail.com</p>
                <hr></hr>
                <p>Mon-Sat : 9:00 to 8:00</p>
                <hr></hr>
                <p>Sunday Closed</p>
            </div>
            <div className={FooterCss.second}>
                <h1>Have a chat with us!</h1>
                <p>Let us know your suggestions. We are always here to make your world a happier and a comforting place.</p>
                <input type='text' placeholder='FeedBack here...'/>
                <h3>Subscribe to become our premium customer</h3>
                <input type='text' placeholder='@gmail.com'/>

            </div>
        </div>
    </>
  )
}

