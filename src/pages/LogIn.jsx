import React from "react";
import { Container } from "react-bootstrap";
import { Col,Row } from "react-bootstrap";
import { Link } from "react-router";
const LoginPage=()=> {
  return (
    <Container>
      <h1 className="text-center">Login</h1>
      <hr />
      <Row className="my-4 h-300">
        <Col md lg='4' sm='8'className="mx-auto">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="my-3">
               <p>Haven't account <Link to="/register" className="text-decoration-underline text-primary">Register</Link> here!</p>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-success w-100" variant="outline-success">Log In</button></div> 
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
