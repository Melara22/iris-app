import React, { Component } from 'react';
import axios from 'axios';

import './Post2.css';
import Modals from '../../Componentes/modals';
import Menu from '../../Componentes/menu';
/*Imagenes*/
import compartir from '../../Assets/Iconos/compartir.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';

import share from '../../Assets/Iconos/retweet.png';
import favorite from '../../Assets/Iconos/favorite.png';
import views from '../../Assets/Iconos/views.png';

import post3 from '../../Assets/img/mara/post3.png';
import logo from '../../Assets/img/mara/logo.png';
import fb from '../../Assets/Iconos/twitterlogo-color.png';
import post1 from '../../Assets/img/twitter.png';


const API = 'https://api-inxights-staging.herokuapp.com/public/v1/twitter/posts?username=prensagrafica';


class Datos extends Component {
  constructor (props){
    super(props);

    this.state = {
      posts2: [],
    };
 }
    componentDidMount(){
      axios.get(API)
      .then(res => {
        const posts2 = res.data;
        this.setState({ posts2 });
      })
    }

  render() {
    return (
      <div className="Datos">
               <div className="row">
                         
                        <div className="col-md-3 col-lg-3">
                          <div className="post-view">

                              <div className="col-md-4 logo-pagina">
                              <h2><img src={fb} />Holaa</h2>
                              </div>

                              <div className="col-md-8 texto-pagina">
                              
                             
                              </div>

                          <div className="columns-post">
                       

                            {this.state.posts2.map(post2 => 

                             <div className="thumbnail">
                                  <div className="caption">
                                      <h5>{post2.created_at}</h5>
                                      <p>{post2.text}</p>
                                    </div>
                                  <img src={post1} />
                                   <div className="opciones">
                                         <a>{post2.retweet_count} <img src={share} alt="share" /></a>
                                        <a>{post2.favorite_count} <img src={favorite} alt="share" /></a>
                                        
                                  </div>
                                
                              </div>
                          
                                )}

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
    );
  }
}

export default Datos;
