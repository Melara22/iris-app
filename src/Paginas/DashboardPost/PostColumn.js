import React, { Component } from 'react';
import axios  from 'axios';
import './Post.css';
import Datos from './Datos';
import Menu from '../../Componentes/menu';
import Modals from '../../Componentes/modals';
/*Imagenes*/
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';

import share from '../../Assets/Iconos/retweet.png';
import favorite from '../../Assets/Iconos/favorite.png';
import post1 from '../../Assets/img/twitter.png';

import arrow from '../../Assets/Iconos/arrow.png';
import fb from '../../Assets/Iconos/fb.png';

const API = 'https://api-inxights-staging.herokuapp.com/public/v1/twitter/posts?username=prensagrafica';


class DashboardPost extends Component {
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
      <div className="DashboardPost">
        
          <section className="dash">
              <div className="container postainer">

                <div className="starter-template">

                     <Menu/>

                </div>
                <Datos />
                    
          </div>
        </section>
      </div>
    );
  }
}

export default DashboardPost;