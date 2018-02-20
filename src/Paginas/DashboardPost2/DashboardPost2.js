import React, { Component } from 'react';
import axios from 'axios';

import './Post2.css';
import Modals from '../../Componentes/modals';
import Menu from '../../Componentes/menu';
import Datos from './Datos';
/*Imagenes*/

import compartir from '../../Assets/Iconos/compartir.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';
import like from '../../Assets/Iconos/likes.png';
import share from '../../Assets/Iconos/retweet.png';
import favorite from '../../Assets/Iconos/favorite.png';
import views from '../../Assets/Iconos/views.png';

import post3 from '../../Assets/img/mara/post3.png';
import logo from '../../Assets/img/mara/logo.png';
import fb from '../../Assets/Iconos/twitterlogo-color.png';
import post1 from '../../Assets/img/twitter.png';




class DashboardPost2 extends Component {
  

  render() {
    return (
      <div className="DashboardPost2">
        <Menu/>
          <section className="dash">
              <div className="container postainer">
                  <div className="starter-template">
                  </div>
                    <Datos />
             </div>
        
        </section>

      </div>
    );
  }
}

export default DashboardPost2;
