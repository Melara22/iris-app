//Se importan las librerias de firebase despues de haber instalado el modulo **npm install firebase --save**
import * as firebase from 'firebase';

import {config} from '../../Assets/js/cons.js';
//se inicializa la app

const app = firebase.initializeApp(config);

//Se instancia el objeto para el login por medio de cuentas gmail en firebase
var provider = new firebase.auth.GoogleAuthProvider();
var db = firebase.database();
provider.setCustomParameters({
  'hd': 'elaniin.com'
});

var USERS_LOCATION ="https://iris-platform.firebaseio.com/users"
var testeo;
//Domino de correos permitidos


//Variables globales
var uid;
var name;
var email;
var img;
var state=false;
var ref=db.ref("users");

export function signIn(){
  return new Promise((resolve, reject) => {

    firebase.auth().signInWithPopup(provider).then(function(result) {
      
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;

      // The signed-in user info.
      var user = result.user;

      // Data to compare/push
          email = user.email;
          name= user.displayName;
          img = user.photoURL;

      var edomain="";
      var standardomain="@elaniin.com"
      var i=0;

      let customEmail = email.split('@');
      let isError = true;

      let dataReturn;

      if (customEmail.length == 2) {
        if (customEmail[1] === "elaniin.com") {
          isError = false;

          dataReturn = true;
          uid = customEmail[0];
          checkIfUserExists(name, email, uid);
        }
      }

      if (isError) {
        dataReturn = false;
        extermin();
      }

      resolve({
        status: dataReturn

      });
      
      // while(true){
      //   if(email.charAt(i)!='@'){
      //       i++;
      //   }
      //   else{
      //       var j = i;
      //       var k=0;
      //       while(true){
      //         if(email.charAt(j)!=''){
      //           j++;
      //           k++;
      //         }
      //         else{
      //           uid = (email.substr(0, i));
      //           edomain=email.substr(i, k);
      //           if(edomain == standardomain){
      //             checkIfUserExists(name, email, uid);
      //             return false;
      //           }
      //           else{
      //             extermin();
      //             return false;
      //           }
      //         }
      //       }
      //   }
      // }
    // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...

      reject({
        status: 'Rejected'
      });
    });
  });
}

export function signOut(){
  firebase.auth().signOut().then(function() {
    firebase.auth().signOut;
    testeo=0;
    window.location.href="/"

  }).catch(function(error) {
    // An error happened.
  });
}

export function createUser() {
  var userConect=db.ref("users/");
  var conectado=userConect.push({
    uid:uid,
    name: name,
    email: email
  });
  window.location.href="/dashboard"
}

export function createDashboard(){
  return new Promise((resolve, reject) => {
  firebase.auth().onAuthStateChanged(function(user) {
  var query = firebase.database().ref("users");
  var cards=document.getElementById('cards').checked;
  var columns=document.getElementById('columns').checked;
  var publi=document.getElementById('publi').checked;
  var priv=document.getElementById('priv').checked;
  var currentdate = new Date();
  var year = String(currentdate.getFullYear());
  var month = String(currentdate.getMonth()+ 1);
  var day = String(currentdate.getDay());
  var hours = String(currentdate.getHours());
  var minutes = String(currentdate.getMinutes());
  var seconds = String(currentdate.getSeconds());
  var code = year+month+day+hours+minutes+seconds;
  let isError = true;
  let dataReturn;
  var dnametemp= document.getElementById('dname').value;
  var ddescription = document.getElementById('ddescription').value;
    if ((cards == true || columns == true)&&(publi == true || priv == true) && dnametemp!="" && ddescription!="") {
       isError = false;
       dataReturn = true;
      query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var keys = childSnapshot.key;
          var key2 = childSnapshot.child("email").val();
          var namelog = firebase.auth().currentUser;
          if (namelog.email == key2) {
            var url = window.location.href;
            var id = url.substring(url.lastIndexOf('/') + 1 );
            if (id == "DashboardBuscar" || id == "dashboard_columns" || id == "Dashboard"){
              var dashConect=db.ref("users/"+keys+"/Dashboard/");
              var conectado=dashConect.push({
                did:code,
                dname: dnametemp,
                ddescription:ddescription
              });

               dashConect.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var dashboardid = childSnapshot.child("did").val();
                  if (code == dashboardid) {
                    var keydashboard = childSnapshot.key;
                    var styleConect=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Design");
                    styleConect.push({
                      cards:cards,
                      columns: columns
                    });
                    var privacity=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Privacity");
                    privacity.push({
                      publi:publi,
                      priv: priv
                    });
                    window.location.href="/Dashboard_columns/"+code;
                  }
                  });
                });
            }

            else{
              var keys = childSnapshot.key;
              var dashvas=db.ref("users/"+keys+"/Dashboard/");
              dashvas.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var dashboardid = childSnapshot.child("did").val();
                  var url = window.location.href;
                  var id = url.substring(url.lastIndexOf('/') + 1 );
                  if (id == dashboardid){
                    var keydashboard = childSnapshot.key;
                     var dashConect=db.ref("users/"+keys+"/Dashboard/"+keydashboard);
                     db.ref().child("users/"+keys+"/Dashboard/"+keydashboard)
                    .update({ 
                        dname: dnametemp,
                        ddescription:ddescription
                      });

                    var styleConect=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Design");
                    styleConect.once("value").then(function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                        var keydesign = childSnapshot.key;
                        db.ref().child("users/"+keys+"/Dashboard/"+keydashboard+"/Design/"+keydesign)
                        .update({ 
                             cards:cards,
                             columns: columns  
                          });
                      });
                    });
                    var priva=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Privacity");
                    priva.once("value").then(function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                        var keypriv = childSnapshot.key;
                        db.ref().child("users/"+keys+"/Dashboard/"+keydashboard+"/Privacity/"+keypriv)
                        .update({ 
                             publi:publi,
                             priv: priv
                          });
                      });
                    });
                   setTimeout(function(){ window.location.reload() }, 300); 
                  }
                  });
                });
            }
              
          }
          else{
          }
        // Cancel enumeration
      }); 
     });
    }
    else{
          dataReturn = false;
        }
    resolve({
      status: dataReturn
    });

  });
});
}

