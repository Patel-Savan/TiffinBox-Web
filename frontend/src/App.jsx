import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <main data-theme="bumblebee">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faqs" element={<FAQPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
