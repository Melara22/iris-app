import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/*CSS*/
import './dashboard_Post.css';

import Menu from '../../Componentes/menu';
import Cards from '../../Componentes/Cards';


import Modals from '../../Componentes/modals';

import IconLoading from '../../Componentes/icons/IconLoading';
/*Imagenes*/
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';
import like from '../../Assets/Iconos/likes.png';
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
import {app, verifyDashboards2, verifiyAccess,verifyDesign, Inactivity} from '../../Assets/js/script.js';
import {MY_ROUTE} from '../../routes.js'

import{verfSession, verifyDashboards, getData} from '../../Assets/js/script.js';
var url = window.location.href;
var id = url.substring(url.lastIndexOf('/') + 1 );
var userar=[];
var socnetar=[];
Inactivity();
class Dashboard_card extends Component {
constructor(props){
  super(props);

  this.state = {
    loading: [],
    users: [] 
  };

  
}

componentWillMount() {
      
          setTimeout(() => {
            this.setState({loading: [1, 2, 3]});
          }, 2000 );
    firebase.auth().onAuthStateChanged((user) => {
        if(!user){
          this.userLogged = !!user;
        }
        else{
          this.userLogged = !!user
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
                             var url = window.location.href;
                              var id = url.substring(url.lastIndexOf('/') + 1 );
                              var dashid = childSnapshot.child("did").val();
                              if(dashid == id){
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
                    }
                    /**/
               
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

      

        }

 

  render() {

    // const List = this.renderList();

     const List = (props) => {

    return (

      
        <div className="">
          <div className="">
            
                          
                        
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
                {this.userLogged && (
                         <div className="col-md-3 col-lg-5">
                              <div className="card post-nuevo">
                                  <a className="img-card">
                                </a>
                                  <div className="content-post" align="center">
                                      <a data-toggle="modal" data-target="#myModal">

                                     <img src={agregar} alt="agregar" />
                                      </a>
                                      <p>Agregar una pagina</p>

                                      
                                  </div>
                              
                              </div>
                              <Modals />
                          </div>)}
              </div>
            </div>
        </div>
    );}
   
    verifiyAccess();
    verifyDesign();
    console.log(this.props);
    return (
      this.state.loading.length <= 0 ? <IconLoading /> : (
      <div className="Dashboard_card">
        
          <section>
              <div className="container postainer1">
                <div className="starter-te">                     
                     <Menu/>
                </div>
                <List users = { this.state.users } />                
              </div>
        </section>
      </div>
      )
    );


  }
}
export default Dashboard_card;