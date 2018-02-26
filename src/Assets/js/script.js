//Se importan las librerias de firebase despues de haber instalado el modulo **npm install firebase --save**
import * as firebase from 'firebase';

//credenciales de la app de firebase
var config = {
    apiKey: "AIzaSyDry-NPyV4QYsJfZrazoozqUKacPYZgbZQ",
    authDomain: "iris-platform.firebaseapp.com",
    databaseURL: "https://iris-platform.firebaseio.com",
    projectId: "iris-platform",
    storageBucket: "iris-platform.appspot.com",
    messagingSenderId: "515278326886"
  };
//se inicializa la app

firebase.initializeApp(config);

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
    while(true){
      if(email.charAt(i)!='@'){
          i++;
      }
      else{
          var j = i;
          var k=0;
          while(true){
            if(email.charAt(j)!=''){
              j++;
              k++;
            }
            else{
              uid = (email.substr(0, i));
              edomain=email.substr(i, k);
              if(edomain == standardomain){
                checkIfUserExists(name, email, uid);
                return false;
              }
              else{
                extermin();
                return false;
              }
            }
          }
      }
    }
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
  });
}

export function signOut(){
  firebase.auth().signOut().then(function() {
    firebase.auth().signOut;
    testeo=0;
    window.alert("deslogueado");
  }).catch(function(error) {
    // An error happened.
  });
}

export function createUser() {
  var userConect=db.ref("users/");
  var conectado=userConect.push({
    uid:uid,
    username: name,
    email: email
  });
  window.alert('Bienvenido a iris: ' + uid + '!');
  verifyDashboards();
}

export function createDashboard(){
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

  var dnametemp= document.getElementById('dname').value;
    if ((cards == true || columns == true)&&(publi == true || priv == true) && dnametemp!="") {
      query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var keys = childSnapshot.key;
          var key2 = childSnapshot.child("email").val();
          var namelog = firebase.auth().currentUser;
          if (namelog.email == key2) {
              var dashConect=db.ref("users/"+keys+"/Dashboard/");
              var conectado=dashConect.push({
                did:code,
                dname: dnametemp
              });
            firebase.auth().onAuthStateChanged(function(user) {
              var query2 = db.ref("users/"+keys+"/Dashboard/");
               query2.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var keysr = childSnapshot.child("did").val();
                  console.log(keysr);
                  if (code == keysr) {
                    var keydr = childSnapshot.key;
                    var styleConect=db.ref("users/"+keys+"/Dashboard/"+keydr+"/diseño");
                    styleConect.push({
                      cards:cards,
                      columns: columns
                    });
                    var privacity=db.ref("users/"+keys+"/Dashboard/"+keydr+"/privacidad");
                    privacity.push({
                      publi:publi,
                      priv: priv
                    });
                    window.location.href="/Dashboard_post/"+code;
                  }
                  });
                });
            });
          }
          else{
            window.alert("Dashboard no insertado");
          }
        // Cancel enumeration
      }); 
     });
    }
    else{
          window.alert("llena todos los campos");

        }
  });
}

export function createSocialNetwork(){
    
  firebase.auth().onAuthStateChanged(function(user) {
  var query = firebase.database().ref("users");
  var fb=document.getElementById('radio1').checked;
  var tw=document.getElementById('radio2').checked;
  var usname= document.getElementById('usname').value;
    if ((fb == true || tw == true) && usname!="") {
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
              var query2 = db.ref("users/"+keys+"/Dashboard/");
               query2.once("value").then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  var keysr = childSnapshot.child("did").val();
                  var keydash = childSnapshot.key;
                  console.log(keysr);
                  if (id == keysr) {
                    var privacity=db.ref("users/"+keys+"/Dashboard/"+keydash+"/RedSocial");
                    privacity.push({
                      facebook:fb,
                      twitter:tw,
                      user: usname
                    });
                    window.location.href="/Dashboard_post/"+id;
                  }
                  });
                });
            });
          }
          else{
            window.alert("Dashboard no insertado");
          }
        // Cancel enumeration
      }); 
     });
    }
    else{
          window.alert("llena todos los campos");

        }
  });
}

export function extermin(){
  var user = firebase.auth().currentUser;
  user.delete().then(function() { 
    window.alert("No puedes entrar con cuentas de correo que no sean de 'elaniin.com'");
    signOut();
    return false;
  }).catch(function(error) {
    console.log('Error fase 1')
  });
}

export function userExistsCallback() {
    window.alert('Bienvenido: ' + uid + '!');
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
          console.log(keysuser);
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
    var namelog = firebase.auth().currentUser;
    document.getElementById("namelog").innerHTML=namelog.displayName;
    var PhotoUrl = namelog.photoURL;
    document.getElementById("ultradiv").style.backgroundImage="url("+PhotoUrl+")";
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
              var query2 = db.ref("users/"+keys+"/Dashboard/");
              console.log(query2);
               query2.once("value").then(function(snapshot) {
                   var dashboards=snapshot.val();
                   if(dashboards != null){
                      window.location.href="/DashboardBuscar";
                         snapshot.forEach(function(childSnapshot) {
                            var dashboards = childSnapshot.val();
                            console.log(dashboards);
                         });
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
        if (namelog.email == key2) {var dashConect=db.ref("users/"+keys+"/Dashboard/");
            firebase.auth().onAuthStateChanged(function(user) {
              var query2 = db.ref("users/"+keys+"/Dashboard/");
              console.log(query2);
               query2.once("value").then(function(snapshot) {
                   var dashboards=snapshot.val();
                   if(dashboards == null){
                      window.location.href="/Dashboard";
                         snapshot.forEach(function(childSnapshot) {
                            var dashboards = childSnapshot.val();
                            console.log(dashboards);
                         });
                    }
                });
            });
        }
       }); 
  });
});
}