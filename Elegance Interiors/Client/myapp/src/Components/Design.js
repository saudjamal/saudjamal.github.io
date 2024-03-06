import React from 'react';
import DesignCss from './StylingFolder/Design.module.css';
import image from './Images/homeOffice.jpg';
import image2 from './Images/bathroom.webp';
import image3 from './Images/terrace.jpg';

export default function Design() {
  return (
    <>
        <div className={DesignCss.main}>
            <h1>LUXURY <span>DESIGNS</span></h1>
            <div className={DesignCss.cardsDiv}>
                <div className={DesignCss.Card}>
                    <img src={image} className={DesignCss.image1} alt='image1'/>
                    <h2>Elegant Office in your home</h2>
                    <p>Transform your home office into a stylish and productive workspace with the help of our professional interior design services. We understand the importance of creating a space that inspires creativity, fosters productivity, and reflects your personal taste.</p>
                    <button className={DesignCss.btns}>More Info</button>
                </div>
                <div className={DesignCss.Card}>
                    <img src={image2} className={DesignCss.image1} alt='image1'/>
                    <h2>Style your Bathroom</h2>
                    <p>Indulge in the epitome of luxury with our expert interior styling services for your bathroom. Our team of experienced designers will meticulously craft a personalized design that reflects your exquisite taste and lifestyle aspirations. We'll create a bathroom that radiates elegance.</p>
                    <button className={DesignCss.btns}>More Info</button>
                </div>
                <div className={DesignCss.Card}>
                    <img src={image3} className={DesignCss.image1} alt='image1'/>
                    <h2>A Spot at the Top</h2>
                    <p>Experience the sheer pleasure of your terrace transformed into a haven of tranquility with our expert design services. Our talented team will curate a captivating outdoor space that combines comfort and aesthetics, creating an inviting atmosphere.</p>
                    <button className={DesignCss.btns}>More Info</button>
                </div>
            </div>
        </div>
    </>
  )
}

