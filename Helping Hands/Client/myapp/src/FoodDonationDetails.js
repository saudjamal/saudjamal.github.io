import React from 'react';
import backgroundPic from './FoodDonationImages/backgroundPic.png';
import Logo from './FoodDonationImages/logo.png';
import FoodDonationDetailsCss from './FoodDonationDetails.module.css';
// import CashdonationDropdown from './CashdonationDropdown';
import { Link } from 'react-router-dom'

export default function FoodDonationDetails() {
  return (
    <>
        <div className={FoodDonationDetailsCss.main}>

            <div className={FoodDonationDetailsCss.overlap1}>
                <img src={backgroundPic} className={FoodDonationDetailsCss.backgroundPicture} alt='picture'/>

                <div className={FoodDonationDetailsCss.innerForm}>
                    <Link to='/'>
                    <img src={Logo} className={FoodDonationDetailsCss.Logo} alt='logo'/>
                    </Link>
                        
                    <div className={FoodDonationDetailsCss.optionsDiv}>
                        <h1 className={FoodDonationDetailsCss.formHeader1}>Make a Donation</h1>
                        <h2 className={FoodDonationDetailsCss.formHeader2}>Select Foundation</h2>
                        <div className={FoodDonationDetailsCss.DropDownDiv}>
                            <h2 className={FoodDonationDetailsCss.Charity}>Charity</h2 >
                            <select className={FoodDonationDetailsCss.FoundationsDropDown}>
                                <option>Saylani Welfare Group</option>
                                <option>JDC</option>
                                <option>Al Khidmat</option>
                            </select>
                        </div>

                        <p className={FoodDonationDetailsCss.amountLabel}>Enter Amount You Want To Donate</p>
                        <div className={FoodDonationDetailsCss.amountEntry}>
                            <h2 className={FoodDonationDetailsCss.amount}>Qty</h2>
                            <input  className={FoodDonationDetailsCss.amountInput} type='text' placeholder=' 1' required />
                        </div>
                        <button type='text' className='ProceedBtn btn-outline-ProceedBtn' id={FoodDonationDetailsCss.proceedBtn}>Proceed</button>
                    </div>
                </div>

            </div>

            {/* <div className={FoodDonationDetailsCss.overlap2}> */}
                <div className={FoodDonationDetailsCss.formDiv}>
                    <h1 className={FoodDonationDetailsCss.heading}>Food Donation Details</h1>
                    <h2 className={FoodDonationDetailsCss.CardNumHeader}>Card Number</h2>
                    <input  className={FoodDonationDetailsCss.CardNumInput} type='text' placeholder='9870 8880 8880 8880' required/>
                    <h2 className={FoodDonationDetailsCss.HolderHeader}>Card Holder</h2>
                    <input  className={FoodDonationDetailsCss.HolderInput} type='text' placeholder="Holder's Name" required/>
                    <div className={FoodDonationDetailsCss.addressDiv}>
                        <div className={FoodDonationDetailsCss.addInputDiv}>
                            <h2 className={FoodDonationDetailsCss.CityHeader}>Address</h2>
                            <input  className={FoodDonationDetailsCss.cityInput} type='text' placeholder='City' required />
                        </div>
                        {/* <div className={FoodDonationDetailsCss.StateInputDiv}>
                            <h2 className={FoodDonationDetailsCss.stateHeader}>State</h2>
                            <input  className={FoodDonationDetailsCss.stateInput} type='text' placeholder='State' required  />
                        </div> */}
                    </div>
                    <div className={FoodDonationDetailsCss.paymentcodes}>
                        {/* <div className={FoodDonationDetailsCss.CVCInputDiv}>
                            <h2 className={FoodDonationDetailsCss.CvcHeader}>CVC</h2>
                            <input  className={FoodDonationDetailsCss.CvcInput} type='text' placeholder='x x x x' required/>
                        </div>  */}
                        <div className={FoodDonationDetailsCss.zipInputDiv}>
                            <h2  className={FoodDonationDetailsCss.ZipHeader}>Zip Code</h2>
                            <input  className={FoodDonationDetailsCss.zipCodeInput} type='text' placeholder='Zip Code' required/>
                        </div>
                    </div>   
                    <button type="submit" className={FoodDonationDetailsCss.DonateBtn}>Donate Now</button>         
                </div>
            {/* </div>     */}

        </div>

    </>
  )
}
