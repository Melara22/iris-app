import React, { Component } from 'react';
import '../../Assets/ComponentesCSS/alerts.css';
import {Redirect} from 'react-router-dom'

import logo from '../../Assets/Iconos/logo_login.png';
import '../../Assets/js/script.js';
import{signIn, signOut, createUser, extermin, verfSessionlog, actionval} from '../../Assets/js/script.js';


class AlertAdd extends Component {
  render() {
  	var url = window.location.href;
		var id = url.substring(url.lastIndexOf('/') + 1 );
		if (id != "DashboardBuscar" || id != "dashboard_columns" || id != "Dashboard"){
		 
    	return (			  
	        <div className="alert alert-success" id="login-success">
              <p id="validatealertdash">Red social agregada satisfactoriamente <a href="" className="close" aria-label="close"> &#10004;</a></p>
            </div>
		);  
    }
    else{
		return (			  
	        <div className="alert alert-success" id="login-success">
              <p id="validatealertdash">Red social agregada satisfactoriamente <a href="" className="close" aria-label="close"> &#10004;</a></p>
            </div>
		); 

    }
  }
}

export default AlertAdd;
