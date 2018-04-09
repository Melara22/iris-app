import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/*CSS*/
import './dashboard_Post.css';
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
Inactivity();
class Dashboard_card extends Component {
constructor(props){
  super(props);

  this.state = {
    
    users: [],
    loading:[],
    design:[]
    
  };

  
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

 

  render() {

    // const List = this.renderList();

     const List = (props) => {
        if(this.state.design == "cards"){
                return (
            
              <div >          
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
                  
                      <Cards user={userar} socialNetwork={socnetar}/> 
                      
                
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
             <Modalssocial />
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
                    
                    <Modals />

                  </div>
                </div>
        </div>  
        </div>
    )
     }
    }
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