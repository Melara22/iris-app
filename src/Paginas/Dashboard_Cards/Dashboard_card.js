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
import Columns2 from '../../Componentes/Columns';
import Modals from '../../Componentes/modals';
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
                         <div className="col-md-3 col-lg-3">
                            <div className="card post-nuevo">
                                <a className="img-card">
                              </a>
                              <div className="content-post" align="center">
                                  <a data-toggle="modal" data-target="#myModal">
                                 <img src={agregar} alt="agregar" id="addimg" />
                                  </a>
                                  <p>Agregar una pagina</p>
                              </div>
                            </div>
                            <Modals />
                          </div>)}
                  </div>
                </div>
              </div>
              
          );
    }
    else{
      console.log("Entre");
      return (
        
        <div className="row inside-post">  

            { props.users.map( (userx,i) => { 

             const { twitter, facebook, user } = userx;
            if(facebook==true){
             return (

               <div key = { i } className="col-md-3 col-lg-3">
               <div className="post-view">

                   <div className="col-md-12 header-column" style={{ marginBottom:"-390px", marginTop:"15px"}}>
                   
                    
                    <img className="img-circle profile" src="http://via.placeholder.com/500x500"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="profile-social" src={fb}/>&nbsp;<h2>{user}</h2>
                 
                    </div><Columns facebook={facebook} user={user} />       
                    </div>
              </div>
             )
           }
           else{
             return (
              
               <div key = { i } className="col-md-3 col-lg-3">
               <div className="post-view">
                  <div className="col-md-12 header-column" style={{ marginBottom:"-390px", marginTop:"15px"}}>
                    <h2><img style={{marginTop:'-10px', marginLeft:'3px'}} src={tw} />&nbsp;&nbsp;{user}</h2>
                  </div>
                    <Columns2 twitter={twitter} user={user} />              
                </div> 
              </div>
             )
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
    )
     }
    }
    console.log(this.state.design);
    verifiyAccess();
    verifyDesign();
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