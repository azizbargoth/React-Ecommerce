import React from "react";
import { Container } from "react-bootstrap";
import { Col,Row } from "react-bootstrap";
import { Link } from "react-router";
const ContactUsPage=()=> {
  return (
    <Container >
      <h1 className="text-center">Contact Us</h1>
      <hr />
      <Row className="my-4 h-300">
        <Col md lg='4' sm='8'className="mx-auto">
          <form>
          <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="enter your name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Enter your message"
                rows="4"
                aria-label="Message"
              ></textarea>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-success w-100" variant="outline-success">send</button></div> 
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUsPage;
