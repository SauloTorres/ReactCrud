import React from 'react'
import Layout from './layout'

export default function Home(){
    return(
        <Layout>
            <div class="jumbotron">
            <h1 class="display-4">Olá, Bem-Vindo ao CRUD React!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Cadastre-se ou Faça Login</a>
            </p>
            </div>
        </Layout>  
    );
}

