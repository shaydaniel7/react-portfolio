import React from "react";
import './Projects.css';
import burgershot from "../assets/images/burgershot.png";
import noteshot from "../assets/images/noteshot.png";
import planner from "../assets/images/planner.png";
import teamshot from "../assets/images/teamshot.png";
import weatherapp from "../assets/images/weatherapp.png";
import snareshot2 from "../assets/images/snareshot2.png";
import mainpage from "../assets/images/mainpage.png";
import { Card, CardDeck, Button } from "react-bootstrap";

function Projects() {
    return (
        <div class="projBackground">

            <br /><br /> <br /> 
            <h1>projects</h1>
            <br /><br />
            <div class="row">

                <CardDeck>
                    <Card><a href="https://shaydaniel7.github.io/day-planner-3/">
                        <Card.Img variant="top" src={planner} className="projicons" alt="camera icon" />
                        <Card.Body>
                            <Card.Title><h5>day planner app</h5></Card.Title>
                        </Card.Body>
                    </a>
                    </Card>

                    <Card><a href="https://github.com/shaydaniel7/team.profile.generator">
                        <Card.Img variant="top" src={teamshot} className="projicons" alt="computer icon" />
                        <Card.Body>
                            <Card.Title><h5>team profile generator</h5></Card.Title>
                        </Card.Body>
                    </a>
                    </Card>                    
                </CardDeck>
            </div>

            <div class="row">

                <CardDeck>
                    <Card><a href="http://w14project2.herokuapp.com/">
                        <Card.Img variant="top" src={snareshot2} className="projicons" alt="camera icon" />
                        <Card.Body>
                            <Card.Title><h5>Snare music hosting</h5></Card.Title>
                            <Button variant="secondary">Secondary</Button>{''}
                        </Card.Body>
                    </a>
                    </Card>
                </CardDeck>
            </div>

                <div class="row">

                    <CardDeck>
                        <Card><a href="https://warm-woodland-61603.herokuapp.com/">
                            <Card.Img variant="top" src={burgershot} className="projicons" alt="camera icon" />
                            <Card.Body>
                                <Card.Title><h5>burger logger</h5></Card.Title>
                            </Card.Body>
                        </a>
                        </Card>

                        <Card><a href="https://stormy-garden-29411.herokuapp.com/">
                            <Card.Img variant="top" src={noteshot} className="projicons" alt="computer icon" />
                            <Card.Body>
                                <Card.Title><h5>note taker</h5></Card.Title>
                            </Card.Body>
                        </a>
                        </Card>
                    </CardDeck>
                </div>

                <div class="row">

                    <CardDeck>
                        <Card><a href="https://shaydaniel7.github.io/projectbf/">
                            <Card.Img variant="top" src={mainpage} className="projicons" alt="camera icon" />
                            <Card.Body>
                                <Card.Title><h5>dinner & a movie</h5></Card.Title>
                            </Card.Body>
                        </a>
                        </Card>

                        <Card><a href="https://shaydaniel7.github.io/weather-app/">
                            <Card.Img variant="top" src={weatherapp} className="projicons" alt="computer icon" />
                            <Card.Body>
                                <Card.Title><h5>weather app</h5></Card.Title>
                            </Card.Body>
                        </a>
                        </Card>
                       
                    </CardDeck>
                </div>
                
            </div>
            
    );
}

export default Projects;