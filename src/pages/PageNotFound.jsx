//import react from "react";

import { Col, Container, Row } from "react-bootstrap";

const PageNotFound =()=>{
return(
    <>
    <Container className="pt-5">
        <Row xs={1} > 
            <Col className="text-center pt-5">
            <h1 className="text-secondary p-5">404 Page Not Found...</h1>
            </Col>
        </Row>
    </Container>
    </>
)
}
export default PageNotFound;