import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import '../Assets/ComponentesCSS/columns.css';
import Modals from './modals';

/*Imagenes*/

import agregar from '../Assets/Iconos/Agregar_icon.png';
import likefb from '../Assets/Iconos/likefb.png';
import love from '../Assets/Iconos/reacciones/love.png';
import wow from '../Assets/Iconos/reacciones/wow.png';

import share from '../Assets/Iconos/share.png';
import retweet from '../Assets/Iconos/retweet@2x.png';
import favorite from '../Assets/Iconos/like@2x.png';

import views from '../Assets/Iconos/views.png';

import logo from '../Assets/img/mara/logo.png';
import tw from '../Assets/Iconos/twitterlogo-color.png';
import fb from '../Assets/Iconos/fb2.png';
import post1 from '../Assets/Iconos/place_holder.jpg';
import{deprueba} from '../Assets/js/script.js';
import * as firebase from 'firebase';
import {config} from '../Assets/js/cons.js';
import {app, verifyDashboards2} from '../Assets/js/script.js';

var url = window.location.href;
var id1 = url.substring(url.lastIndexOf('/') + 1 );
var API_tw= "";
/*declaramos como constantes a las APIS*/
class Columns extends Component {
/*declaramos el constructor*/ 
constructor(props){
  super(props);
  this.state = {
    posts:[],
    data:[]
  }
}

componentDidMount(){
  const {user} = this.props;

  API_tw ='https://api-inxights-staging.herokuapp.com/public/v1/twitter/posts?api_token=14c261ec0de964822a4fb1a18538b26a2ed4b661130babda14504db0eb084dde&username='+user;
   axios.get(API_tw)
  .then(res => {
    const posts = res.data;

    this.setState({ posts });
  })

  .catch(function(e){
    console.log('ERROR' , e);
  })
}
  render() {
    const renderPosttw = this.state.posts.map(function(posttw, i){
      return(
                             <div key={i} className="thumbnail" style={{marginLeft:"10px"}}>
                                  <div className="caption">
                                      
                                      <p>{posttw.content.message}</p>
                                    </div>
                                
                                   <div className="opciones2">
                                         <a>{posttw.retweet} <img src={retweet} alt="share" /></a>
                                        <a>{posttw.favorite} <img src={favorite} alt="share" /></a>
                                        <a className="float-opcion">
                                          {moment(posttw.created_at).format('Do MMMM YYYY, h:mm:ss a')}
                                          </a>  
                                  </div>                
                              </div>        
        );

    });

    const renderPostfb = this.state.data.map(function(postfb, i){
      return(
                       <div key={i} className="thumbnail">
                                  <div className="caption">
                                      
                                      <p>{postfb.content.message}</p>
                                    </div>
                                  <img src={postfb.content.picture} />
                                   <div className="opciones2">
                                         <a>{postfb.reactions.like} <img src={likefb} alt="share" /></a>
                                        <a>{postfb.reactions.love} <img src={love} alt="share" /></a>
                                        <a>{postfb.reactions.wow} <img src={wow} alt="share" /></a>
                                       <a>{postfb.shares} <img src={share} alt="share" /></a>
                                        <a className="float-opcion">
                                        {moment(postfb.content.created_at).format('Do MMMM YYYY, h:mm:ss a')}
                                        </a>
                              </div>
                         </div>     
        );
    });
    
   
    return (    
      
                    <div className="columns-post">
                        {renderPosttw}
                    </div>
    );
  }
}

export default Columns;