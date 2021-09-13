import React, {Component, useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input, Card, Table } from 'reactstrap';
import Axios from 'axios'


function List(){ 
    const [userList, setUserList] = useState([])

    useEffect(() => {
    Axios.get("http://localhost:3001/usuarios").then((response)=>{
            setUserList(response.data)
        })
    },[])
    

    return(

    <div>
        <Table>
        <thead>
            <tr>
            <th>#</th>
            <th>Email</th>
            <th>Senha</th>
            </tr>
        </thead>
        <tbody>
        {userList.map((val)=>{
            return(
                <tr>
                <td>{val.id}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                </tr>
            )
        })}       
        </tbody>
        </Table>
    </div>

      
    )                
    
}

export default List;