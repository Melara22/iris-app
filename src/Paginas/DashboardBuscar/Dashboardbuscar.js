import React, { Component } from 'react';
import './Buscar.css';
import '../../Componentes/menu.css';
import Modals from '../../Componentes/modals';
import IconLoading from '../../Componentes/icons/IconLoading';
/*Imagenes*/
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';
import fb from '../../Assets/Iconos/fb.png';
import animate from '../../animate.css'
import settings from '../../Assets/Iconos/settings.png';
import post3 from '../../Assets/img/prew.PNG';
import post1 from '../../Assets/img/mara/post1.png';
import * as firebase from 'firebase';
import {config} from '../../Assets/js/cons.js';
import imgstate from '../../Assets/Iconos/blank_state.png';
import {app, verifyDashboards2, signOut, verfSession,getData,getDashData} from '../../Assets/js/script.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import {MY_ROUTE} from '../../routes.js'
let List


/**
function timeout() {
    setTimeout(function () {
        alert('Hello');
        timeout();
    }, 3000);
}
    timeout();
    **/
class DashboardBuscar extends Component {

  constructor(props){
    super(props);

    this.state = { 
    dashs: [],  
    loading: [],
    search: []
    };

    this.filterVal =false;
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
  }

    componentDidMount() {
        const self = this;
        const rootRef = app.database().ref().child('users');
        const userRef = rootRef.child('vavava');
        firebase.auth().onAuthStateChanged(function(user) {
          rootRef.once('value', function(snapshot){
            snapshot.forEach(function(childSnapshot){
              var uskey = childSnapshot.key;
              var useremail = childSnapshot.child("email").val();
              var namelog = firebase.auth().currentUser;
                if (namelog.email == useremail) {
                  var dashdirection=app.database().ref("users/"+uskey+"/Dashboard/");
                    dashdirection.once("value").then(function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                        self.setState({
                            dashs: self.state.dashs.concat(childSnapshot.val())
                        });
                      });
                    });
                }
                /**/
            });
          });
        });
          setTimeout(() => {
            this.setState({loading: [1, 2, 3]});
          }, 2000 );
        }





  render() {
    verfSession();
      List = (props) => {
     let filteredContact = props.dashs.filter(
        (dashs) => {
          return dashs.dname.toLowerCase().indexOf(this.state.search.toString().toLowerCase()) !== -1;          
        }
      );
    

    if(filteredContact.length > 0){
        getData();
        return (
              <div className=" mis-post">
                <div className="row">
                  
                                
                              
              { filteredContact.map( (user,i) => { 

               const { did, dname, ddescription } = user;

               return (
                <div className="col-md-3 col-lg-3" style={{marginBottom:"30px;"}} key = { i }>
                 
                 <div id="header">
                  <ul className="a">
                   <Link style={{textDecoration:"none"}} to={ MY_ROUTE.replace(':slug', did) }><li><h3><a id="dashname" style={{color:"#232b2b", 
                    textDecoration: "none"}}>{dname}</a></h3></li></Link>  
                   

                  </ul>
                    <hr/>
                </div>
                <div id="content">
                    <div id="scrollableContent">
                        <div id="paddingContent">  
                          <div className="prew">
                              <p>{ddescription}</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                  <div className="page"></div>       
                </div>
                </div>
               )


              })}
                  </div>
              </div>
          )
    }
    else{
      return ( <center class="animated pulse"><br/><img src={imgstate} alt="nostate" /><h2 style={{color:"#BDBDBD"}}>No results found</h2></center>);
    }
    
    
}
verifyDashboards2();
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
                            
                            <li ><a className="icon-menu" href=""><img class="menuicon" src={notifi} alt="icon-compártir" /></a></li>
                            <li className="separacion"><a className="icon-menu"><img class="menuicon" src={nuevo} alt="icon-2" data-toggle="modal" data-target="#myModal2"/></a></li>
                            <li className="dropdown user-link" >
                                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                      
                                      <div id="ultradiv" className="img-rounded profile-img"><img style={{width:'30px', borderRadius: '50%'}}/></div>
                                      <span id="namelog"/><span className="caret"></span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li>
                                          <a onClick={signOut}>Cerrar Sesion</a>
                                      </li>
                                      <li>
                                          <a href="">Ajustes</a>
                                      </li>
                                    
                                  </ul>
                              </li>
                            
                          </ul>
                        </div>
                      </nav>
                </div>

                     <div className="row">
                          <div className="col-xs-12 col-md-12 col-lg-12 section-buscar" align="center">
                            <form autocomplete="off">
                             <div className="form-group">
                              <input className="form-control input-buscar" id="searchbar" placeholder="Search" onChange={this.updateSearch.bind(this)}/>
                             </div>
                             </form>
                          <Modals />
                          </div>  
                    </div>
                     <List dashs = { this.state.dashs }/>
          </div>
        </section>

      </div>
      )
    );

  }

}


export default DashboardBuscar;
