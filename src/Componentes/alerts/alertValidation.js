import React, { Component } from 'react';
import '../../Assets/ComponentesCSS/alerts.css';
import {Redirect} from 'react-router-dom'

import logo from '../../Assets/Iconos/logo_login.png';
import '../../Assets/js/script.js';
import{signIn, signOut, createUser, extermin, verfSessionlog, actionval} from '../../Assets/js/script.js';


class AlertValidation extends Component {
  render() {
  	var url = window.location.href;
		var id = url.substring(url.lastIndexOf('/') + 1 );
		if (id != "DashboardBuscar" || id != "dashboard_columns" || id != "Dashboard"){
		 
    	return (			  
	        <div className="alert alert-danger alert-dismissible">
	            <p>Hubo un error al actualizar tu Dashboard, Verifica si los campos estan correctos <a href="" className="close" data-dismiss="alert" aria-label="close"> &times;</a>
	         </p>
	        </div>
		);  
    }
    else{
		return (			  
	        <div className="alert alert-danger alert-dismissible">
	            <p>Hubo un error al crear tu Dashboard, Verifica si los campos estan correctos <a href="" className="close" data-dismiss="alert" aria-label="close"> &times;</a>
	         </p>
	        </div>
		); 

    }
  }
}

export default AlertValidation;
