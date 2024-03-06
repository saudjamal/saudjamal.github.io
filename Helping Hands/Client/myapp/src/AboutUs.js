import React from 'react';
import AboutUsCss from './AboutUsCss.module.css';
import Logo from './DashBoardImages/Logo.png'
import smallvector from './AboutUsImages/smallvector.png'
import underline1 from './AboutUsImages/underline1.png'
import linevector2 from './AboutUsImages/linevector1.png'
import linevector1 from './AboutUsImages/linevector2.png'
import bottomrect from './AboutUsImages/bottomrect.png'
import saudimage from './AboutUsImages/saudimage.png'
import usaidimage from './AboutUsImages/usaidimage.png'
import usaidskills from './AboutUsImages/usaidskills.png'
import saudskills from './AboutUsImages/saudskills.png';
import {Link} from 'react-router-dom';


export default function AboutUs(){
    return(
      <>
        <div className={AboutUsCss.main}>


            <div className="container-fluid" id={AboutUsCss.logoDiv}>
            <Link to='/'>
                <img src ={Logo} alt="..." className={AboutUsCss.logo}/>
            </Link>
            </div>
 
            <div className={AboutUsCss.secondDiv}>
                <div className={AboutUsCss.AboutUText}>
                    About<br/>Us
                    <span className={AboutUsCss.dot}>.</span>
                </div>
                <div className={AboutUsCss.overlap1}>
                    <img src={smallvector} alt='smallvector' className={AboutUsCss.smallvector}/>
                    <p className={AboutUsCss.weStarted}>
                    We started out just like you, helped
                    <br/>
                    friends and family just like you, then
                    <br/>
                    built Helping Hands just for you.
                    </p>
                </div>
            </div>

            <div className={AboutUsCss.SaudInfo}>
                <div className={AboutUsCss.overlap2}>
                    <img src={linevector1} alt='linevector1' className={AboutUsCss.linevector1}/>          
                    <img src={saudimage} alt='saudimage' className={AboutUsCss.saudimage}/>
                </div>
                <div className={AboutUsCss.insideDiv}>
                    <div className={AboutUsCss.saudtxt}>
                        <p className={AboutUsCss.saudName}>Saud Jamal</p>
                        <img src={underline1} alt='underline1' className={AboutUsCss.underline1}/>
                        <p className={AboutUsCss.para1}>
                            Saud is a versatile web developer proficient in ReactJS, Express, 
                            Node.js, HTML, CSS, SQL, and JavaScript. With a comprehensive 
                            skill set spanning both front-end and back-end technologies, 
                            Saud excels in crafting dynamic and visually appealing web 
                            applications. His commitment to staying updated with industry 
                            trends and dedication to delivering high-quality solutions make 
                            him a valuable asset to any development team.
                        </p>
                    </div> 
                    <div className={AboutUsCss.saudSkills}>
                        <p className={AboutUsCss.workOnSaud}>worked on</p>
                        <img src={saudskills} alt='saudskills' className={AboutUsCss.skills1}/>
                    </div>
                </div>
            </div>

            <div className={AboutUsCss.UsaidInfo}>
                <div className={AboutUsCss.overlap3}>
                    <img src={linevector1} alt='linevector1' className={AboutUsCss.linevector1}/>          
                    <img src={usaidimage} alt='usaidimage' className={AboutUsCss.usaidImage}/>
                </div>
                <div className={AboutUsCss.insideDiv2}>
                    <div className={AboutUsCss.Usaidtxt}>
                        <p className={AboutUsCss.UsaidName}>Usaid Ahmed</p>
                        <img src={underline1} alt='underline1' className={AboutUsCss.underline2}/>
                        <p className={AboutUsCss.para2}>
                        Usaid is a multi-talented creative mind who seamlessly blends development and 
                        design expertise. As a developer, he has honed his skills in ReactJS, HTML, 
                        CSS, and JavaScript, ensuring the functionality and responsiveness of web 
                        applications. Beyond coding, Usaid excels in the realms of UI/UX and 
                        graphic design, bringing a holistic approach to his projects. Proficient 
                        in tools like Figma and SQL, he crafts visually stunning and user-friendly 
                        interfaces, demonstrating a keen eye for aesthetics and a deep understanding 
                        of user experience.
                        </p>
                    </div>
                    <div className={AboutUsCss.usaidSkills}>
                        <p className={AboutUsCss.workOnUsaid}>worked on</p>
                        <img src={usaidskills} alt='saudskills' className={AboutUsCss.skills2}/>
                    </div>
                </div>
            </div>

            <div className={AboutUsCss.contactDiv}>
                <div className={AboutUsCss.emails}>
                    <h1>Contact us</h1>
                    <p className={AboutUsCss.email1}>jsaud7308@gmail.com</p>
                    <p className={AboutUsCss.email2}>usaid.ahmedmay@gmail.com</p>
                </div>

                <div className={AboutUsCss.moto}>
                    <p>Always<span className={AboutUsCss.motoSpan}> Ready</span></p>
                    <p className={AboutUsCss.secondMotoLine}>To Assist.</p>
                </div>

            </div>

            <div>
                <img src={bottomrect} alt='bottomrect' className={AboutUsCss.bottomrect}/>
            </div>
        </div>
      </>
    );
}
