import React, { Component } from 'react';
import './Login.css';
import {Redirect} from 'react-router-dom'

import logo from '../../Assets/Iconos/logo_login.png';
import '../../Assets/js/script.js';
import{signIn, signOut, createUser, extermin, verfSessionlog} from '../../Assets/js/script.js';


class Login extends Component {
  render() {
    verfSessionlog();
    return (
      <div className="Login">
        
  <section className="login">
    <div className="container">

      <div className="contenedor">
        <div className="row login-container">
          <div className="col-md-4 login-menu">
            <div className="contenido-login">
                <img src={logo} alt="logo" />
                  <h1>Iniciar sesión</h1>
                    <p>Asegurate que tu cuenta sea elaniin.com para poder ingresar.</p>
                    <button id="login" onClick={signIn} className="btn btn-primary boton-image monBouton">Sign up with Google</button>

                    <div className="marca">
                    <p>Powered by <a className="url-marca" href="">Elaniin </a>&<a className="url-marca" href=""> Inxights</a></p>
                    </div>
                 </div>
            </div>
          
              <div className="col-md-8 login-texto">
                <h1>¡Bienvenido a Iris!</h1>
                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>

    </div>
    </section>
      </div>
    );
  }
}

export default Login;
