import React from "react";
import { Col,Row,Container } from "react-bootstrap";
import { Link } from "react-router";
const RegisterPage=()=> {
  return (
    <Container className="">
      <h1 className="text-center">Register</h1>
      <hr/>
      <Row className="my-4 h-300">
        <Col md lg='4' sm='8'className="mx-auto">
          <form>
            <div className="mb-3 text-left">
              <label htmlFor="username" className="form-label " >Full Name</label>
              <input type="text" className="form-control" id="username" placeholder="Username" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="my-3">
               <p>Already have an account  <Link to="/Login" className="text-decoration-underline text-primary">Login</Link> here!</p>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-success w-100">Register</button></div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
