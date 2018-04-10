import React, { Component } from 'react';

import '../Assets/ComponentesCSS/modals.css';

import facebook from '../Assets/Iconos/fb.png';
import tw from '../Assets/Iconos/twitterlogo-color.png';
import * as firebase from 'firebase';
import {config} from '../Assets/js/cons.js';
import{app,createDashboard, createSocialNetwork, } from '../Assets/js/script.js';


class Modalssocial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: null,
      sn: null,
      users: [],
    };
  }
 componentDidMount(){
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
}
 onDeleteData(data) {
    let self = this;
    var usersInic = this.state.users;
    for (var i = 0; i < usersInic.length; i++) {
      console.log(usersInic[i].user, data.user);
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
    setTimeout(function(){ self.props.changeContent(self.state.users); },200); 
}
  render() {
    const List = (props) => {
    return(
        <div className="row">
          {this.state.users.map((item,i) => {
            if(item.facebook===true){
            return(   
              <div key={i} className="col-md-12">
                  <div className="account">
                  <div className="col-md-3">
                   <img src={facebook} alt="logo-fb"/>  
                  </div>
                  <div className="col-md-6">
                      <span className="name">{item.user}</span>
                      <span className="username">@{item.user}</span>
                  </div>
                  <div className="col-md-3">
                 <a onClick={this.onDeleteData.bind(this, item)}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
                  </div>
                  </div>
              </div> 
            );
          }
          else{
            return(
              <div key={i} className="col-md-12">
                  <div className="account">
                  <div className="col-md-3">
                   <img src={tw} alt="logo-fb"/>  
                  </div>
                  <div className="col-md-6">
                      <span className="name">{item.user}</span>
                      <span className="username">{item.user}</span>
                  </div>
                  <div className="col-md-3">
                 <a onClick={this.onDeleteData.bind(this, item)}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
                  </div>
                  </div>
              </div> 
            );
          }
      })}
    </div>
  );
}
    return (
      <div className="modalsocial">
        <div id="modal-account" className="modal modal5 fade" role="dialog" >
          <div className="modal-dialog modal-dialog1 ">
            <div className="modal-content modal-content1">
             {this.state.sn}
              <div className="modal-body modal-body5">
                <div className="account-header">
                <h2>Edita tus cuentas</h2>
                <p>Selecciona las cuentas que desees eliminar en tu dashboard</p>
                </div>
                    <List users = { this.state.users } /> 
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Modalssocial;