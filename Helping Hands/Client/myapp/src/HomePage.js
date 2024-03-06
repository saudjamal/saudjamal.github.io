import React, {useState} from 'react'
import HomePageCss from './HomePage.module.css'
import Logo from './HomePageImages/Logo.png';
// import FirstBgPic from './HomePageImages/FirstBgPic.png';
import cloth from './HomePageImages/cloth.png';
import cash from './HomePageImages/Cash.png';
import food from './HomePageImages/Food.png';
// import ThirdBgpic from './HomePageImages/ThirdBgPic.png';
// import profileIcon from './HomePageImages/profileIcon.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return(
    <>
      <div className={HomePageCss.main}>
        <div className={HomePageCss.firstDiv}>
          <div className= {HomePageCss.bgp1}>
              {/* <img src={FirstBgPic} alt= 'bg1' className={HomePageCss.FirstBgPic}/> */}
          </div>
          <img src={Logo}  className={HomePageCss.Logo} alt = 'logo' />
          <nav className={HomePageCss.Nav}>
            <ul className={HomePageCss.ul}>
              <li className={HomePageCss.li1}>Home</li>
              <Link to='/aboutus'>
                <button style={{backgroundColor:'transparent', color:'white', border:'none'}}>
                <li className={HomePageCss.li2}>About us</li>
                  </button>
              </Link>
              <Link to='/userDashboard'>
              <button style={{backgroundColor:'transparent', color:'white', border:'none'}}>
                  <li className={HomePageCss.li3}>Dashboard</li>
              </button>
              </Link>
              <li className={HomePageCss.li4}>Profile</li>
              <li className={HomePageCss.li5}>Logout</li>
            </ul>
            <div className={`${HomePageCss.hamburger} ${isActive && HomePageCss.active}`} onClick={toggleMenu}>          <span className={HomePageCss.bar}></span>
              <span className={HomePageCss.bar}></span>
              <span className={HomePageCss.bar}></span>
            </div>
          </nav>

          <div className={HomePageCss.textDiv}>
            <h1 className={HomePageCss.header}>Welcome to <span className={HomePageCss.coloredtext}>Hunger Relief:<br/></span>
                Empowering Communities, 
                Nourishing Lives</h1>
            <div className={HomePageCss.paratext}>
              <p1>At Hunger Relief, we believe that no one should go to bed hungry. Our mission is to eradicate hunger and malnutrition by empowering communities and nourishing lives. Through our innovative approach, we connect individuals, organizations, and communities to make a significant impact on hunger relief efforts worldwide.
              </p1>
            </div>
            <span>random text</span>
            <button className={HomePageCss.Startbtn}>Get Started</button>
          </div>
        </div>

        <div>
          <div id={HomePageCss.connectDiv}>
            
            <div className={HomePageCss.DonationTypeTextBlock}>
                <h1 className={HomePageCss.secondHeader}>Connects nonprofits,
                honors, & companies
                every country</h1>
                <p className={HomePageCss.text2}>We help local nonprofits access the funding, tools,
                training and support they need to become more </p>
                <Link to='/donatenow'>
                  <button className={HomePageCss.Donatebtn}>Donate Now</button>
                </Link>
            </div>

            <div className={HomePageCss.DonationTypes}>
              <div>
                <button className={HomePageCss.clothBtn}>
                  <img src={cloth} alt='cloth' className={HomePageCss.clothImage}/>
                  <div>
                    <h1 className={HomePageCss.clothTitle}>Cloth</h1>
                    <p>Empower the less fortunate by extending a helping hand donate cash to uplift them from challenging circumstances and foster a path towards a brighter future</p>
                  </div>
                  </button>
            </div>

            <div>
              <button className={HomePageCss.cashBtn}>
                <img src={cash} alt='cash' className={HomePageCss.cashImage}/>
                <div>
                  <h1 className={HomePageCss.cashTitle}>Cash</h1>
                  <p>Empower the less fortunate by extending a helping hand donate cash to uplift them from challenging circumstances and foster a path towards a brighter future</p>
                </div>
              </button>
            </div>

            <div>
              <button className={HomePageCss.foodBtn}>
                <img src={food} alt='food' className={HomePageCss.foodImage}/>
                <div>
                  <h1 className={HomePageCss.foodTitle}>Food</h1>
                  <p>Empower the less fortunate by extending a helping hand donate cash to uplift them from challenging circumstances and foster a path towards a brighter future</p>
                </div>
              </button>
              </div>
             </div>
           </div>
          </div>

          <div className={HomePageCss.foundationBlock}>
              <h1>Donate in Our Foundations</h1>
              <p>At Hunger Relief, we believe that no one should go to bed hungry. Our mission is to eradicate hunger and malnutrition by empowering communities and nourishing lives. Through our innovative approach, we connect individuals, organizations.</p>
              <Link to = '/viewFoundations'>
                <button className={HomePageCss.viewFoundationbtn}>View Foundations</button>
              </Link> 
          </div>
          
            <div className={HomePageCss.bg3}>
              {/* <img src = {ThirdBgpic} alt='bg3' className={HomePageCss.bg3}/> */}
              <div className={HomePageCss.volunteerBlock}>
                  <h1 className={HomePageCss.header}>Support our vision for 
                  what future can be</h1>
                  <p>Join our community to become volunteer and
                  you can devote for your life to helping others</p>
                  <Link to='/signUpVolunteer'>
                    <button className={HomePageCss.volunteerBtn}>Become a Volunteer</button>
                  </Link>
              </div>
            </div>
          </div>      
      <Link to='/donatenow'>
      <button className={HomePageCss.DonateBtnSticky}>Donate Now</button>
      </Link>

    </>
  )
}