export function createSocialNetwork(){
return new Promise((resolve, reject) => {    
  firebase.auth().onAuthStateChanged(function(user) {
  var query = firebase.database().ref("users");
  var fb=document.getElementById('radio1').checked;
  var tw=document.getElementById('radio2').checked;
  var dbusname = document.getElementById('usname').value;
  var usname;
  let isError = true;
  let dataReturn;
    if ((fb == true || tw == true) && usname!="") {
      isError = false;
      dataReturn = true;
      if(tw == true){
        var countusnamechar = dbusname.split("@");
         if (countusnamechar.length > 1) {
            usname = dbusname;
         }
         else{
            usname = "@"+dbusname;
         }
      }
      else{
        usname = dbusname;
      }
      query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var keys = childSnapshot.key;
          var key2 = childSnapshot.child("email").val();
          var namelog = firebase.auth().currentUser;
          if (namelog.email == key2) {
              var dashConect=db.ref("users/"+keys+"/Dashboard/");
              var url = window.location.href;
              var id = url.substring(url.lastIndexOf('/') + 1 );
              firebase.auth().onAuthStateChanged(function(user) {
                var dashdirection = db.ref("users/"+keys+"/Dashboard/");
                 dashdirection.once("value").then(function(snapshot) {
                  snapshot.forEach(function(childSnapshot) {
                    var dashboardid = childSnapshot.child("did").val();
                    var keydash = childSnapshot.key;
                    if (id == dashboardid) {
                      var privacity=db.ref("users/"+keys+"/Dashboard/"+keydash+"/SocialNetwork");
                      snapshot.forEach(function(childSnapshot) {
                      var dashboardid = childSnapshot.child("did").val();
                      var keydash = childSnapshot.key;
                      });
                      privacity.push({
                        facebook:fb,
                        twitter:tw,
                        user: usname
                      });
                      window.location.reload();
                    }
                    });
                  });
              });
            }
          else{
          }
        // Cancel enumeration
        }); 
      });
    }
    else{
      dataReturn = false;
    }
    resolve({
      status: dataReturn
    });
  });
  });
}

export function extermin(){
  var user = firebase.auth().currentUser;
  user.delete().then(function() { 
    signOut();
    return false;
  }).catch(function(error) {
    console.log('Error fase 1')
  });
}

export function userExistsCallback() {
    verifyDashboards();
}

// Tests to see if /users/<userId> has any data. 
export function checkIfUserExists(name, email, uid) {
  ref.on('value', gotData);  
}

