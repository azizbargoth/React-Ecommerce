import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import NavScroll from "./components/navbar";
import { Container } from "react-bootstrap";
import AboutePage from "./pages/AboutePage";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/LogIn";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactPage";
import Footer from "./components/footer";


function App() {
  return (
    
    <Router >
      <NavScroll />
      <Container className="">
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path="/AboutePage" element={<AboutePage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
        </Container>
        <Footer />
    </Router>
    

  );
}

export default App;
