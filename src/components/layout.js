import React from 'react'
import Nav from './navbar';
import { Container } from 'reactstrap';


export default function Layout(props){
    return(
        <div>
            <Nav />           
            <Container>
                {props.children}
                {console.log(props.children)}
            </Container>
        </div>

    )
}