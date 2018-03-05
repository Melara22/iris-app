import React, { Component } from 'react';
import '../../Assets/ComponentesCSS/alerts.css';
import {Redirect} from 'react-router-dom'

import logo from '../../Assets/Iconos/logo_login.png';
import '../../Assets/js/script.js';
import{signIn, signOut, createUser, extermin, verfSessionlog} from '../../Assets/js/script.js';


class AlertValidation extends Component {
  render() {
    return (

  
            <div className="alert alert-danger alert-dismissible">
                <p>Hubo un error al crear tu Dashboard, verifica que todos los campos esten correctos <a href="" className="close" data-dismiss="alert" aria-label="close"> &times;</a>
             </p>
            </div>



    );
  }
}

export default AlertValidation;
