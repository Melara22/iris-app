import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/*CSS*/
import './dashboard_Columns.css';

import Menu from '../../Componentes/menu';
import Cards from '../../Componentes/Cards';

import Modals from '../../Componentes/modals';
import Columns from '../../Componentes/Columns';
import Columns2 from '../../Componentes/Columns';
import IconLoading from '../../Componentes/icons/IconLoading';
/*Imagenes*/
import logomenu from '../../Assets/Iconos/logo_fondo@2x.png';
import notifi from '../../Assets/Iconos/notificaciones.png';
import nuevo from '../../Assets/Iconos/nuevo.png';
import compartir from '../../Assets/Iconos/compartir.png';

import likefb from '../../Assets/Iconos/likefb.png';
import share from '../../Assets/Iconos/retweet.png';
import sha from '../../Assets/Iconos/sha.png';
import agregar from '../../Assets/Iconos/Agregar_icon.png';
import favorite from '../../Assets/Iconos/favorite.png';
import post1 from '../../Assets/img/twitter.png';

import arrow from '../../Assets/Iconos/arrow.png';
import fb from '../../Assets/Iconos/fb2.png';
import tw from '../../Assets/Iconos/tw2.png';
import { YouAreOffline } from '../../Componentes/alerts/alertOffline.js';


import * as firebase from 'firebase';
import {config} from '../../Assets/js/cons.js';
import {app, verifiyAccess, verifyDesign2, Inactivity, verfSession, verifyDashboards, getData} from '../../Assets/js/script.js';
import {MY_ROUTE} from '../../routes.js'
var url = window.location.href;
var id = url.substring(url.lastIndexOf('/') + 1 );
Inactivity();

class Dashboard_columns extends Component {
constructor(props){
  super(props);

  this.state = {
    loading: [],
    users: [],  
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
          setTimeout(() => {
            this.setState({loading: [1, 2, 3]});
          },3000);
        }

 

  render() {

    // const List = this.renderList();

     const List = (props) => {

    return (

          <div className="row hola">
            
                          
                        
        { props.users.map( (userx,i) => { 

         const { twitter, facebook, user } = userx;
        if(facebook==true){
                 return (

                   <div key = { i } className="col-md-3 col-lg-3">
                   <div className="post-view">

                       <div className="col-md-12 logo-pagina" style={{ marginBottom:"-390px", marginTop:"15px"}}>
                        <h2><img style={{marginTop:'-10px', marginLeft:'3px', width:"8px!important"}} src={fb}/>&nbsp;&nbsp;{user}</h2>
                        </div><Columns facebook={facebook} user={user} />       
                        </div>
                  </div>
                 

         )
       }
       else{
         return (
          
           <div key = { i } className="col-md-3 col-lg-3">
           <div className="post-view">

                              <div className="col-md-12 logo-pagina" style={{ marginBottom:"-390px", marginTop:"15px"}}>
                              <h2><img style={{marginTop:'-10px', marginLeft:'3px'}} src={tw} />&nbsp;&nbsp;{user}</h2>
                              </div>
                  <Columns2 twitter={twitter} user={user} />              
                        </div> 
          </div>
       

         )
       }


        })}
        
            </div>
        
    )


}   
    verifiyAccess();
    verifyDesign2();
    console.log(this.props);
     if(this.props != id){
    return (
      this.state.loading.length <= 0 ? <IconLoading /> : (
      <div className="Dashboard_columns">
        
          <section >
              <div className="container">

                <div className="starter-template">

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
}
export default Dashboard_columns;