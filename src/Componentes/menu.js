 
import React, { Component } from 'react';
import Modals from './modals';


import logomenu from '../Assets/Iconos/logo_fondo@2x.png';
import imgstate from '../Assets/Iconos/blank_state.png';
import notifi from '../Assets/Iconos/notificaciones.png';
import nuevo from '../Assets/Iconos/nuevo.png';
import compartir from '../Assets/Iconos/compartir.png';
import arrow from '../Assets/Iconos/arrow.png';



class Menu extends Component {
  render() {

    return (
      <div className="Menu">
         
           <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                          <div className="navbar-header">
                            <a className="navbar-brand" href="">
                            <img src={logomenu} alt="logo" />
                            </a>
                          </div>
                          <ul className="nav navbar-nav nombre-dashboard">
                            
                             <li className="dropdown user-link" >
                              <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                  Humor y Memes <img src={arrow} alt="hola" />
                              </a>
                              <ul className="dropdown-menu">
                                  <li>
                                      <a href="">Humor y memes</a>
                                  </li>
                                  <li>
                                      <a href="">Noticias Nacionales</a>
                                  </li>
                                
                              </ul>
                          </li>
                            
                          </ul>

                          <ul className="nav navbar-nav navbar-right">
                            
                            <li><a className="icon-menu" href=""><img src={notifi} alt="icon-c1" /></a></li>
                            <li><a className="icon-menu"><img src={nuevo} alt="icon-2" data-toggle="modal" data-target="#myModal2"/></a></li>
                            <li className="separacion"><a className="icon-menu" href=""><img src={compartir} alt="icon-compártir" /></a></li>
                            <li className="dropdown user-link" >
                                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                      
                                      <div className="img-rounded profile-img"></div>
                                      Oscar Melara<span className="caret"></span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li>
                                          <a href="">Cerrar Sesion</a>
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

export default Menu;






