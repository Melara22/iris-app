 
import React, { Component } from 'react';
import Modals from './modals';
import './menu.css';


import logomenu from '../Assets/Iconos/logo_fondo@2x.png';
import imgstate from '../Assets/Iconos/blank_state.png';
import notifi from '../Assets/Iconos/notificaciones.png';
import nuevo from '../Assets/Iconos/nuevo.png';
import compartir from '../Assets/Iconos/compartir.png';
import arrow from '../Assets/Iconos/arrow.png';
import{signOut, verfSession,getData} from '../Assets/js/script.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class Menu2 extends Component {
  render() {
    verfSession();
    
    getData();
    return (
      <div className="Menu2">
         
           <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                          <div className="navbar-header">
                            <Link style={{textDecoration:"none"}} to="/Dashboard"><a className="navbar-brand" href="/DashboardBuscar">
                            <img src={logomenu} alt="logo" /></a></Link>  
                          </div>
                          

                          <ul className="nav navbar-nav navbar-right">
                            
                            <li><a className="icon-menu" href=""><img class="menuicon" src={notifi} alt="icon-c1" /></a></li>
                            <li className=""><a style ={{cursor: "pointer"}}className="icon-menu"><img class="menuicon" src={nuevo} alt="icon-2" data-toggle="modal" data-target="#myModal2"/></a></li>
                            <li className="dropdown user-link" >
                                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                      <div id="ultradiv" className="img-rounded profile-img"><img style={{width:'30px', borderRadius: '50%'}}/></div>
                                      <span id="namelog"/><span className="caret"></span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li>
                                          <a onClick={signOut}>Cerrar Sesion</a>
                                      </li>
                                      <li>
                                          <a href="">Ajustes</a>
                                      </li>
                                    
                                  </ul>
                              </li>
                            
                          </ul>
                        </div>
                      </nav>
          <div align="center">
        <Modals />
         </div>
      </div>


    );
  }
}

export default Menu2;






