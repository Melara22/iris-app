import React, { Component } from 'react';
import './Dashboardagregar.css';
import Modals from '../../Componentes/modals';

/*Imagenes*/
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';


class Dashboard2 extends Component {
  render() {
    return (
      <div className="Dashboard2">
        
    <section className="dash">
        <div className="container postainer">

          <div className="starter-template">

         <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="">
              <img src={logomenu} alt="logo" />
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              
              <li><a className="icon-menu" href=""><img src={notifi} alt="icon-c1" /></a></li>
              <li><a className="icon-menu"><img src={nuevo} alt="icon-2" data-toggle="modal" data-target="#myModal2" /></a></li>
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


          <div className="row row-post">
            <div className="col-xs-18 col-sm-3 col-md-3 post-div">
              <div className=" content-post">
                <a data-toggle="modal " data-target="#myModal">
                <img src={agregar} alt="icon-agregar" />
                </a>
                <h3>Agregar una pagina</h3>


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

export default Dashboard2;
