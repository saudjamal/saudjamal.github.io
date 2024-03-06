import React from 'react';
import backgroundPic from './PaymentDetailsImages/BackGroundPic.png';
import Logo from './FoodDonationImages/logo.png';
import PaymentDetailsCss from './PaymentDetails.module.css';
// import CashdonationDropdown from './CashdonationDropdown';


export default function PaymentDetails() {
  return (
    <>
        <div className={PaymentDetailsCss.main}>

            <div className={PaymentDetailsCss.overlap1}>
                <img src={backgroundPic} className={PaymentDetailsCss.backgroundPicture} alt='picture'/>

                <div className={PaymentDetailsCss.innerForm}>
                    <img src={Logo} className={PaymentDetailsCss.Logo} alt='logo'/>
                    <div className={PaymentDetailsCss.optionsDiv}>
                        <h1 className={PaymentDetailsCss.formHeader1}>Make a Donation</h1>
                        <h2 className={PaymentDetailsCss.formHeader2}>Select Foundation</h2>
                        <div className={PaymentDetailsCss.DropDownDiv}>
                            <h2 className={PaymentDetailsCss.Charity}>Charity</h2 >
                            <select className={PaymentDetailsCss.FoundationsDropDown}>
                                <option>Saylani Welfare Group</option>
                                <option>Saylani Welfare Group</option>
                                <option>Saylani Welfare Group</option>
                            </select>
                        </div>

                        <p className={PaymentDetailsCss.amountLabel}>Enter Amount You Want To Donate</p>
                        <div className={PaymentDetailsCss.amountEntry}>
                            <h2 className={PaymentDetailsCss.amount}>USD</h2>
                            <input  className={PaymentDetailsCss.amountInput} type='text' placeholder='$200.73' required />
                        </div>
                        <button type='text' className='ProceedBtn btn-outline-ProceedBtn' id={PaymentDetailsCss.proceedBtn}>Proceed</button>
                    </div>
                </div>

            </div>

            {/* <div className={PaymentDetailsCss.overlap2}> */}
                <div className={PaymentDetailsCss.formDiv}>
                    <h1 className={PaymentDetailsCss.heading}>Payment Details</h1>
                    <h2 className={PaymentDetailsCss.CardNumHeader}>Card Number</h2>
                    <input  className={PaymentDetailsCss.CardNumInput} type='text' placeholder='9870 8880 8880 8880' required/>
                    <h2 className={PaymentDetailsCss.HolderHeader}>Card Holder</h2>
                    <input  className={PaymentDetailsCss.HolderInput} type='text' placeholder="Holder's Name" required/>
                    <div className={PaymentDetailsCss.addressDiv}>
                        <div className={PaymentDetailsCss.addInputDiv}>
                            <h2 className={PaymentDetailsCss.CityHeader}>Address</h2>
                            <input  className={PaymentDetailsCss.cityInput} type='text' placeholder='City' required />
                        </div>
                        <div className={PaymentDetailsCss.StateInputDiv}>
                            <h2 className={PaymentDetailsCss.stateHeader}>State</h2>
                            <input  className={PaymentDetailsCss.stateInput} type='text' placeholder='State' required  />
                        </div>
                    </div>
                    <div className={PaymentDetailsCss.paymentcodes}>
                        <div className={PaymentDetailsCss.CVCInputDiv}>
                            <h2 className={PaymentDetailsCss.CvcHeader}>CVC</h2>
                            <input  className={PaymentDetailsCss.CvcInput} type='text' placeholder='x x x x' required/>
                        </div> 
                        <div className={PaymentDetailsCss.zipInputDiv}>
                            <h2  className={PaymentDetailsCss.ZipHeader}>Zip Code</h2>
                            <input  className={PaymentDetailsCss.zipCodeInput} type='text' placeholder='Zip Code' required/>
                        </div>
                    </div>   
                    <button type="submit" className={PaymentDetailsCss.DonateBtn}>Donate Now</button>         
                </div>
            {/* </div>     */}

        </div>

    </>
  )
}
