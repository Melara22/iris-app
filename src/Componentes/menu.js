 
import React, { Component } from 'react';
import Modals from './modals';
import './menu.css';

import AlertValidation from './alerts/alertValidation';

import AlertAdd from './alerts/alertAdd';
import logomenu from '../Assets/Iconos/logo_fondo@2x.png';
import imgstate from '../Assets/Iconos/blank_state.png';
import notifi from '../Assets/Iconos/notificaciones.png';
import settings from '../Assets/Iconos/settings.png';
import nuevo from '../Assets/Iconos/nuevo.png';
import compartir from '../Assets/Iconos/compartir.png';
import arrow from '../Assets/Iconos/arrow.png';
import{signOut, verfSession,getData,getDashData} from '../Assets/js/script.js';
import * as firebase from 'firebase';
import {config} from '../Assets/js/cons.js';
import {app, verifyDashboards2, refresh} from '../Assets/js/script.js';
import { YouAreOffline } from '../Componentes/alerts/alertOffline.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import {MY_ROUTE} from '../routes.js'
let List;

class Menu extends Component {
 constructor(props){
    super(props);

    this.state = { 
    users: [],  
    search: []
    };

    this.userLogged = false;
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
  }

    componentWillMount() {

    firebase.auth().onAuthStateChanged((user) => {
        if(!user){
          this.userLogged = !!user;
        }
        else{
          this.userLogged = !!user;
        } 
      });
    }

    componentDidMount() {
        const self = this;
        const rootRef = app.database().ref().child('users');
        const userRef = rootRef.child('vavava');
        firebase.auth().onAuthStateChanged(function(user) {
          rootRef.once('value', function(snapshot){
            snapshot.forEach(function(childSnapshot){
              if (user) {
              var uskey = childSnapshot.key;
              var useremail = childSnapshot.child("email").val();
              var namelog = firebase.auth().currentUser;
                if (namelog.email == useremail) {
                  var dashdirection=app.database().ref("users/"+uskey+"/Dashboard/");
                    dashdirection.once("value").then(function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                        self.setState({
                            users: self.state.users.concat(childSnapshot.val())
                        });
                      });
                    });
                }
                /**/
              }
            });
          });
        });
        }





  render() {
    let self = this;

     List = (props) => {
    let filteredContact = props.users.filter(
        (users) => {
          return users.dname.indexOf(this.state.search) !== -1;
        }
      );

    return (
            
        <ul className="dropdown-menu">              
                        
        { filteredContact.map( (user,i) => { 

         const { did, dname, ddescription } = user;

         return (
           <li key = { i }>
            <Link style={{textDecoration:"none"}}  to={ MY_ROUTE.replace(':slug', did) }><a style={{textDecoration:"none"}}  id="dashname" onClick={refresh}>{dname}</a></Link>
        </li>
         )


        })}
        </ul>
    )
}
    

    return (

      <div className="Menu">

                      {this.deprueba()}

          <div align="center">
        <Modals />
         </div>
      </div>


    );
  }
  deprueba(){
    if(this.userLogged == true){

    getData();
    getDashData();
               return(
                <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                          <div className="navbar-header">
                            <Link style={{textDecoration:"none"}} to="/Dashboard"><a className="navbar-brand" href="/DashboardBuscar">
                            <img src={logomenu} alt="logo" /></a></Link>  
                          </div>
                          <ul className="nav navbar-nav nombre-dashboard">
                            
                          
                            <li className="dropdown user-link" >
                                <a className="dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false"> 
                                <a style={{textDecoration:"none"}} id="dashname" role="button"></a>
                                 <img src={arrow} style={{marginLeft:'10px'}} alt="hola" />
                                </a>
                                 <List users = { this.state.users } /> 
                            </li>
                            
                          </ul>

                          <ul className="nav navbar-nav navbar-right">
                            
                            <li><a className="icon-menu" href=""><img className="menuicon" src={notifi} alt="icon-c1" /></a></li>
                            {this.modalAction()}
                            <li className="dropdown separacion state-url">
                                  <a className="dropdown-toggle" id="tglr" className="popover-toggle" title="Popover Header" role="button" aria-haspopup="true" aria-expanded="false">
                                      <img className="menuicon" width="20" style={{marginTop:"-20px"}} src={compartir} alt="icon-compártir" />
                                  </a>
                                  <div id="customdiv" style={{display: "none"}}>
            Here <b>I</b> am
        </div>

                                  
                            </li>
                            
                            <li className="dropdown user-link" >
                                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                      <div id="ultradiv" className="img-rounded profile-img">
                                      <img style={{width:'30px', borderRadius: '50%'}}/></div>
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
                        <div className="alert-network">
                            <YouAreOffline /> 
                      </div> 
                </nav>
                )

    }
    else{

      return(
        <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/Dashboard">
                  <img src={logomenu} alt="logo" />
                  </a>
                </div>
                <ul className="nav navbar-nav nombre-dashboard">
                  
                
                  <li className="dropdown user-link" >
                      <a className="dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
                      </a>
                  </li>
                  
                </ul>
              </div>
       </nav>);
    }
  }
  modalAction(){
  var url = window.location.href;
  var id = url.substring(url.lastIndexOf('/') + 1 );
  if(id == "dashboard_cards" || id == "Dashboard"){
    return (<li><a className="icon-menu"><img className="menuicon" src={nuevo} alt="icon-2" data-toggle="modal" data-target="#myModal2"/></a></li>);
  }
  else{
    return (<li><a className="icon-menu"><img className="menuicon" src={settings} alt="icon-2" data-toggle="modal" data-target="#myModal2"/></a></li>); 
  }

}
}



export default Menu;






