import React, { useState } from 'react'
import classes from './form.module.css'
import { Form, Button, InputGroup, Col } from 'react-bootstrap'
import CTA from '../CTA'
import axios from 'axios'

const TheForm = () => {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        let email = document.getElementById("email").value
        let name = document.getElementById("name").value
        axios.post('http://localhost:1337', 
        {
            theName: name,
            theEmail: email
        }).then((res) => {
            console.log(res);
        }).catch((error) => {
            alert(error)
        });
        document.getElementById("theForm").reset()
        event.preventDefault();
    }

    const handleNameChange = (e) => {
        // setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        // setEmail(e.target.value)
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
                <CTA text="REQUEST A DEMO" width="lg" padding="p-100"  block={true} theType="submit" />
            </div>
        </Form>

    )
}

export default TheForm