import React, {Component, useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Card, Container } from 'reactstrap';
import Axios from 'axios'



function Formulario(){ 

    
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    

    const submitUser = () =>{
        Axios.post("http://localhost:3001/usuarios", {
            email : userEmail, 
            password  : userPassword
        }).then(()=>{
            console.log("uhul")
        }).catch((err)=>{
           // console.log(err)
        })
    }

    return(
        <div>
        <h3>Novo Usuário</h3>
        <Card>
            <div class="card-body">
                <Label for="exampleEmail">Email</Label>
                <Input className="mt-4 col col-md-6" type="email" name="email" id="exampleEmail" onChange={(e)=>{
                    setUserEmail(e.target.value)
                }} />
                <Label for="examplePassword">Password</Label>
                <Input className="mt-4 col col-xs-2" type="password" name="password" id="examplePassword" onChange={(e)=>{
                    setUserPassword(e.target.value)
                }} />
            <div class="col text-center">
            <   Button color="success" className="mt-4 col col-md-2" onClick={submitUser}>Submit</Button>
            </div>
            </div>
        </Card>
        </div>
    )                
    
}

export default Formulario;