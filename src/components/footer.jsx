import React from "react";
import { Container } from "react-bootstrap";

const Footer =()=>{
    return(
        <Container fluid className="bg-secondary-subtle mt-5 pt-4">
                <div className=""></div>
                <footer className="py-3 ">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>
                    <p className="text-center text-body-secondary">&copy; 2024 SEF ACADEMY  <stropng ><u>Abdulaziz Barghouht</u></stropng> </p>
                </footer>

        </Container>
    )
}
export default Footer;