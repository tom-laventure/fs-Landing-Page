import React from 'react'
import classes from './form.module.css'
import { Form, Button } from 'react-bootstrap'
import CTA from '../CTA'
const TheForm = () => {
    return (
        <Form className={classes.form}>
            <h1>Request a demo today</h1>
            <h5>Find out what Flyer Story can do for your business.</h5>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
            <div className="d-flex justify-content-center">
                <CTA text="REQUEST A DEMO" width="lg" />
            </div>
        </Form>

    )
}

export default TheForm