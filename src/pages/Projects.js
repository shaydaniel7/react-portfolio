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

function Projects() {
    return (
        <div class="projBackground">

            <br /><br /> <br />
            <h1>projects</h1>
            <br /><br />

            <div class="row">

                <CardDeck>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={planner} />
                        <Card.Body>
                            <Card.Title><a href="https://shaydaniel7.github.io/day-planner/">Day Planner</a></Card.Title>
                            <Card.Text>
                            This app helps organize a day's events. It allows a person to save daily plans based on the hours of the day. The colors of the boxes change based on if the event is present, past, or upcoming.
                            </Card.Text>
                            <p class = "tech"><i>Uses Moment.js, Bootstrap, HTML, CSS, JavaScript, jQuery</i></p>
                            <Button href="https://github.com/shaydaniel7/day-planner" variant="secondary">repository</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={teamshot} />
                        <Card.Body>
                            <Card.Title><a href="https://github.com/shaydaniel7/team.profile.generator">Team Profile Generator</a></Card.Title>
                            <Card.Text>
                            This is a node command line input app in which a user can store information about employees; it then generates an HTML webpage that displays summaries for each person.
                            </Card.Text>
                            <br />
                            <p class = "tech"><i>Uses HTML, CSS, Javascript, Node</i></p>
                            
                            <Button  href="https://github.com/shaydaniel7/team-profile-generator" variant="secondary">repository</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={weatherapp} />
                        <Card.Body>
                            <Card.Title><a href="https://shaydaniel7.github.io/weather-app/">Weather App</a></Card.Title>
                            <Card.Text>
                            This app enables a user to search for any city and get its main weather components for the current time and date, shown at the top of the page. For each city, the app also shows its five day forecast.
                            </Card.Text>
                            <p class = "tech"><i>Uses Moment.js, Bootstrap, HTML, CSS, JavaScript, jQuery</i></p>
                            <Button  href="https://github.com/shaydaniel7/weather-app" variant="secondary">repository</Button>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>

            <div class="row">

                <CardDeck>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={burgershot} />
                        <Card.Body>
                            <Card.Title><a href="https://shaydaniel7.github.io/day-planner/">Day Planner</a></Card.Title>
                            <Card.Text>
                            This app is a logger that uses MySQL, Node, Express, Handlebars and an ORM. It follows the MVC design pattern and uses Node and MySQL to query and route data, and Handlebars to generate the HTML.
                            </Card.Text>
                            <p class = "tech"><i>Uses: HTML, CSS, Javascript, Node</i></p>
                            <Button href="https://github.com/shaydaniel7/day-planner" variant="secondary">repository</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={noteshot} />
                        <Card.Body>
                            <Card.Title><a href="https://github.com/shaydaniel7/team.profile.generator">Note Taker</a></Card.Title>
                            <Card.Text>
                            This app allows a user to create and save notes, view previously saved notes, and delete previously saved notes. Being able to take persistent notes allows users to have written information available when needed.
                            </Card.Text>
                            <p class = "tech"><i>Uses HTML, CSS, JavaScript, Node.js, Express</i></p>
                            <Button  href="https://github.com/shaydaniel7/team-profile-generator" variant="secondary">repository</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={mainpage} />
                        <Card.Body>
                            <Card.Title><a href="https://shaydaniel7.github.io/dinner-and-a-movie">Dinner and a Movie</a></Card.Title>
                            <Card.Text>
                            This application provides some guidance on the simple yet difficult task of picking where to eat and what movie to watch. There are two sets of input fields for the user to fill out in order to retrieve results.
                            </Card.Text>
                            <p class = "tech"><i>Uses HTML, CSS, JavaScript, jQuery</i></p>
                            <Button  href="https://github.com/shaydaniel7/dinner-and-a-movie" variant="secondary">repository</Button>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>

            <div class="row">

                <CardDeck>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={snareshot3} />
                        <Card.Body>
                            <Card.Title><a href="http://w14project2.herokuapp.com/">Snare Music Hosting</a></Card.Title>
                            <Card.Text>
                            This app helps connects property owner with musicians who need a place to play, practice and record.  Future developments include connecting musicians with other musicians.
                            </Card.Text>
                            <br />
                            <p class = "tech"><i>Uses HTML, CSS, JavaScript, Node.js, Express, mySQL, JawsDB, Passport, Sequelize, Handlebars</i></p>
                            <Button href="https://github.com/Tbonexas/project2" variant="secondary">repository</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={directory} />
                        <Card.Body>
                            <Card.Title><a href="https://shaydaniel7.github.io/user-directory/">Employee Directory</a></Card.Title>
                            <Card.Text>
                            This Employee Directory is an employee directory that uses React. An employer can view their entire employee directory at once, having quick access to their information.
                            <br /><br />
                            </Card.Text>
                            <p class = "tech"><i>Uses HTML, CSS, Javascript, Node.js, Express, React, Components, JSX, JSX variables, Props</i></p>
                            <Button  href="https://github.com/shaydaniel7/user-directory" variant="secondary">repository</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={budget} />
                        <Card.Body>
                            <Card.Title><a href="https://intense-spire-96483.herokuapp.com/">Progressive Budget</a></Card.Title>
                            <Card.Text>
                            This app enables a user to search for any city and get its main weather components for the current time and date, shown at the top of the page. For each city, the app also shows its 5-day forecast.
                            </Card.Text>
                            <p class = "tech"><i>Uses HTML, CSS, JavaScript, Node.js, Express, MongoDB, MongoDB Atlas</i></p>
                            <Button  href="https://github.com/shaydaniel7/progressive-budget" variant="secondary">repository</Button>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>           
        </div>

    );
}

export default Projects;