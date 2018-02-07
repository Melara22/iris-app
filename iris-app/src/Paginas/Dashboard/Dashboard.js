import React, { Component } from 'react';
import './Dashboard.css';
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import imgstate from '../../Assets/Iconos/blank_state.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        
<section className="dash">
    <div className="container">

      <div className="starter-template">
          <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
          <img src={logomenu} alt="logo" />
          </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          
          <li><a className="icon-menu" href="#"><img src={notifi} /></a></li>
          <li><a className="icon-menu" href="#"><img src={nuevo} /></a></li>
          <li className="separacion"><a className="icon-menu" href="#"><img src={compartir} /></a></li>
          
        </ul>
      </div>
    </nav>


      <div className="row agregar-dash">
        <div className="center-block state-div">
          <img src={imgstate} alt="nostate"/>

          <h2>no tienes dashboards por mostrar</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Aliquam interdum dolor neque, ut aliquet leo cursus at.
            In laoreet mi sed nisl ullamcorper tempus. Suspendisse fermentum varius dictum. Nulla sed metus turpis.</p>

            <a className="btn btn-primary btn-green">Crear nuevo</a>
        </div>
      </div>
      </div>



    </div>
    </section>
      </div>
    );
  }
}

export default Dashboard;
