import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import burgershot from "../assets/images/burgershot.png";
import noteshot from "../assets/images/noteshot.png";
import planner from "../assets/images/planner.png";
import teamshot from "../assets/images/teamshot.png";
import weatherapp from "../assets/images/weatherapp.png";
import snareshot2 from "../assets/images/snareshot2.png";
import mainpage from "../assets/images/mainpage.png";


function Projects() {
    return (
        <div class="projects">
            <br />
            <h1>projects</h1>
            <br />

            <a href="https://shaydaniel7.github.io/day-planner-3/"><img src={planner} class="card-img-top" alt="bs" />bs</a>
            <h5 class="card-title"><a href="https://shaydaniel7.github.io/day-planner-3/">day planner app</a><a
                href="https://github.com/shaydaniel7/day-planner-3/">bs</a></h5>


            <a href="https://github.com/shaydaniel7/team.profile.generator"><img src={teamshot} class="card-img-top" alt="bs" /></a>
            <h5 class="card-title"><a href="https://github.com/shaydaniel7/team.profile.generator">team profile generator</a>
            <a href="https://github.com/shaydaniel7/team.profile.generator">bs</a></h5>


            <a href="http://w14project2.herokuapp.com/"><img src={snareshot2} class="card-img-top" alt="bs" /></a>
            <h5 class="card-title"><a href="http://w14project2.herokuapp.com/">Snare music hosting</a>
            <a href="https://github.com/Tbonexas/project2">bs</a></h5>



            <a href="https://warm-woodland-61603.herokuapp.com/"><img src={burgershot} class="card-img-top" alt="bs" />
            </a><h5 class="card-title"><a href="https://warm-woodland-61603.herokuapp.com/">eat-da-burger</a>
            <a href="https://github.com/shaydaniel7/burger">poop</a></h5>


            <a href="https://stormy-garden-29411.herokuapp.com/"><img src={noteshot} class="card-img-top" alt="bs" /></a>
            <h5 class="card-title"><a href="https://stormy-garden-29411.herokuapp.com/">note taker</a>
            <a href="https://github.com/shaydaniel7/notetaker">poop</a></h5>



            <div class="card" />
            <a href="https://shaydaniel7.github.io/projectbf/"><img src={mainpage} class="card-img-top" alt="bs" /></a>
            <h5 class="card-title"><a href="https://shaydaniel7.github.io/projectbf/">dinner a movie</a>
            <a href="https://github.com/shaydaniel7/projectbf">poop</a></h5>



            <a href="https://shaydaniel7.github.io/weather-app/"><img src={weatherapp} class="card-img-top" alt="bs" /></a>
            <h5 class="card-title"><a href="https://shaydaniel7.github.io/weather-app/">weather app</a>
            <a href="https://github.com/shaydaniel7/weather-app">poop</a></h5>

        </div>

    );
}

export default Projects;