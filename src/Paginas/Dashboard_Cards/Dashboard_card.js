import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/*CSS*/
import './dashboard_Post.css';
import '../../Assets/ComponentesCSS/modals.css';
//import '../../Assets/js/jquery.overscroll.min.js';
//import '../../Assets/js/cursor-scroll.js';

import Menu from '../../Componentes/menu';
import Cards from '../../Componentes/Cards';
import Columns from '../../Componentes/Columns';
import Columns2 from '../../Componentes/Columns2';
import Modals from '../../Componentes/modals';
import  Modalssocial from '../../Componentes/modalsocial';
import IconLoading from '../../Componentes/icons/IconLoading';
/*Imagenes*/
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';

import share from '../../Assets/Iconos/retweet.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';
import favorite from '../../Assets/Iconos/favorite.png';
import post1 from '../../Assets/img/twitter.png';
import arrow from '../../Assets/Iconos/arrow.png';
import fb from '../../Assets/Iconos/fb.png';
import tw from '../../Assets/Iconos/twitterlogo-color.png';

/*Backedn*/
import * as firebase from 'firebase';
import {config} from '../../Assets/js/cons.js';
import {app, verifiyAccess,verifyDesign, Inactivity} from '../../Assets/js/script.js';
import {MY_ROUTE} from '../../routes.js'

import{verfSession, verifyDashboards, getData} from '../../Assets/js/script.js';
var url = window.location.href;
var id = url.substring(url.lastIndexOf('/') + 1 );
var userar=[];
var socnetar=[];
var socialNetC;
var url = window.location.href;
var lawea = url.substring(url.lastIndexOf('/') + 1 );
Inactivity();
class Dashboard_card extends Component {
constructor(props){
  super(props);

  this.state = {
    
    users: [],
    loading:[],
    design:[],
    homeLink:"Prueba"
    
  };

  this.onchangeContent = this.onchangeContent.bind(this);  
}

componentWillMount() {
  firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.userLogged = !!user;
      }
      else{
        this.userLogged = !!user
      } 
  });
}

    onDeleteData(data) {
      console.log("CONGRATULATIONS");
          let self = this;
          var usersInic = this.state.users;
          for (var i = 0; i < usersInic.length; i++) {
              if (usersInic[i].user === data.user) {
                  usersInic.splice(i, 1);
              }
          }
          if (usersInic.length === 0) {
              this.setState({
                  evaluate: "vacio"
              });
          }
          this.setState({
              users: usersInic
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
                        var url = window.location.href;
                        var id = url.substring(url.lastIndexOf('/') + 1 );
                        if (id == dashboardid) {
                            var keydashboard = childSnapshot.key;
                            var socialNetwork = app.database().ref("users/"+keys+"/Dashboard/"+keydashboard+"/SocialNetwork/");
                            socialNetwork.once("value").then(function(snapshot) {
                                snapshot.forEach(function(childSnapshot){
                                  if(data.user === childSnapshot.child("user").val()){
                                    var userkey = childSnapshot.key;
                                    console.log(userkey);
                                    var userSn = app.database().ref("users/"+keys+"/Dashboard/"+keydashboard+"/SocialNetwork/"+userkey);
                                    userSn.remove();
                                  }
                                });
                            });
                        }
                      });
                  });
                 }
               });
             });
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
                         var url = window.location.href;
                          var id = url.substring(url.lastIndexOf('/') + 1 );
                          var dashid = childSnapshot.child("did").val();
                          if(dashid == id){
                            var dashkey = childSnapshot.key
                            var design=app.database().ref("users/"+uskey+"/Dashboard/"+dashkey+"/Design");
                            design.once("value").then(function(snapshot) {
                              snapshot.forEach(function(childSnapshot) {
                                  var columnss = childSnapshot.child("columns").val();
                                  if (columnss == true) {
                                    self.setState({
                                      design: "columns"
                                    });
                                  }
                                  else{
                                      self.setState({
                                        design: "cards"
                                      });
                                  }
                              });
                            });
                            var sNetworkDir=app.database().ref("users/"+uskey+"/Dashboard/"+dashkey+"/SocialNetwork");
                            sNetworkDir.once("value").then(function(snapshot) {
                              snapshot.forEach(function(childSnapshot) {
                                self.setState({
                                  users: self.state.users.concat(childSnapshot.val())
                                });
                              });
                            });
                          }
                        /**/
                      });
                    });
                }  
            }
              else{
                    var uskey = childSnapshot.key;
                    var key2 = childSnapshot.child("email").val();         
                    var dashdirection = app.database().ref("users/"+uskey+"/Dashboard/");

                     dashdirection.once("value").then(function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                             var url = window.location.href;
                              var id = url.substring(url.lastIndexOf('/') + 1 );
                              var dashid = childSnapshot.child("did").val();
                              if(dashid == id){
                                var keydashboard = childSnapshot.key;
                                var design=app.database().ref("users/"+uskey+"/Dashboard/"+dashkey+"/Design");
                                design.once("value").then(function(snapshot) {
                                  snapshot.forEach(function(childSnapshot) {
                                      var columnss = childSnapshot.child("columns").val();
                                      if (columnss == true) {
                                        self.setState({
                                          design: "columns"
                                        });
                                      }
                                      else{
                                          self.setState({
                                            design: "cards"
                                          });
                                      }
                                  });
                                });
                                var dashkey = childSnapshot.key
                                var sNetworkDir=app.database().ref("users/"+uskey+"/Dashboard/"+dashkey+"/SocialNetwork");
                                sNetworkDir.once("value").then(function(snapshot) {
                                  snapshot.forEach(function(childSnapshot) {
                                    self.setState({
                                      users: self.state.users.concat(childSnapshot.val())
                                    });
                                  });
                                });
                              }
                            /**/
                          });
                      });
                  // Cancel enumeration

              }
               });
              });
            });
          setTimeout(() => {
            this.setState({loading: [1, 2]});
          },3000);
}

