import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const Login = () => {
    return (
        <>
        <div className="navbar-custom   ">
            <img className="logo-navbar" src="/assets/logo.png" />
        </div>
        <Form className="form-modal">
            <Form.Group className="mb-3 s-w">
                <Form.Label className="label-fs">Matricule</Form.Label>
                <Form.Control type="text" className="label-fs" placeholder="3247824" />
            </Form.Group>
            <Form.Group className="mb-3 s-w">
                <Form.Label className="label-fs">Mot de passe</Form.Label>
                <Form.Control type="password" className="label-fs" placeholder="Mot de passe" />
            </Form.Group>
            <Form.Group>
                <Button size="mg" className="button-login mt-3">
                    Login
                </Button>
            </Form.Group>
        </Form>
        </>
    )
}

export default Login