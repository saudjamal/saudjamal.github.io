import React from 'react';
import backgroundPic from './ClothDonationDetailsImages/clothDonationPic.png';
import Logo from './FoodDonationImages/logo.png';
import ClothDonationDetailsCss from './ClothDonationDetails.module.css';
// import CashdonationDropdown from './CashdonationDropdown';
import { Link } from 'react-router-dom'

export default function ClothDonationDetails() {
  return (
    <>
        <div className={ClothDonationDetailsCss.main}>

            <div className={ClothDonationDetailsCss.overlap1}>
                <img src={backgroundPic} className={ClothDonationDetailsCss.backgroundPicture} alt='picture'/>

                <div className={ClothDonationDetailsCss.innerForm}>
                    <Link to ='/'>
                    <img src={Logo} className={ClothDonationDetailsCss.Logo} alt='logo'/>
                    </Link>
                    <div className={ClothDonationDetailsCss.optionsDiv}>
                        <h1 className={ClothDonationDetailsCss.formHeader1}>Make a Donation</h1>
                        <h2 className={ClothDonationDetailsCss.formHeader2}>Select Foundation</h2>
                        <div className={ClothDonationDetailsCss.DropDownDiv}>
                            <h2 className={ClothDonationDetailsCss.Charity}>Charity</h2 >
                            <select className={ClothDonationDetailsCss.FoundationsDropDown}>
                                <option>Saylani Welfare Group</option>
                                <option>JDC</option>
                                <option>Al Khidmat</option>
                            </select>
                        </div>

                        <p className={ClothDonationDetailsCss.amountLabel}>Enter Amount You Want To Donate</p>
                        <div className={ClothDonationDetailsCss.amountEntry}>
                            <h2 className={ClothDonationDetailsCss.amount}>Qty</h2>
                            <input  className={ClothDonationDetailsCss.amountInput} type='text' placeholder=' 1' required />
                        </div>
                        <button type='text' className='ProceedBtn btn-outline-ProceedBtn' id={ClothDonationDetailsCss.proceedBtn}>Proceed</button>
                    </div>
                </div>

            </div>

            {/* <div className={ClothDonationDetailsCss.overlap2}> */}
                <div className={ClothDonationDetailsCss.formDiv}>
                    <h1 className={ClothDonationDetailsCss.heading}>Cloth Donation Details</h1>
                    <h2 className={ClothDonationDetailsCss.CardNumHeader}>Card Number</h2>
                    <input  className={ClothDonationDetailsCss.CardNumInput} type='text' placeholder='9870 8880 8880 8880' required/>
                    <h2 className={ClothDonationDetailsCss.HolderHeader}>Card Holder</h2>
                    <input  className={ClothDonationDetailsCss.HolderInput} type='text' placeholder="Holder's Name" required/>
                    <div className={ClothDonationDetailsCss.addressDiv}>
                        <div className={ClothDonationDetailsCss.addInputDiv}>
                            <h2 className={ClothDonationDetailsCss.CityHeader}>Address</h2>
                            <input  className={ClothDonationDetailsCss.cityInput} type='text' placeholder='City' required />
                        </div>
                        {/* <div className={ClothDonationDetailsCss.StateInputDiv}>
                            <h2 className={ClothDonationDetailsCss.stateHeader}>State</h2>
                            <input  className={ClothDonationDetailsCss.stateInput} type='text' placeholder='State' required  />
                        </div> */}
                    </div>
                    <div className={ClothDonationDetailsCss.paymentcodes}>
                        {/* <div className={ClothDonationDetailsCss.CVCInputDiv}>
                            <h2 className={ClothDonationDetailsCss.CvcHeader}>CVC</h2>
                            <input  className={ClothDonationDetailsCss.CvcInput} type='text' placeholder='x x x x' required/>
                        </div>  */}
                        <div className={ClothDonationDetailsCss.zipInputDiv}>
                            <h2  className={ClothDonationDetailsCss.ZipHeader}>Zip Code</h2>
                            <input  className={ClothDonationDetailsCss.zipCodeInput} type='text' placeholder='Zip Code' required/>
                        </div>
                    </div>   
                    <button type="submit" className={ClothDonationDetailsCss.DonateBtn}>Donate Now</button>         
                </div>
            {/* </div>     */}

        </div>

    </>
  )
}