export function gotData (data){
  var users = data.val();
  if(users == null){
    createUser();
  }
  else{
    var keys=Object.keys(users);
    var state = false;
    for(var i = 0; i < keys.length; i++){
      var k = keys[i];
      var uidu  = users[k].uid;
      var emailu = users[k].email;
      if(uidu == uid){
          var keysuser=k;
          state=true;
      }  
    }
   // Se verifica si se ha encontrado algun user existente con el mismo id
    if(state==false){
        createUser();
      }
      else{
        userExistsCallback();
      }
  }
}
  

export function verfSession(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.href="/";
    }
  });
}


export function verfSessionlog(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      window.location.href="/Dashboard";
    }
  });
}

export function getData(){
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      var namelog = firebase.auth().currentUser;
      document.getElementById("namelog").innerHTML=namelog.displayName;
      var PhotoUrl = namelog.photoURL;
      document.getElementById("ultradiv").style.backgroundImage="url("+PhotoUrl+")";
    }
  });
}

var dashboarname;
export function getDashData(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          document.getElementById("cards").checked=false;
          document.getElementById("columns").checked=false;
          var query = firebase.database().ref("users");
      query.once("value").then(function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var key2 = childSnapshot.child("email").val();
            var namelog = firebase.auth().currentUser;
            if (namelog.email == key2) {
                  var keys = childSnapshot.key;
                  var dashdirection = db.ref("users/"+keys+"/Dashboard/");
                   dashdirection.once("value").then(function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                      var dashboardid = childSnapshot.child("did").val();
                      var url = window.location.href;
                      var id = url.substring(url.lastIndexOf('/') + 1 );
                      document.getElementById("urlpass").value=url;
                      if(dashboardid == id){
                        document.getElementById("modalActionVal").innerHTML="Actualizar Dashboard";
                        document.getElementById("adddashbutt").innerHTML="Actualizar Dashboard";
                        dashboarname = childSnapshot.child("dname").val();
                        var ddescription = childSnapshot.child("ddescription").val();
                        document.getElementById("dashname").innerHTML=dashboarname;
                        document.getElementById("dname").value = dashboarname;
                        document.getElementById("ddescription").value =ddescription;
                        var dashdirectionintro = db.ref("users/"+keys+"/Dashboard/");
                        var keydashboard = childSnapshot.key;
                        var styleConect=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Design/");
                        styleConect.once("value").then(function(snapshot) {
                          snapshot.forEach(function(childSnapshot) {
                            console.log(keydashboard);
                              if(childSnapshot.child("cards").val() == true && childSnapshot.child("columns").val() == false){
                                  document.getElementById("columns").checked=false;
                                  document.getElementById("cards").checked=true;
                              }
                              else if (childSnapshot.child("cards").val() == false && childSnapshot.child("columns").val() == true){
                                  document.getElementById("cards").checked=false;
                                  document.getElementById("columns").checked=true;
                              }
                          });
                        });
                        var privacity=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Privacity/");
                        privacity.once("value").then(function(snapshot) {
                          snapshot.forEach(function(childSnapshot) {
                              if(childSnapshot.child("priv").val() == true){
                                  document.getElementById("priv").checked=true;
                                  document.getElementById("dashstate").innerHTML="Privado";
                              }
                              else{
                                  document.getElementById("publi").checked=true;
                                  document.getElementById("dashstate").innerHTML="Público";
                              }
                          });
                        });
                      }
                    });
                });
            }
           }); 
      });
      }
  });
}

export function verifyDashboards(){
  firebase.auth().onAuthStateChanged(function(user) {
  var query = firebase.database().ref("users");
  query.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var keys = childSnapshot.key;
        var key2 = childSnapshot.child("email").val();
        var namelog = firebase.auth().currentUser;
        if (namelog.email == key2) {var dashConect=db.ref("users/"+keys+"/Dashboard/");
            firebase.auth().onAuthStateChanged(function(user) {
              var dashdirection = db.ref("users/"+keys+"/Dashboard/");
               dashdirection.once("value").then(function(snapshot) {
                   var dashboards=snapshot.val();
                   if(dashboards != null){
                      window.location.href="/DashboardBuscar";
                    }
                });
            });
        }
       }); 
  });
});
}


