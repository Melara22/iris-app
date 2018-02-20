import React, { Component } from 'react';
import './Buscar.css';
import Modals from '../../Componentes/modals';
/*Imagenes*/
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';
import fb from '../../Assets/Iconos/fb.png';
import settings from '../../Assets/Iconos/settings.png';
import post3 from '../../Assets/img/prew.PNG';
import post1 from '../../Assets/img/mara/post1.png';



class DashboardBuscar extends Component {
  render() {
    return (
      <div className="DashboardBuscar">
        
          <section className="dash">
              <div className="container buscar-contenedor">

                <div className="starter-template">

                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                          <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                            <img src={logomenu} alt="logo" />
                            </a>
                          </div>
                          <ul className="nav navbar-nav navbar-right">
                            <li><a className="icon-menu" href="#"><img src={settings}  data-toggle="modal" data-target="#myModal3" /></a></li>
                            <li><a className="icon-menu" href="#"><img src={notifi} /></a></li>
                            <li><a className="icon-menu"><img src={nuevo} data-toggle="modal" data-target="#myModal2"/></a></li>
                            <li className="separacion"><a className="icon-menu" href="#"><img src={compartir} /></a></li>
                            <li className="dropdown user-link" >
                                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                      
                                      <div className="img-rounded profile-img"></div>
                                      Oscar Melara<span className="caret"></span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li>
                                          <a href="#">Cerrar Sesion</a>
                                      </li>
                                      <li>
                                          <a href="#">Ajustes</a>
                                      </li>
                                    
                                  </ul>
                              </li>
                            
                          </ul>
                        </div>
                      </nav>
                </div>

                     <div className="row">
                          <div className="col-xs-12 col-md-12 col-lg-12 section-buscar" align="center">
                            <form>
                             <div className="form-group">
                              <input className="form-control input-buscar" placeholder="Buscar" />
                             </div>
                             </form>
                          <Modals />
                          </div>  
                    </div>
                    

                    <div className=" mis-post">
                      <div className="row">
                        <div className="col-md-3 col-lg-3">
                           <div id="header">
                              <ul className="a">
                                <li><h3>Tendecias Nacionales</h3></li>
                              </ul>
                            </div>
                            <div id="content">
                              <div id="scrollableContent">
                                <div id="paddingContent">  
                                    <div className="awe-overlay-bg-single "></div>
                              
                                        <div className="prew">
                                                 <div className="col-md-6">
                                                  <div className="thumbnail">
                                               
                                                  <img src={post1} alt="Lights" />
                                                  <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                  </div>
                                              
                                              </div>
                                           </div>

                                            <div className="col-md-6">
                                             <div className="thumbnail">
                                               
                                                  <img src={post1} alt="Lights" />
                                                  <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                  </div>
                                              
                                              </div>
                                           </div>
                                        </div>
                                
                                  </div>
                                </div>
                              </div>

                              <div id="footer">
                                   <div className="page">
                                        <h4><img src={fb} alt="fbicon"/>La Mara Anda Diciendo</h4>
                              </div>       
                            </div>

                             
                          </div>

                                                  <div className="col-md-3 col-lg-3">
                           <div id="header">
                              <ul className="a">
                                <li><h3>Tendecias Nacionales</h3></li>
                              </ul>
                            </div>
                            <div id="content">
                              <div id="scrollableContent">
                                <div id="paddingContent">  
                                    <div className="awe-overlay-bg-single "></div>
                              
                                        <div className="prew">
                                                 <div className="col-md-6">
                                                  <div className="thumbnail">
                                               
                                                  <img src={post1} alt="Lights" />
                                                  <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                  </div>
                                              
                                              </div>
                                           </div>

                                            <div className="col-md-6">
                                             <div className="thumbnail">
                                               
                                                  <img src={post1} alt="Lights" />
                                                  <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                  </div>
                                              
                                              </div>
                                           </div>
                                        </div>
                                
                                  </div>
                                </div>
                              </div>

                              <div id="footer">
                                   <div className="page">
                                        <h4><img src={fb} alt="fbicon"/>La Mara Anda Diciendo</h4>
                              </div>       
                            </div>

                             
                          </div>
                                                  <div className="col-md-3 col-lg-3">
                           <div id="header">
                              <ul className="a">
                                <li><h3>Tendecias Nacionales</h3></li>
                              </ul>
                            </div>
                            <div id="content">
                              <div id="scrollableContent">
                                <div id="paddingContent">  
                                    <div className="awe-overlay-bg-single "></div>
                              
                                        <div className="prew">
                                                 <div className="col-md-6">
                                                  <div className="thumbnail">
                                               
                                                  <img src={post1} alt="Lights" />
                                                  <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                  </div>
                                              
                                              </div>
                                           </div>

                                            <div className="col-md-6">
                                             <div className="thumbnail">
                                               
                                                  <img src={post1} alt="Lights" />
                                                  <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                  </div>
                                              
                                              </div>
                                           </div>
                                        </div>
                                
                                  </div>
                                </div>
                              </div>

                              <div id="footer">
                                   <div className="page">
                                        <h4><img src={fb} alt="fbicon"/>La Mara Anda Diciendo</h4>
                              </div>       
                            </div>

                             
                          </div>
                                                  <div className="col-md-3 col-lg-3">
                           <div id="header">
                              <ul className="a">
                                <li><h3>Tendecias Nacionales</h3></li>
                              </ul>
                            </div>
                            <div id="content">
                              <div id="scrollableContent">
                                <div id="paddingContent">  
                                    <div className="awe-overlay-bg-single "></div>
                              
                                        <div className="prew">
                                                 <div className="col-md-6">
                                                  <div className="thumbnail">
                                               
                                                  <img src={post1} alt="Lights" />
                                                  <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                  </div>
                                              
                                              </div>
                                           </div>

                                            <div className="col-md-6">
                                             <div className="thumbnail">
                                               
                                                  <img src={post1} alt="Lights" />
                                                  <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                  </div>
                                              
                                              </div>
                                           </div>
                                        </div>
                                
                                  </div>
                                </div>
                              </div>

                              <div id="footer">
                                   <div className="page">
                                        <h4><img src={fb} alt="fbicon"/>La Mara Anda Diciendo</h4>
                              </div>       
                            </div>

                             
                          </div>
                      </div>



              </div>
          </div>
        </section>

      </div>
    );
  }
}

export default DashboardBuscar;
