import React, { Component } from 'react';
import './Dashboard.css';
import Modals from '../../Componentes/modals';
import Menu2 from '../../Componentes/menu2';

import IconLoading from '../../Componentes/icons/IconLoading';
import * as firebase from 'firebase';
import {config} from '../../Assets/js/cons.js';
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import erase from '../../Assets/Iconos/erase.png';
import imgstate from '../../Assets/Iconos/blank_state.png';


import{app, verifyDashboards, signOut, verfSession,getData,getDashData} from '../../Assets/js/script.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import {MY_ROUTE} from '../../routes.js'
let List;


var Masonry = require ( 'masonry-layout' );


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: [],
      evaluate:[],
      dashs: [],
      search: []
    };

      this.filterVal = false;
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})

  }
  componentDidMount() {
     
    
    setTimeout(() => {
      this.setState({
          loading: [1, 2, 3]
      });}, 2000);
  let self = this;

  firebase.database().ref("users").once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
          var keys = childSnapshot.key;
          var key2 = childSnapshot.child("email").val();
          var namelog = firebase.auth().currentUser;
          if (namelog.email == key2) {
              var dashConect = app.database().ref("users/" + keys + "/Dashboard/");
              firebase.auth().onAuthStateChanged(function(user) {
                  var dashdirection = app.database().ref("users/" + keys + "/Dashboard/");
                  dashdirection.once("value").then(function(snapshot) {
                      var dashboards = snapshot.val();
                      if (dashboards != null) {
                          self.setState({
                              evaluate: "lleno"
                          });
                      } else {
                          self.setState({
                              evaluate: "vacio"
                          });
                      }
                  });
              });
          }
      });
  });
  const rootRef = app.database().ref().child('users');
  firebase.auth().onAuthStateChanged(function(user) {
      rootRef.once('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
              var uskey = childSnapshot.key;
              var useremail = childSnapshot.child("email").val();
              var namelog = firebase.auth().currentUser;
              if (namelog.email == useremail) {
                  var dashdirection = app.database().ref("users/" + uskey + "/Dashboard/");
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
  
  }


  itemsMasonry(){
    var mason;
    mason = new Masonry( ' .dashcontainer', {
      querySelector:'.item-dash',
      percentPosition:true
    });
    console.log(mason);
  }

  onDeleteData(data) {
          let self = this;
          var dashInic = this.state.dashs;
          for (var i = 0; i < dashInic.length; i++) {
              if (dashInic[i].did === data.did) {
                  console.log(dashInic[i].did);
                  dashInic.splice(i, 1);
              }
          }
          console.log(dashInic.length);
          if (dashInic.length === 0) {

              this.setState({
                  evaluate: "vacio"
              });
          }

          this.setState({
              data: dashInic
          });
          var query = firebase.database().ref("users");
          firebase.auth().onAuthStateChanged(function(user) {
              query.once("value").then(function(snapshot) {
                  snapshot.forEach(function(childSnapshot) {
                      var namelog = firebase.auth().currentUser;
                      var key2 = childSnapshot.child("email").val();
                      if (namelog.email == key2) {
                          var keys = childSnapshot.key;
                          var dashdirection = app.database().ref("users/" + keys + "/Dashboard/");
                          dashdirection.once("value").then(function(snapshot) {
                              snapshot.forEach(function(childSnapshot) {
                                  var dashboardid = childSnapshot.child("did").val();
                                  if (data.did == dashboardid) {
                                      var keydashboard = childSnapshot.key;
                                      var privacity = app.database().ref("users/" + keys + "/Dashboard/" + keydashboard);
                                      privacity.remove();
                                  }
                              });
                          });
                      }
                  });
              });
          });
}
 valueState(){

    setTimeout(() => {
          this.itemsMasonry();
        }, 200);
    console.log(this.state.evaluate);
    if (this.state.evaluate != "lleno") {
      return (
            <div className="container blank-container">
              <div className="starter-template">
                <Menu2/>
                <div className="row agregar-dash">
                  <div className="center-block state-div">
                    <img src={imgstate} alt="nostate"/>
                      <h2>no tienes dashboards por mostrar</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Aliquam interdum dolor neque, ut aliquet leo cursus at.
                        In laoreet mi sed nisl ullamcorper tempus. Suspendisse fermentum varius dictum. Nulla sed metus turpis.</p>
                      <a className="btn btn-primary btn-green adddash"  data-toggle="modal" data-target="#myModal2">Crear nuevo</a>
                      <Modals/>
                  </div>
                </div>
              </div>
            </div>
    );
  }
  else{
    List = (props) => {
    let filteredContact = props.dashs.filter((dashs) => {
      return dashs.dname.toLowerCase().indexOf(this.state.search.toString().toLowerCase()) !== -1;  
             
    });
    if(filteredContact.length > 0){
    getData();
    return (

   <div className="dashcontainer row">
      { filteredContact.map( (user,i) => { 
      const { did, dname, ddescription } = user;
      return (
      <div className="item-dash col-md-4 col-lg-4 col-dash " style={{marginBottom:"30px"}} key = { i }>
         <div id="header">
            <ul className="a">
               <div className="col-md-8 header-name">
                  <Link style={{textDecoration:"none"}} to={ MY_ROUTE.replace(':slug', did) }>
                  <li>
                     <h3 id="dashname" >{dname}</h3>
                  </li>
                  </Link>  
               </div>
               <div className="col-md-4 icon-trash val">
                  <img id="addimg" src={erase} alt="trash" onClick={this.onDeleteData.bind(this, user)} onChange={this.onChange}/>
               </div>
            </ul>
         </div>
         <div id="content">
            <div id="scrollableContent">
               <div id="paddingContent">
                  <div className="prew">
                     <p>{ddescription}</p>
                  </div>
                  <Link style={{textDecoration:"none"}} to={ MY_ROUTE.replace(':slug', did) }><a>Ir a Dashboard</a></Link>
               </div>
            </div>
         </div>
      </div>
      )
      })}
   </div>

)}
else{
  return ( 
  <div className="no-result row animated pulse" id ="nore">
     <br/><img src={imgstate} alt="nostate" />
     <h2>No se han encontrado resultados</h2>
  </div>
  );
}}
  return(
  <div className="DashboardBuscar">
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
                       <li ><a className="icon-menu" href=""><img className="menuicon" src={notifi} alt="icon-compártir" /></a></li>
                       <li className="separacion"><a className="icon-menu"><img className="menuicon" src={nuevo} alt="icon-2" data-toggle="modal" data-target="#myModal2"/></a></li>
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
                 <form autoComplete="off">
                    <div className="form-group">
                       <input className="form-control input-buscar" id="searchbar" placeholder="Search" onChange={this.updateSearch.bind(this)}/>
                    </div>
                 </form>
                 <Modals/>
              </div>
           </div>
           <List dashs = { this.state.dashs }/>
        </div>
     </section>
  </div>
  );
}
}


  render() {
    console.log(this.state.dashs);
    return (

    this.state.loading.length <= 0 ? <IconLoading /> : (  
    <div className="Dashboard">
      <section className="dash">
        {this.valueState()}
      </section>
    </div>    
    ));
  }

}

export default Dashboard;
