import React, { Component } from 'react';
import './Buscar.css';
import Modals from '../../Componentes/modals';
<<<<<<< HEAD

=======
import IconLoading from '../../Componentes/icons/IconLoading';
>>>>>>> 34487437933f174e23472dce75b364d6e84f3334
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
import * as firebase from 'firebase';
import {config} from '../../Assets/js/cons.js';
import {app} from '../../Assets/js/script.js';




class DashboardBuscar extends Component {

  constructor(){
    super(props);

    this.state = { 
    users: [],  
    }

    this.state = {
      loading: []
    };
  }

    componentDidMount() {
        const self = this;
        const rootRef = app.database().ref().child('users');
        const userRef = rootRef.child('vavava');
        rootRef.once('value', function(snapshot){
          snapshot.forEach(function(childSnapshot){
              self.setState({
                  users: self.state.users.concat(childSnapshot.val())
              });
          });
        });
          setTimeout(() => {
            this.setState({loading: [1, 2, 3]});
          }, 2000 );
        }





  render() {
     const List = (props) => {


    return (
        <ul>
        { props.users.map( (user,i) => { 

         const { uid, email } = user;

         return (

         <li key = { i } >
         <div>{ uid }</div>
        <div> { email } </div>
         </li>
         )


        })}
        </ul>
    )
}
    return (
      this.state.loading.length <= 0 ? <IconLoading /> : (
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
                                      
                                      <div id="ultradiv" className="img-rounded profile-img"></div>
                                      <span id="namelog"></span><span className="caret"></span>
                                  </a>
                                 <List users = { this.state.users } />
                                  <ul className="dropdown-menu">
                                      <li>
                                          <a >Avvavav</a>
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
                                <li><h3>Nombre DashBoard</h3></li>
                                
                              </ul>
                                <hr />
                            </div>
                            <div id="content">
                              <div id="scrollableContent">
                                <div id="paddingContent">  
                                    
                              
                                        <div className="prew">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ad at. Nemo vero rerum, excepturi cum ut ea eos, voluptates aperiam sunt culpa, voluptate deleniti earum harum, nulla hic quisquam</p>
                                        </div>
                                
                                  </div>
                                </div>
                              </div>

                              <div id="footer">
                                   <div className="page">
                                          </div>       
                            </div>

                             
                          </div>
                      </div>



              </div>
          </div>
        </section>

      </div>
      )
    );
  }
}

export default DashboardBuscar;
