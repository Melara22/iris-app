import React, { Component } from 'react';
import axios  from 'axios';
import './Post.css';
import Menu from '../../Componentes/menu';
import Modals from '../../Componentes/modals';
/*Imagenes*/
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';
import like from '../../Assets/Iconos/likes.png';
import share from '../../Assets/Iconos/retweet.png';
import favorite from '../../Assets/Iconos/favorite.png';
import post1 from '../../Assets/img/twitter.png';

import arrow from '../../Assets/Iconos/arrow.png';
import fb from '../../Assets/Iconos/fb.png';

const API = 'https://api-inxights-staging.herokuapp.com/public/v1/twitter/posts?username=prensagrafica';


class Datos extends Component {
  constructor(props){
    super(props);

    this.state = {
        posts: [],
    };
  }

    componentDidMount(){
    axios.get(API)
    .then(res => {
      const posts = res.data;
      this.setState({ posts }); 
    })
  }


  render() {
    
    return (
      <div className="Datos">
        
    

                     <div className="row " align="center">

                      {this.state.posts.map(post => 

                        <div className="col-xs-12 col-md-15 space ">
                              <div className="card">
                                  <a className="img-card">
                                  <img src={post1} />
                                </a>
                                  <div className="card-content">
                                 
                                      <h4 className="card-title"><img src={fb} alt="icon-fb" />  </h4>
                                    
                                       <p className="card-text">
                                         {post.text}
                                      </p>

                                      <div className="opciones">
                                        <a>{post.retweet_count} <img src={share} alt="share" /></a>
                                        <a>{post.favorite_count} <img src={favorite} alt="share" /></a>
                                       
                                        
                                        <a className="float-opcion">{post.created_at}</a>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>
                             
                             )}

                         <div className="col-xs-12 col-md-15">
                              <div className="card post-nuevo">
                                  <a className="img-card">
                                  
                                </a>
                                  <div className="content-post" align="center">
                                      <a data-toggle="modal" data-target="#myModal">

                                     <img src={agregar} alt="agregar" />
                                      </a>
                                      <p>Agregar una pagina</p>

                                      
                                  </div>
                              
                              </div>
                              <Modals />
                          </div>
                    </div>  
       
      </div>
    );
  }
}

export default Datos;