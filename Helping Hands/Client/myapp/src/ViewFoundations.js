import React from 'react';
import Logo from './DashBoardImages/Logo.png';
import profilePic from './DashBoardImages/ProfilePic.png';
import FoundationPic from './ViewFoundationsImages/FoundationPic.png';
import ViewFoundationsCss from './ViewFoundations.module.css';
import { Link } from 'react-router-dom'

export default function ViewFoundations() {
  return (
    <>
        <nav className={ViewFoundationsCss.logoNav}>
            <Link to='/'>
            <img src={Logo} className={ViewFoundationsCss.Logo} alt='logo'/>
            </Link>
            <img src={profilePic} className={ViewFoundationsCss.profilePic} alt='Profile'/>
        </nav>

        <div className={ViewFoundationsCss.main}>

            <nav className={ViewFoundationsCss.menuNav}>
                <h2 className={ViewFoundationsCss.menuTitle}>Main Menu</h2>
                <div className={ViewFoundationsCss.buttonsDiv}>
                    <Link to='/userDashboard'>
                    <button className={ViewFoundationsCss.dashBtn}>Dashboard</button>
                    </Link>
                    <button className={ViewFoundationsCss.FoundationsBtn}>Foundations</button>
                    <Link to='/userDashboard'>
                        <button className={ViewFoundationsCss.UserProfileBtn}>User's Profile</button>
                    </Link>
                    <Link to='/'>
                        <button className={ViewFoundationsCss.HomeBtn}>Home</button>
                    </Link>
                </div>
                <h3 className={ViewFoundationsCss.teams}>Teams</h3>
                <p className={ViewFoundationsCss.Design}>Design</p>
                <p className={ViewFoundationsCss.Devlopment}>Development</p>      
            </nav>

            <div className={ViewFoundationsCss.foundationDescription}>
                
                <div className={ViewFoundationsCss.foundationTitle}>
                    <h1 className={ViewFoundationsCss.header}>Foundations</h1>
                </div>
                
                <div className={ViewFoundationsCss.foundationCard}>
                    <div className={ViewFoundationsCss.scrollBar}>
                        <div className={ViewFoundationsCss.details}>
                            <img src={FoundationPic} className={ViewFoundationsCss.FoundationPic}/>
                            <div className={ViewFoundationsCss.foundationText}>
                                <h2 className={ViewFoundationsCss.foundationName}>Jafriya Disaster Cell Welfare</h2>
                                <p>Hello everyone, on behalf of our Patron @+92 335 2464629, I would like to welcome you on board for the 1st season of DSL, there has been a slight change in dates due to the upcoming General Elections and the law and order situation in Karachi. Fresh dates are 13th February till 27th February.
                                </p>
                                <h4 className={ViewFoundationsCss.foundationLocation}>HeadQuaters Location: Karachi</h4>
                            </div> 
                        </div>

                        <div className={ViewFoundationsCss.details}>
                            <img src={FoundationPic} className={ViewFoundationsCss.FoundationPic}/>
                            <div className={ViewFoundationsCss.foundationText}>
                                <h2 className={ViewFoundationsCss.foundationName}>Jafriya Disaster Cell Welfare</h2>
                                <p>Hello everyone, on behalf of our Patron @+92 335 2464629, I would like to welcome you on board for the 1st season of DSL, there has been a slight change in dates due to the upcoming General Elections and the law and order situation in Karachi. Fresh dates are 13th February till 27th February.
                                </p>
                                <h4 className={ViewFoundationsCss.foundationLocation}>HeadQuaters Location: Karachi</h4>
                            </div> 
                        </div>
                        
                        <div className={ViewFoundationsCss.details}>
                            <img src={FoundationPic} className={ViewFoundationsCss.FoundationPic}/>
                            <div className={ViewFoundationsCss.foundationText}>
                                <h2 className={ViewFoundationsCss.foundationName}>Jafriya Disaster Cell Welfare</h2>
                                <p>Hello everyone, on behalf of our Patron @+92 335 2464629, I would like to welcome you on board for the 1st season of DSL, there has been a slight change in dates due to the upcoming General Elections and the law and order situation in Karachi. Fresh dates are 13th February till 27th February.
                                </p>
                                <h4 className={ViewFoundationsCss.foundationLocation}>HeadQuaters Location: Karachi</h4>
                            </div> 
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

