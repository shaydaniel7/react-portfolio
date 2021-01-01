import React from "react";
import './Contact.css';
import { Form, Button } from "react-bootstrap";


function Contact() {
    return (

        <div class="contactBackground">

            <br /><br /> <br />
            <h1>contact</h1>
           

            <div class="container" />
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6"><br></br>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="name" placeholder="name" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="email address" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="message" />
                        </Form.Group>

                        <Button variant="secondary" type="submit">
                            submit
                        </Button>{' '}
                        <Button variant="secondary" id="myBtn" type="myInfo">
                            my info
                        </Button>{' '}
                    </Form>
                </div>
                <div class="col-md-3"></div>
            </div>
           

        </div>
    );
}

export default Contact;