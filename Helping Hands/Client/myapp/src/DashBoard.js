import React from 'react';
import DashBoardCss from './DashBoard.module.css';
import Logo from './DashBoardImages/Logo.png'
import profilePic from './DashBoardImages/ProfilePic.png'
import percentageDrop from './DashBoardImages/percentageDrop.png'
import people from './DashBoardImages/people.png'
import graph from './DashBoardImages/graph.png'
import profilePic1 from './DashBoardImages/ProfilePic1.png'
import { Link } from 'react-router-dom'

export default function DashBoard() {
  return (
    <>
        <nav className={DashBoardCss.logoNav}>
            <Link to='/'>
            <img src={Logo} className={DashBoardCss.Logo} alt='logo'/>
            </Link>
            <img src={profilePic} className={DashBoardCss.profilePic} alt='Profile'/>
        </nav>

        <div className={DashBoardCss.main}>
            <nav className={DashBoardCss.menuNav}>
                <h2 className={DashBoardCss.menuTitle}>Main Menu</h2>
                <div className={DashBoardCss.buttonsDiv}>
                    <button className={DashBoardCss.dashBtn}>Dashboard</button>
                    <Link to='/userDashboard'>
                        <button className={DashBoardCss.UserProfileBtn}>User's Profile</button>
                    </Link>
                    <Link to = '/viewFoundations'>
                    <button className={DashBoardCss.FoundationsBtn}>Foundations</button>
                    </Link>
                    <Link to='/'>
                        <button className={DashBoardCss.HomeBtn}>Home</button>
                    </Link>
                </div>
                <h3 className={DashBoardCss.teams}>Teams</h3>
                <p className={DashBoardCss.Design}>Design</p>
                <p className={DashBoardCss.Devlopment}>Development</p>      
            </nav>

            <div className={DashBoardCss.secondaryDiv}>
                <div className={DashBoardCss.div1}>
                    <div className={DashBoardCss.recordDiv}>   
                        <h1 className={DashBoardCss.DashboardHeader}>Analytics</h1>
                        <h2 className={DashBoardCss.RecentDonationHeader}>Recently Donated</h2>

                        <div className={DashBoardCss.scrollBar}>
                            <div className={DashBoardCss.infoDiv}>
                                <img src={profilePic1} className={DashBoardCss.humanPic} alt='picture'/>
                                    <p className={DashBoardCss.Name}>Saud</p>
                                    <p className={DashBoardCss.Date}>7,Dec,2023</p>
                                    <p className={DashBoardCss.amount}>$1300</p>
                            </div>
                            <div className={DashBoardCss.infoDiv}>
                                <img src={profilePic1} className={DashBoardCss.humanPic} alt='picture'/>
                                    <p className={DashBoardCss.Name}>Samer</p>
                                    <p className={DashBoardCss.Date}>7,Dec,2023</p>
                                    <p className={DashBoardCss.amount}>$2400</p>
                            </div>
                            <div className={DashBoardCss.infoDiv}>
                                <img src={profilePic1} className={DashBoardCss.humanPic} alt='picture'/>
                                    <p className={DashBoardCss.Name}>Saud</p>
                                    <p className={DashBoardCss.Date}>17,Aug,2023</p>
                                    <p className={DashBoardCss.amount}>$2200</p>
                            </div>
                            <div className={DashBoardCss.infoDiv}>
                                <img src={profilePic1} className={DashBoardCss.humanPic} alt='picture'/>
                                    <p className={DashBoardCss.Name}>Aslam</p>
                                    <p className={DashBoardCss.Date}>17,Dec,2024</p>
                                    <p className={DashBoardCss.amount}>$2600</p>
                            </div>
                        </div>
                    </div>

                    <div className={DashBoardCss.numbersDiv}>
                        <div className={DashBoardCss.numberOfDonations}>
                            <h2>Number of Donations</h2>
                            <h1>15</h1>
                            <img src={percentageDrop} alt='percentageDrop' className={DashBoardCss.percentageDrop} />
                            <img src={people} alt='people' className={DashBoardCss.people} />
                        </div>

                        <div className={DashBoardCss.TotalDonations}>
                            <h2>Total Donations</h2>
                            <h1>$16000</h1>
                            <img src={percentageDrop} alt='percentageDrop' className={DashBoardCss.percentageDrop} />
                            <img src={graph} alt='graph' className={DashBoardCss.graph} />
                        </div>

                    </div>
                </div>

                <div className={DashBoardCss.div2}>
                    <h2>Donation History</h2>
                    <div className={DashBoardCss.scrollBar}>
                        <button className={DashBoardCss.tableBtn}>
                        <p className={DashBoardCss.name}>Saud</p>
                        <p className={DashBoardCss.donationType}>Cash</p>
                        <p className={DashBoardCss.date}>Dec 7, 2023</p>
                        <p className={DashBoardCss.tableamount}>200/-</p></button>
                        
                        <button className={DashBoardCss.tableBtn}>
                        <p className={DashBoardCss.name}>Saud</p>
                        <p className={DashBoardCss.donationType}>Cash</p>
                        <p className={DashBoardCss.date}>Dec 7, 2023</p>
                        <p className={DashBoardCss.tableamount}>200/-</p></button>
                       
                        <button className={DashBoardCss.tableBtn}>
                        <p className={DashBoardCss.name}>Saud</p>
                        <p className={DashBoardCss.donationType}>Cash</p>
                        <p className={DashBoardCss.date}>Dec 7, 2023</p>
                        <p className={DashBoardCss.tableamount}>200/-</p></button>
                        
                        <button className={DashBoardCss.tableBtn}>
                        <p className={DashBoardCss.name}>Saud</p>
                        <p className={DashBoardCss.donationType}>Cash</p>
                        <p className={DashBoardCss.date}>Dec 7, 2023</p>
                        <p className={DashBoardCss.tableamount}>200/-</p></button>
                    </div>
                </div>

            </div>









        </div>
    </>
  )
}

