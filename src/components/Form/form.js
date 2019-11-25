import React from 'react'
import classes from './form.module.css'
import { Form, Button } from 'react-bootstrap'
import CTA from '../CTA'
const TheForm = () => {
    return (
        <Form className={classes.form}>
            <div className="d-flex flex-column align-items-center">
            <h2>Request a demo today</h2>
            <p>Find out what Flyer Story can do for your business.</p>
            </div>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="John Smith" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="JOHNSMITH@emailaddress.ca" />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <CTA text="REQUEST A DEMO" width="lg" padding="p-100" block={true}/>
            </div>
        </Form>

    )
}

export default TheForm