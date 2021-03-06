import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import React from 'react'
import './NavBar.css';
import "C:/tr/myapp/crud/node_modules/jquery/dist/jquery.min.js";
import "C:/tr/myapp/crud/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "C:/tr/myapp/crud/node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#/formulario">Usuários</a>
                </li>
                </ul>

            </div>
            </div>
        </nav>  
    )
}