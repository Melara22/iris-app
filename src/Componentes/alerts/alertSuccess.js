import React, { Component } from 'react';
import '../../Assets/ComponentesCSS/alerts.css';
import {Redirect} from 'react-router-dom'

import logo from '../../Assets/Iconos/logo_login.png';
import '../../Assets/js/script.js';
import{signIn, signOut, createUser, extermin, verfSessionlog} from '../../Assets/js/script.js';


class AlertSuccess extends Component {
  render() {
    return (

        <div className="alert alert-success" id="login-success">
             
              <p>Cuenta verificada ¡Bienvenido! <a href="" className="close" aria-label="close"> &#10004;</a></p>
            </div>


    );
  }
}

export default AlertSuccess;
