import React from 'react'
import VolunteerSignUpCss from './VolunteerSignUp.module.css';
import volunteerImage from './VolunteerSignUpImages/CoverPic.png';
import GoogleLogo from './SignUpImages/GoogleLogo.png';
// import FoundationsDropdown from './FoundationsDropdown';

export default function  VolunteerSignUp() {
  return (
  <>
    <div className={VolunteerSignUpCss.main}>
        
        <div className={VolunteerSignUpCss.pictureDiv}>
          <img src={volunteerImage} className={VolunteerSignUpCss.volunteerImage} alt='volunteerpic'/>
          <h1 className={VolunteerSignUpCss.paraText}>"Volunteers do not necessarily have the time they just have the heart"</h1>
        </div>
        
        <div className={VolunteerSignUpCss.formDiv}>
            <form className={VolunteerSignUpCss.mainForm}>
               <div className={VolunteerSignUpCss.formTextDiv}> 
                  <h2 className={VolunteerSignUpCss.header}>
                  Welcome Volunteers 
                  </h2>
                  {/* <p className={VolunteerSignUpCss.text1}>
                  Welcome volunteers! Please Fill out the details
                  </p> */}
                </div>
                <button className= {VolunteerSignUpCss.SignUpGoogle}><img src={GoogleLogo}  className= {VolunteerSignUpCss.GoogleLogo} alt= 'GoogleLogo'/>Sign up with Google</button>

                <input id= {VolunteerSignUpCss.fnameInput}  placeholder="Enter username" type= 'text' required/>

                <input className= {VolunteerSignUpCss.EmailInput} placeholder="Enter your email" type= 'email' required />

                <input id= {VolunteerSignUpCss.passInput} type= 'password' pattern=".{1,10}"
                placeholder='Enter Password' required/>

                <div className={VolunteerSignUpCss.buttons}>
                  <select  className={VolunteerSignUpCss.foundationSelector}>
                    <option value="option1">JDC</option>
                    <option value="option2">Al Khidmat</option>
                    <option value="option3">Syalani</option>
                  </select>

                  <div className={VolunteerSignUpCss.registerButtons}>
                    <button className= {VolunteerSignUpCss.createBtn} type='submit'>Create Account</button>
                    <a className= {VolunteerSignUpCss.loginLink} href= "#">Log in</a>
                  </div>

                </div>

            </form>
        </div>


    </div>
  </>
  )
}
