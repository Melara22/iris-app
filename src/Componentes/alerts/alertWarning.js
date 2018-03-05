import React, { Component } from 'react';
import '../../Assets/ComponentesCSS/alerts.css';
import {Redirect} from 'react-router-dom';

import logo from '../../Assets/Iconos/logo_login.png';
import '../../Assets/js/script.js';


class AlertWarning extends Component {
  render() {
    return (

  
        <div className="alert alert-warning alert-warning-lg">
			  <p>Ha ocurrido un error en la conexion, intente nuevamente!</p>
			</div>



    );
  }
}

export default AlertWarning;