//Se importan las librerias de firebase despues de haber instalado el modulo **npm install firebase --save**
import * as firebase from 'firebase';

//credenciales de la app de firebase
const config = {
    apiKey: "AIzaSyDry-NPyV4QYsJfZrazoozqUKacPYZgbZQ",
    authDomain: "iris-platform.firebaseapp.com",
    databaseURL: "https://iris-platform.firebaseio.com",
    projectId: "iris-platform",
    storageBucket: "iris-platform.appspot.com",
    messagingSenderId: "515278326886"
  };

export { config }
