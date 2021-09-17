import React, { useState, useEffect}  from 'react'
import { Modal, Container, ModalFooter,ModalBody,Button, Label, Input, Card, Table } from 'reactstrap';
import Axios from 'axios'
import './Form.css';
import Layout from './layout'

let contItens = 0

function Formulario(){ 

    
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userList, setUserList] = useState([])
    const [idUser, setIdUser] = useState(0)
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
        //setUserEmail('')
        //setUserPassword(''
    };



    const submitUser = () =>{
        Axios.post("http://localhost:3001/usuarios", {
            email : userEmail, 
            password  : userPassword
        }).then(()=>{
            setUserList([...userList], {email : userEmail, password : userPassword})
        }).catch((err)=>{
           // console.log(err)
        })
        setUserList([...userList], {email : userEmail, password : userPassword})
        

        contItens++
    }

    const deleteUser = (id) =>{
        Axios.delete("http://localhost:3001/usuarios/"+id)
        .then(()=>{
            setUserList([...userList], {email : userEmail, password : userPassword})
        }).catch((err)=>{
           // console.log(err)
        })

        contItens--
    }

    const editUser = (id) =>{
        Axios.put("http://localhost:3001/usuarios/"+id,{
            email : userEmail, 
            password  : userPassword,
            id: idUser
        })
        .then(()=>{
            setUserList([...userList], {email : userEmail, password : userPassword})
        }).catch((err)=>{
           // console.log(err)
        })

        contItens--
    }

    useEffect(() => {

    Axios.get("http://localhost:3001/usuarios").then((response)=>{
            setUserList(response.data)
            //console.log(userList)
        })
        
    },[contItens])
        
    return(
    <Layout>
    <div>
        <h3>Novo Usuário</h3>
        <Card>
            <div class="card-body">
                <Label for="exampleEmail">Email</Label>
                <Input className="mt-2 col col-md-6" type="email" name="email" id="exampleEmail" onChange={(e)=>{
                    setUserEmail(e.target.value)
                }} />
                <Label for="examplePassword" className="mt-3">Password</Label>
                <Input className="mt-2 col col-xs-2" type="password" name="password" id="examplePassword" onChange={(e)=>{
                    setUserPassword(e.target.value)
                }} />
            <div class="col text-center">
            <   Button color="success"  className="mt-4 col col-md-2" onClick={submitUser}>Submit</Button>
            </div>
            </div>
        </Card>
        <Table>
        <thead>
            <tr>
            <th>#</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {userList.map((val)=>{
            return(
                <tr>
                <td>{val.id}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>
                    <button onClick={() => {deleteUser(val.id)}} className="btn btn-danger mr-2 bit">Deletar
                    <i className="fa fa-trash"></i>
                    </button>
                    <button className="btn btn-warning ml-2" onClick={()=>{toggle(); setIdUser(val.id); setUserEmail(val.email); setUserPassword(val.password);}}>Editar
                    <i className="fa fa-pencil"></i>
                    </button>
                </td>
                </tr>
            )
            })}       
        </tbody>
        </Table>
            <Modal isOpen={modal} toggle={toggle}>
            <h3 className="p-3">   Novo Usuário</h3>
            <Card>
            <div class="card-body">
                <Label for="exampleEmail">Email</Label>
                <Input className="mt-4 col col-md-6" type="email" value={userEmail} name="email" id="editEmail" onChange={(e)=>{
                    setUserEmail(e.target.value)
                }} />
                <Label for="examplePassword">Password</Label>
                <Input className="mt-4 col col-xs-2" type="password" value={userPassword} name="password" id="editPassword" onChange={(e)=>{
                    setUserPassword(e.target.value)
                }} />
            <div class="col text-center">
            <div class='col-xs-3'>
                <Button color="success"  className="col col-md-2 mt-3 bit" onClick={() => {editUser(idUser); toggle()}}>Submit</Button>
                <Button color="danger"  className="col col-md-2 mt-3" onClick={toggle}>Close</Button>
            </div>
            </div>
            </div>
            </Card>
            </Modal>               
        </div>
        </Layout>                   
    );

}


export default Formulario;