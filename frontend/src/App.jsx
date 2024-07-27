import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import LandingPage from "./pages/LandingPage";
import PendingRequests from "./pages/Admin/PendingRequests";
import { AdminAppProvider } from "./context/AdminContext/AdminContext";
import SinglePendingRequest from "./pages/Admin/SinglePendingRequest";
import UserList from "./pages/Admin/UserList";
import { FoodProviderMealAppProvider } from "./context/FoodProviderMealContext/FoodProviderMealContext";
import MealMenuManagement from "./pages/FoodProvider/MealMenuManagement";
import AddAMeal from "./pages/FoodProvider/AddAMeal";
import MealPage from "./pages/FoodProvider/MealPage";
import UpdateAMeal from "./pages/FoodProvider/UpdateAMeal";

function App() {
  return (
    <main data-theme="bumblebee">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faqs" element={<FAQPage />} />

          {/* admin routes starts */}
          <Route
            path="/admin/*"
            element={
              <AdminAppProvider>
                <Routes>
                  <Route path="pending-request" element={<PendingRequests />} />
                  <Route path="single-pending-request/:foodServiceProviderId" element={<SinglePendingRequest />} />
                  <Route path="user-list" element={<UserList />} />
                </Routes>
              </AdminAppProvider>
            }
          />
          {/* admin routes ends */}

          {/*Food Service Provider routes starts */}
          <Route
            path="/foodprovider/*"
            element={
              <FoodProviderMealAppProvider>
                <Routes>
                  <Route path="mealmenumanagement" element={<MealMenuManagement />} />
                  <Route path="meal-page/:mealId" element={<MealPage />} />
                  <Route path="add-a-meal" element={<AddAMeal/>} />
                  <Route path="update-a-meal/:mealId" element={<UpdateAMeal />} />
                </Routes>
              </FoodProviderMealAppProvider>
            }
          />
          {/* Food Service Provider routes ends */}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