onchangeContent(newName){
   this.setState({
        users: newName
    });
}

  render() {

     const List = (props) => {
        if(this.state.design == "cards"){
          return (
              <div>          
                  { props.users.map( (userx,i) => { 
                   const { twitter, facebook, user } = userx;
                    if(facebook==true){
                       userar[i] = user;
                       socnetar[i] = "Facebook";
                    }
                    else{
                        userar[i] = user;
                        socnetar[i] = "twitter";
                    }
                  })}
                <div>
                  <Cards user={userar} socialNetwork={socnetar}/> 
                </div>
              </div>
          );
        }
      else{
      return (
        <div className="container postainer1">
           <div className="row social-cpanel">
              <div className="col-md-12">
                  <p><a data-toggle="modal" data-target="#modal-account">Ajuste de dashboards</a></p>
              </div>
            </div>
            <div className="row inside-post">     
                { props.users.map( (userx,i) => { 
                 const { twitter, facebook, user } = userx;
                if (facebook==true){
                 const { twitter, facebook, user } = userx;
                  socialNetC="facebook";  
                  return (
                    <div key = { i } className="col-md-3 col-lg-3">
                       <div className="post-view">
                           <Columns socialNetwork={socialNetC} user={user} />       
                       </div>
                    </div>
                  )
                }
                else {
                  socialNetC="twitter";
                  return (                
                    <div key = { i } className="col-md-3 col-lg-3">
                     <div className="post-view">
                        <Columns socialNetwork={socialNetC} user={user} />       
                      </div>
                    </div>
                  );
                }
                })}
                <div className=" col-md-3 col-lg-3 ">
                  <div className="post-view add-column">
                      <a data-toggle="modal" data-target="#myModal">
                      <img src={agregar} id="addimg"/>
                      </a>
                      <p>Agregar una pagina</p>
                      <Modalssocial changeContent={this.onchangeContent}  />
                      <div className="Modals">
                        <div id="myModal" className="modal modal1 fade" role="dialog">
                          <div className="modal-dialog modal-dialog1 ">
                            <div className="modal-content modal-content1">
                             {this.state.sn}  
                              <div className="modal-body modal-body1">
                                <h2>Seleccione una red social</h2>
                                <p>Agregar una cuenta a tu dashboard y revisa constantemente su contenido</p>
                                <div className="redes">
                                 <input type="radio" className="radio_item" value="" name="item" id="radio1"/>
                                 <label className="label_item" htmlFor="radio1"> <img src={fb} /> </label>
                                 <input type="radio" className="radio_item" value="" name="item" id="radio2"/>
                                 <label className="label_item" htmlFor="radio2"> <img src={tw} /> </label>
                             </div>
                             <form>
                              <div className="form-group" align="center">
                                <input type="email" className="form-control input-color-blue" id="usname"/>
                              </div>
                             </form>
                              <a onClick={this.createsn} className="btn bt-primary btnAgregar adddash">Agregar cuenta</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>  
        </div>
    )}}
    verifiyAccess();
    verifyDesign();
    return (
       this.state.loading.length <= 0 ? <IconLoading /> : (
      <div className="Dashboard_card">
        <section>
          <div className="starter-te">            
          <Menu/>
          </div>
          <List users = { this.state.users } />
        </section>
      </div>
      )
    );


  }
}
export default Dashboard_card;