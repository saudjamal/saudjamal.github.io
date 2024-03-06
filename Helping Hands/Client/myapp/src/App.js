import './App.css';
import HomePage from './HomePage.js';
import AboutUs from './AboutUs.js';
import VolunteerSignUp from './VolunteerSignUp.js';
import ViewFoundations from './ViewFoundations.js';
import PaymentDetails from './PaymentDetails.js';
import ClothDonationDetails from './ClothDonationDetails.js';
import FoodDonationDetails from './FoodDonationDetails.js';
import DashBoard from './DashBoard.js';
import DonationPage from './DonationPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<AuthenticatedRoutes />}> */}
            <Route exact path="/donatenow" element={<DonationPage />}>
            </Route>

            <Route exact path="/viewFoundations" element={<ViewFoundations />}>
            </Route>

            <Route exact path="/signUpVolunteer" element={<VolunteerSignUp />}>
            </Route>

            <Route exact path="/cashDonationDetails" element={<PaymentDetails />}>
            </Route>

            <Route exact path="/clothDonationDetails" element={<ClothDonationDetails />}>
            </Route>

            <Route exact path="/foodDonationDetails" element={<FoodDonationDetails />}>
            </Route>

            <Route exact path="/userDashboard" element={<DashBoard />}>
            </Route>

            {/* <Route exact path="/userprofile" element={<UserProfile />}></Route> */}

            <Route exact path="/aboutus" element={<AboutUs />}></Route>

            {/* <Route exact path="/donationsuccessful" element={<DonationSuccessful />}></Route> */}

            <Route exact path="/" element={<HomePage />}></Route>
          {/* </Route> */}

            {/* <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>  */}
        </Routes>

      </BrowserRouter>

      </>
    );
}

export default App;
