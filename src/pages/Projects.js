import React from "react";
import './Projects.css';
import burgershot from "../assets/images/burgershot.png";
import noteshot from "../assets/images/noteshot.png";
import planner from "../assets/images/planner.png";
import teamshot from "../assets/images/teamshot.png";
import weatherapp from "../assets/images/weatherapp.png";
import snareshot3 from "../assets/images/snareshot3.png";
import mainpage from "../assets/images/mainpage.png";
import directory from "../assets/images/directory.png";
import budget from "../assets/images/budget.png";
import { Card, CardDeck, Button } from "react-bootstrap";
import Navtabs from "../components/Navtabs";
import Footer from "../components/Footer";

function Projects() {
    return (
        <div className="projBackground">
            <Navtabs />

            <br /><br /> <br />
            <h1>projects</h1>
            <br /><br />

            <div className="row">

                <CardDeck>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={planner} />
                        <Card.Body>
                            <Card.Title><a href="https://shaydaniel7.github.io/day-planner/">Day Planner</a><Button href="https://github.com/shaydaniel7/day-planner" variant="secondary">repo</Button></Card.Title>
                            <Card.Text>
                            This app helps organize a day's events. It allows a person to save daily plans based on the hours of the day. The colors of the boxes change based on if the event is present, past, or upcoming.
                            </Card.Text>
                            <p className="tech"><i>Uses Moment.js, HTML, CSS, JavaScript, jQuery</i></p>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={teamshot} />
                        <Card.Body>
                            <Card.Title><a href="https://github.com/shaydaniel7/team.profile.generator">Team Profile Generator</a><Button href="https://github.com/shaydaniel7/team-profile-generator" variant="secondary">repo</Button></Card.Title>
                            <Card.Text>
                            This is a node command line input app in which a user can store information about employees; it then generates an HTML webpage that displays summaries for each person.
                            </Card.Text>
                            <p className="tech"><i>Uses HTML, CSS, Javascript, Node</i></p>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={weatherapp} />
                        <Card.Body>
                            <Card.Title><a href="https://shaydaniel7.github.io/weather-app/">Weather App</a><Button href="https://github.com/shaydaniel7/weather-app" variant="secondary">repo</Button></Card.Title>
                            <Card.Text>
                            This app enables a user to search for any city and get its main weather components for the current time and date, shown at the top of the page. For each city, the app also shows its five day forecast.
                            </Card.Text>
                            <p className="tech"><i>Uses Moment.js, HTML, CSS, JavaScript, jQuery</i></p>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>

            <div className="row">

                <CardDeck>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={burgershot} />
                        <Card.Body>
                            <Card.Title><a href="https://warm-woodland-61603.herokuapp.com/">Burger Logger</a><Button href="https://github.com/shaydaniel7/burger-logger" variant="secondary">repo</Button></Card.Title>
                            <Card.Text>
                            This app is a logger that uses MySQL, Node, Express, Handlebars and an ORM. It follows the MVC design pattern and uses Node and MySQL to query and route data, and Handlebars to generate the HTML.
                            </Card.Text>
                            <p className="tech"><i>Uses: HTML, CSS, Javascript, Node</i></p>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={noteshot} />
                        <Card.Body>
                            <Card.Title><a href="https://stormy-garden-29411.herokuapp.com/">Note Taker</a><Button href="https://github.com/shaydaniel7/notetaker" variant="secondary">repo</Button></Card.Title>
                            <Card.Text>
                            This app allows a user to create and save notes, view previously saved notes, and delete previously saved notes. Being able to take persistent notes allows users to have written information available when needed.
                            </Card.Text>
                            <p className="tech"><i>Uses HTML, CSS, JavaScript, Node.js, Express</i></p>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={mainpage} />
                        <Card.Body>
                            <Card.Title><a href="https://shaydaniel7.github.io/dinner-and-a-movie">Dinner and a Movie</a> <Button href="https://github.com/shaydaniel7/dinner-and-a-movie" variant="secondary">repo</Button> </Card.Title>
                            <Card.Text>
                            This application provides some guidance on the simple yet difficult task of picking where to eat and what movie to watch. There are two sets of input fields for the user to fill out in order to retrieve results.
                            </Card.Text>
                            <p className="tech"><i>Uses HTML, CSS, JavaScript, jQuery</i></p>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>

            <div className="row">

                <CardDeck>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={snareshot3} />
                        <Card.Body>
                            <Card.Title><a href="http://w14project2.herokuapp.com/">Snare Music Hosting</a><Button href="https://github.com/Tbonexas/project2" variant="secondary">repo</Button></Card.Title>
                            <Card.Text>
                            This app helps connects property owner with musicians who need a place to play, practice and record.  Future developments include connecting musicians with other musicians.
                            </Card.Text>
                            <br />
                            <p className="tech"><i>Uses HTML, CSS, JavaScript, Node.js, Express, mySQL, JawsDB, Passport, Sequelize, Handlebars</i></p>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={directory} />
                        <Card.Body>
                            <Card.Title><a href="https://shaydaniel7.github.io/user-directory/">Employee Directory</a>
                            <Button href="https://github.com/shaydaniel7/user-directory" variant="secondary">repo</Button>
                            </Card.Title>
                            <Card.Text>
                            This React app is an Employee Directory that an employer can use to view their entire staff at once, have quick access to their profiles, sort by first or last name, as well as search for a particular person.
                            <br /><br />
                            </Card.Text>
                            <p className="tech"><i>Uses HTML, CSS, Javascript, Node.js, Express, React, Components, JSX, JSX variables, Props</i></p>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={budget} />
                        <Card.Body>
                            <Card.Title><a href="https://intense-spire-96483.herokuapp.com/">Progressive Budget</a>
                            <Button href="https://github.com/shaydaniel7/progressive-budget" variant="secondary">repo</Button></Card.Title>
                            <Card.Text>
                            This app enables a user to search for any city and get its main weather components for the current time and date, shown at the top of the page. For each city, the app also shows its 5-day forecast.
                            </Card.Text>
                            <p className="tech"><i>Uses HTML, CSS, JavaScript, Node.js, Express, MongoDB, MongoDB Atlas</i></p>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;