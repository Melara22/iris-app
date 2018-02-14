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
import share from '../../Assets/Iconos/share.png';
import views from '../../Assets/Iconos/views.png';
import post1 from '../../Assets/img/mara/post1.png';
import post2 from '../../Assets/img/mara/post2.jpg';
import post3 from '../../Assets/img/mara/post3.png';
import arrow from '../../Assets/Iconos/arrow.png';
import fb from '../../Assets/Iconos/fb.png';




class DashboardPost extends Component {


  state = {
    persons : []
  }

  componentDidMount(){
    axios.get('https://api-inxights-staging.herokuapp.com/public/v1/facebook/posts'
    )
    .then(res => {
      const persons = res.data;
      this.setState({ persons }); 
    })
  }

  render() {
    return (
      <div className="DashboardPost">
        
          <section className="dash">
              <div className="container postainer">

                <div className="starter-template">

                     <Menu/>

                </div>

                     <div className="row espacio-post" align="center">

                         {this.state.persons.map(person => 
                              <div className="col-xs-12 col-md-15">
                              <div className="card">
                                  <a className="img-card">
                                  <img src={post2} />
                                </a>
                                  <div className="card-content">
                              
                                      <h4 className="card-title"><img src={fb} alt="icon-fb" /> {person.name} </h4>
                                      <p className="card-text">
                                         lore ipsum
                                      </p>

                                      <div className="opciones">
                                        <a>125 <img src={like} alt="like" /></a>
                                        <a>2k <img src={share} alt="share" /> </a>
                                        <a>1k <img src={views} alt="view"/></a>
                                        <a className="float-opcion">8 febrero 2018, 15:40</a>
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
        </section>
      </div>
    );
  }
}

export default DashboardPost;
