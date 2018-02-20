import React, { Component } from 'react';

/*CSS*/
import './dashboard_Post.css';

import Menu from '../../Componentes/menu';
import Cards from '../../Componentes/Cards';
import Columns from '../../Componentes/Columns';

/*Imagenes*/
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';

import like from '../../Assets/Iconos/likes.png';
import share from '../../Assets/Iconos/retweet.png';
import favorite from '../../Assets/Iconos/favorite.png';
import post1 from '../../Assets/img/twitter.png';

import arrow from '../../Assets/Iconos/arrow.png';
import fb from '../../Assets/Iconos/fb.png';




class Dashboard_Post extends Component {

  render() {
    
    return (
      <div className="Dashboard_Post">
        
          <section className="dash">
              <div className="container postainer">

                <div className="starter-template">

                     <Menu/>

                </div>
                < Columns />
                    
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard_Post;