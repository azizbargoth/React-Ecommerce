import React from "react";
import { Container } from "react-bootstrap";
const imageUrl = process.env.PUBLIC_URL + '/assets/untitled-design-41-1.jpg';
const Home =()=>{
    return(
        <Container>
            <div className="hero border-1 pb-3">
                <div className="card bg-dark text-wihte border-0 mx-3">
                    <img src={imageUrl} alt="hero image"  height={500}/>
                    <div className="card-img-overlay d-flex align-items-center">
                        <Container className="px-5" >
                            <h5 className="card-title fs-1 text-light ">Wellcome to Our Store</h5>
                            <p className="card-text fs-5 text-light d-none d-sm-block">Welcome to our store !! discover our wide high quality products at compotitive prices . all in one place enjoy markting 
                                with easy way and exclusive deal 
                            </p>
                        </Container>

                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Home;