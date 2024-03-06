import './App.css';
import Navbar from './Components/Navbar.js';
import Carousal from './Components/Carousal.js';
// import textContent from './Components/textContent.js';
import textContentCss from './Components/StylingFolder/textContent.module.css';
import pic1 from './Components/Images/vidpic.webp';
import pic2 from './Components/Images/wood.webp';
import Services from './Components/Services.js';
import Design from './Components/Design.js';
import Review from './Components/Review.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <>
    <div className='main'>

        <Navbar/>
        <Carousal/>
        {/* <textContent/> */}
        <div className={textContentCss.main}>
          <div className={textContentCss.halfOne}>
              <h1>Welcome to <span>Elegance Interiors</span></h1>
              <h3>We have been the leading interior designer since 1955</h3>
              <p>
                  Interior Design brings over four decades of expertise in interior design directly to your home or office. Our experienced professionals are ready to
                  assist you in selecting the ideal products and designs that exceed your expectations, 
                  considering the colors and lighting of your environment.<br></br>
                  <br></br>Given that our consultations occur within your personal space,
                  we collaborate closely with you to envision a design solution that perfectly reflects your style,
                  maximizes your available space, and aligns with your budget. Our dedicated team will provide
                  guidance every step of the way
              </p>
              <button>More About Us</button>
          </div>
          <div className={textContentCss.halfTwo}>
              <img src={pic2} className={textContentCss.pic2} alt='pic2'/>
              <img src={pic1} className={textContentCss.pic1} alt='pic1'/>
          </div>
      </div>
    </div>
      <Services/>
      <Design/>
    <Review/>
    <Footer/>
    </>
  );
}

export default App;
