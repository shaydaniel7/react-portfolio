import React from "react";
import camera from "../assets/icons/camera.png"
import computercopy from "../assets/icons/computercopy.png"
import design from "../assets/icons/design.png";
import './Portfolio.css';
import { Card, CardDeck } from "react-bootstrap";

function Portfolio() {
    return (
        <div class="portBackground">

            <br /><br /> <br /> 
            <h1>portfolio</h1>
            <br /><br />
            <div class="row">
               
                    <CardDeck>
                        <Card><a href="https://www.etsy.com/shop/ShayDaniel">
                            <Card.Img variant="top" src={camera} className="porticons" alt="camera icon" />
                            <Card.Body>
                                <Card.Title><h5>photography</h5></Card.Title>

                            </Card.Body>
                        </a>
                        </Card>

                        <Card><a href="https://shaydaniel.com">
                            <Card.Img variant="top" src={design} className="porticons" alt="computer icon" />
                            <Card.Body>
                                <Card.Title><h5>design</h5></Card.Title>

                            </Card.Body>
                        </a>
                        </Card>

                        <Card><a href="/Projects">
                            <Card.Img variant="top" src={computercopy} className="porticons" alt="computer icon" />
                            <Card.Body>
                                <Card.Title><h5>projects</h5></Card.Title>
                            </Card.Body>
                        </a>
                        </Card>
                    </CardDeck>
                </div>
            </div>
    );
}
export default Portfolio;