export function verifyDashboards2(){
  firebase.auth().onAuthStateChanged(function(user) {
    var query = firebase.database().ref("users");
      query.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var keys = childSnapshot.key;
              var key2 = childSnapshot.child("email").val();
              var namelog = firebase.auth().currentUser;
              if (namelog.email == key2) {
                  var dashConect=db.ref("users/"+keys+"/Dashboard/");
                  firebase.auth().onAuthStateChanged(function(user) {
                    var dashdirection = db.ref("users/"+keys+"/Dashboard/");
                     dashdirection.once("value").then(function(snapshot) {
                         var dashboards=snapshot.val();
                         if(dashboards == null){
                            window.location.href="/Dashboard";
                          }
                      });
                  });
              }
            }); 
      });
    });
}

export function verifiyAccess(){
  var query = firebase.database().ref("users");
  firebase.auth().onAuthStateChanged(function(user) {query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          if(user){
          var keys = childSnapshot.key;
          var key2 = childSnapshot.child("email").val();
          var namelog = firebase.auth().currentUser;
              var dashdirection = db.ref("users/"+keys+"/Dashboard/");
               dashdirection.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var dashboardid = childSnapshot.child("did").val();
                  var url = window.location.href;
                  var code = url.substring(url.lastIndexOf('/') + 1 );
                  if (code == dashboardid) {
                    var keydashboard = childSnapshot.key;
                    var privacity=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Privacity");
                    privacity.once("value").then(function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                          var dpriv = childSnapshot.child("priv").val();
                          if (dpriv == true && namelog.email != key2 ) {
                            window.alert("Dashboard Privado");
                            window.location.href="/Dashboard"
                          } 
                      });
                    });
                  }
                  });
                });
        // Cancel enumeration
      }
      else{
          var keys = childSnapshot.key;
          var key2 = childSnapshot.child("email").val();         
          var dashdirection = db.ref("users/"+keys+"/Dashboard/");
           dashdirection.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var dashboardid = childSnapshot.child("did").val();
              var url = window.location.href;
              var code = url.substring(url.lastIndexOf('/') + 1 );
              if (code == dashboardid) {
                var keydashboard = childSnapshot.key;
                var privacity=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Privacity");
                privacity.once("value").then(function(snapshot) {
                  snapshot.forEach(function(childSnapshot) {
                      var dpriv = childSnapshot.child("priv").val();
                      if (dpriv == true) {
                            window.alert("Dashboard Privado");
                            window.location.href="/Dashboard"
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
export function verifyDesign(){
  var query = firebase.database().ref("users");
  firebase.auth().onAuthStateChanged(function(user) {
      query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var keys = childSnapshot.key;
          var key2 = childSnapshot.child("email").val();
          var namelog = firebase.auth().currentUser;
              var dashdirection = db.ref("users/"+keys+"/Dashboard/");
               dashdirection.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var dashboardid = childSnapshot.child("did").val();
                  var url = window.location.href;
                  var code = url.substring(url.lastIndexOf('/') + 1 );
                  if (code == dashboardid) {
                    var keydashboard = childSnapshot.key;
                    var privacity=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Design");
                    privacity.once("value").then(function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                          var cardss = childSnapshot.child("cards").val();
                          if (cardss != true) {
                            window.location.href="/Dashboard_columns/"+code;
                          }
                      });
                    });
                  }
                  });
                });
        // Cancel enumeration
      }); 
     });
    
  });
}
export function verifyDesign2(){
  var query = firebase.database().ref("users");
  firebase.auth().onAuthStateChanged(function(user) {
      query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var keys = childSnapshot.key;
          var key2 = childSnapshot.child("email").val();
          var namelog = firebase.auth().currentUser;
              var dashdirection = db.ref("users/"+keys+"/Dashboard/");
               dashdirection.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var dashboardid = childSnapshot.child("did").val();
                  var url = window.location.href;
                  var code = url.substring(url.lastIndexOf('/') + 1 );
                  if (code == dashboardid) {
                    var keydashboard = childSnapshot.key;
                    var privacity=db.ref("users/"+keys+"/Dashboard/"+keydashboard+"/Design");
                    privacity.once("value").then(function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                          var columnss = childSnapshot.child("columns").val();
                          if (columnss != true) {
                            window.location.href="/Dashboard_card/"+code;
                          }
                      });
                    });
                  }
                  });
                });
        // Cancel enumeration
      }); 
     });
    
  });
}

export function refresh(){
  window.location.reload();
}

function reload (){
  window.location.reload();
}
export function Inactivity(){
  var temp = setTimeout(reload, 900000);
  document.addEventListener("click", function() {
      // borrar el temporizador que redireccionaba
      clearTimeout(temp);
      // y volver a iniciarlo
      temp = setTimeout(reload, 900000);
  });
}

export {app}