import React, { Component } from 'react';
import './Post2.css';
import Modals from '../../Componentes/modals';
import Menu from '../../Componentes/menu';
/*Imagenes*/

import compartir from '../../Assets/Iconos/compartir.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';
import like from '../../Assets/Iconos/likes.png';
import share from '../../Assets/Iconos/share.png';
import views from '../../Assets/Iconos/views.png';

import post3 from '../../Assets/img/mara/post3.png';
import logo from '../../Assets/img/mara/logo.png';
import fb from '../../Assets/Iconos/fb.png';




class DashboardPost2 extends Component {
  render() {
    return (
      <div className="DashboardPost2">
        <Menu/>
          <section className="dash">
              <div className="container postainer">

                <div className="starter-template">

              

                </div>

                  
                     <div className="row">
                         
                        <div className="col-md-3 col-lg-3">
                          <div className="post-view">

                              <div className="col-md-4 logo-pagina">
                              <img src={logo} className="img img-circle" />
                              </div>

                              <div className="col-md-8 texto-pagina">
                              
                              <h2><img src={fb} /> La Mara Anda Diciendo</h2>
                              </div>

                          <div className="columns-post">
                             <div className="thumbnail">
                                
                                  <div className="caption">
                                  <h5>8 Febrero 2018, 13:00</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Phasellus sed ante sed est laoreet iaculis ac sit amet est.
                                      Vestibulum lectus odio, egestas nec tellus a, dapibus efficitur sem.
                                       Maecenas fermentum pellentesque leo et convallis. Nam egestas metus eget orci pulvinar feugiat. </p>
                                      

                                  </div>
                                  <img src={post3} alt="img-post" />
                                  <div className="opciones">
                                        <a>125 <img src={like} alt="likes"/></a>
                                        <a>2k <img src={share} alt="share" /></a>
                                        <a>1k <img src={views} alt="views" /></a>
                                        
                                      </div>
                              </div>
                              <hr className="separador"/>

                             <div className="thumbnail">
                                <div className="caption">
                                <h5>8 Febrero 2018, 13:00</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Phasellus sed ante sed est laoreet iaculis ac sit amet est.
                                      Vestibulum lectus odio, egestas nec tellus a, dapibus efficitur sem.
                                       Maecenas fermentum pellentesque leo et convallis. Nam egestas metus eget orci pulvinar feugiat.</p>
                                  </div>
                                  <img src={post3} />
                                   <div className="opciones">
                                        <a>125 <img src={like} alt="likes"/></a>
                                        <a>2k <img src={share} alt="share" /></a>
                                        <a>1k <img src={views} alt="views" /></a>
                                        
                                      </div>
                                
                              </div>
                              <hr className="separador" />

                             <div className="thumbnail">
                                  <div className="caption">
                                      <h5>8 Febrero 2018, 13:00</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Phasellus sed ante sed est laoreet iaculis ac sit amet est.
                                      Vestibulum lectus odio, egestas nec tellus a, dapibus efficitur sem.
                                       Maecenas fermentum pellentesque leo et convallis. Nam egestas metus eget orci pulvinar feugiat.</p>
                                    </div>
                                  <img src={post3} />
                                   <div className="opciones">
                                        <a>125 <img src={like} alt="likes"/></a>
                                        <a>2k <img src={share} alt="share" /></a>
                                        <a>1k <img src={views} alt="views" /></a>
                                        
                                      </div>
                                
                              </div>
                              <hr className="separador"/>


                              </div>

                            </div>
                        </div>
                         
                          <div className="col-md-3 col-lg-3">
                          <div className="post-view">

                              <div className="col-md-4 logo-pagina">
                              <img src={logo} className="img img-circle" />
                              </div>

                              <div className="col-md-8 texto-pagina">
                              
                              <h2><img src={fb} /> La Mara Anda Diciendo</h2>
                              </div>

                          <div className="columns-post">
                             <div className="thumbnail">
                                
                                  <div className="caption">
                                  <h5>8 Febrero 2018, 13:00</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Phasellus sed ante sed est laoreet iaculis ac sit amet est.
                                      Vestibulum lectus odio, egestas nec tellus a, dapibus efficitur sem.
                                       Maecenas fermentum pellentesque leo et convallis. Nam egestas metus eget orci pulvinar feugiat. </p>
                                      

                                  </div>
                                  <img src={post3} alt="img-post" />
                                   <div className="opciones">
                                        <a>125 <img src={like} alt="likes"/></a>
                                        <a>2k <img src={share} alt="share" /></a>
                                        <a>1k <img src={views} alt="views" /></a>
                                        
                                      </div>
                              </div>
                              <hr className="separador"/>

                             <div className="thumbnail">
                                <div className="caption">
                                <h5>8 Febrero 2018, 13:00</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Phasellus sed ante sed est laoreet iaculis ac sit amet est.
                                      Vestibulum lectus odio, egestas nec tellus a, dapibus efficitur sem.
                                       Maecenas fermentum pellentesque leo et convallis. Nam egestas metus eget orci pulvinar feugiat.</p>
                                  </div>
                                  <img src={post3} />
                                   <div className="opciones">
                                        <a>125 <img src={like} alt="likes"/></a>
                                        <a>2k <img src={share} alt="share" /></a>
                                        <a>1k <img src={views} alt="views" /></a>
                                        
                                      </div>
                                
                              </div>
                              <hr className="separador" />

                             <div className="thumbnail">
                                  <div className="caption">
                                      <h5>8 Febrero 2018, 13:00</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Phasellus sed ante sed est laoreet iaculis ac sit amet est.
                                      Vestibulum lectus odio, egestas nec tellus a, dapibus efficitur sem.
                                       Maecenas fermentum pellentesque leo et convallis. Nam egestas metus eget orci pulvinar feugiat.</p>
                                    </div>
                                  <img src={post3} />
                                   <div className="opciones">
                                        <a>125 <img src={like} alt="likes"/></a>
                                        <a>2k <img src={share} alt="share" /></a>
                                        <a>1k <img src={views} alt="views" /></a>
                                        
                                      </div>
                                
                              </div>
                              <hr className="separador"/>


                              </div>

                            </div>
                        </div>
                         

                           <div className=" col-md-3 col-lg-3 post-div" align="center">
                            <div className="content-post">
                              <a data-toggle="modal" data-target="#myModal">
                              <img src={agregar} />
                              </a>
                              <p>Agregar una pagina</p>
                              <Modals />

                            </div>
                          </div>
                          
                    </div>
                  

          </div>
        
        </section>

      </div>
    );
  }
}

export default DashboardPost2;
