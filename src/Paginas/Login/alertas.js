import React, { Component } from 'react';
import './Login.css';
import '../../Assets/ComponentesCSS/alerts.css';
import {Redirect} from 'react-router-dom'

import logo from '../../Assets/Iconos/logo_login.png';
import '../../Assets/js/script.js';
import{signIn, signOut, createUser, extermin, verfSessionlog} from '../../Assets/js/script.js';


class AlertSuccess extends Component {
  render() {
    return (

         <div className="alert alert-danger alert-dismissible">
                <p>Los datos ingresados son incorrectos. <a href="" className="close" data-dismiss="alert" aria-label="close"> &times;</a>
             </p>
            </div>


    );
  }
}

export default AlertSuccess;
