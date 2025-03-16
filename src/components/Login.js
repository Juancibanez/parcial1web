import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from 'react-intl';

import './Login.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const APIURL = 'http://localhost:3001';

    function handleInputUsuario(event){
        setUsuario(event.target.value);
    }

    function handleInputContraseña(event){
        setPassword(event.target.value);
    }

    async function handleSubmit(event){
        event.preventDefault();
        const d = await authenticateUser();
        if (d.status === "success"){
            navigate('/robots');
        }else{
            setError(d.message);
        }
        console.log(d);
    }

    function handleCancel(){
        setUsuario('');
        setPassword('');
        setError('');
    }

    async function authenticateUser(){
        const response = await fetch(`${APIURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: usuario,
                password: password
            })
        })

        const data = await response.json();

        return data;

    }

  return (
    <div className = "login-container">
      <div>
        <h1><FormattedMessage id="login.title" /></h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><FormattedMessage id="login.username" /></Form.Label>
            <Form.Control type="text" value = {usuario} onChange={handleInputUsuario}/>

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><FormattedMessage id="login.password" /></Form.Label>
            <Form.Control type="password" value = {password} onChange={handleInputContraseña}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            <FormattedMessage id="login.submit" />
          </Button>
          <Button variant="danger" type="button" onClick={handleCancel}>
            <FormattedMessage id="login.cancel" />
          </Button>
          {error && <p className = "error">{error}</p>}
        </Form>
      </div>
    </div>
  );
}

export default Login;