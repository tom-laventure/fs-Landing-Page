import React, { useState } from 'react'
import classes from './form.module.css'
import { Form, Button, InputGroup, Col } from 'react-bootstrap'
import CTA from '../CTA'
import axios from 'axios'

const TheForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        let url = "http://" + window.CloseEvent.hostname + "/backend";
        if(window.location.hostname.indexOf("localhost") > -1){
            url = "http://" + window.location.hostname + ":1337";
        }
        let email = document.getElementById("email").value
        let name = document.getElementById("name").value
        axios.post(url,
            {
                theName: name,
                theEmail: email
            }).then((res) => {
                console.log(res);
                setFormSubmitted(true)
            }).catch((error) => {
                console.log(error)
            });
        document.getElementById("theForm").reset()
        event.preventDefault();
    }

    return (
        <Form className={classes.form} id="theForm" onSubmit={handleSubmit}>
            <div className="d-flex flex-column align-items-center">
                <h2>Request a demo today</h2>
                <p>Find out what Flyer Story can do for your business.</p>
            </div>
            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control required id="name" type="name" placeholder="John Smith" />
                <Form.Control.Feedback>Please enter your name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control required id="email" type="email" placeholder="JOHNSMITH@emailaddress.ca" />
                <Form.Control.Feedback>Please enter your email</Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-center">
                <CTA text="REQUEST A DEMO" width="lg" padding="p-100" block={true} theType="submit" />
            </div>
            {formSubmitted ? <div className="text-danger d-flex flex-column align-items-center pt-3">
                <p className="mb-0">Thanks for requesting a demo,</p>
                <p className="mb-0">we will be in touch soon!</p>
                </div> : null}
        </Form>

    )
}

export default TheForm