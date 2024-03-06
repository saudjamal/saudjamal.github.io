import React from 'react';
import Logo from './DashBoardImages/Logo.png'
import cash from './DonationPageImages/cash.png'
import cloth1 from './DonationPageImages/cloth1.png'
import food from './DonationPageImages/food.png'
import DonationPageCss from './DonationPage.module.css'
import { Link } from 'react-router-dom'

export default  function DonationPage() {
  return (
    <>
    <Link to ='/'>
        <img src={Logo} className={DonationPageCss.LogoPic} alt='Logo'/>
    </Link>
        <div className={DonationPageCss.main}>
            <h1 className={DonationPageCss.header}>We Now Live In ChangeMaker World</h1>
            <div className={DonationPageCss.DonationButtons}>
            <Link to='/cashDonationDetails'>
                <button className={DonationPageCss.cashBtn}>
                    <img src={cash} className={DonationPageCss.cashImg} alt='cash'/>
                    <p className={DonationPageCss.cashText}>Cash</p>
                </button>
            </Link>
            <Link to='/clothDonationDetails'>
                <button className={DonationPageCss.cashBtn}>
                    <img src={cloth1} className={DonationPageCss.clothImg} alt='cloth'/>
                    <p className={DonationPageCss.cashText}>Cloth</p>
                </button>
            </Link>
            <Link to='/foodDonationDetails'>
                <button className={DonationPageCss.cashBtn}>
                    <img src={food} className={DonationPageCss.foodImg} alt='food'/>
                    <p className={DonationPageCss.cashText}>Food</p>
                </button>
            </Link>
            </div>
        </div>
    </>
  )
}

