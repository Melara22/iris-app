import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import '../Assets/ComponentesCSS/columns.css';
import Modals from './modals';

/*Imagenes*/

import megusta from '../Assets/Iconos/icon-fb/like@2x.png';
import amor from '../Assets/Iconos/icon-fb/encanta@2x.png';
import asombra from '../Assets/Iconos/icon-fb/asombra@2x.png';
import triste from '../Assets/Iconos/icon-fb/triste@2x.png';
import enojo from '../Assets/Iconos/icon-fb/enoja@2x.png';
import comentario from '../Assets/Iconos/icon-fb/comentarios@2x.png';
import IconLoading from './icons/IconLoading';
import gif from '../Assets/Iconos/loading.gif';

import agregar from '../Assets/Iconos/Agregar_icon.png';
import likefb from '../Assets/Iconos/likefb.png';
import love from '../Assets/Iconos/reacciones/love.png';
import wow from '../Assets/Iconos/reacciones/wow.png';
import share from '../Assets/Iconos/share.png';
import retweet from '../Assets/Iconos/retweet@2x.png';
import favorite from '../Assets/Iconos/like@2x.png';
import sha from '../Assets/Iconos/sha.png';

import imgstate from '../Assets/Iconos/blank_state.png';
import views from '../Assets/Iconos/views.png';

import logo from '../Assets/img/mara/logo.png';
import tw from '../Assets/Iconos/twitterlogo-color.png';
import fb from '../Assets/Iconos/fb2.png';
import post1 from '../Assets/Iconos/place_holder.jpg';
import{deprueba} from '../Assets/js/script.js';
import * as firebase from 'firebase';
import {config} from '../Assets/js/cons.js';
import {app, verifyDashboards2} from '../Assets/js/script.js';


var numeral = require('numeral');
var id = 'ProgramadoresAndanDiciendo';
var url = window.location.href;
var id1 = url.substring(url.lastIndexOf('/') + 1 );
var ApiSN= "";
/*declaramos como constantes a las APIS*/

class Columns extends Component {
/*declaramos el constructor*/ 
constructor(props){
  super(props);
  this.state = {
    posts:[],
    data:[],
    loading:[],

  }
}

componentDidMount(){
  const {user} = this.props;
  const {socialNetwork} = this.props;
  if(socialNetwork == "facebook"){
    ApiSN = 'https://api-inxights-staging.herokuapp.com/public/v1/facebook/posts?api_token=14c261ec0de964822a4fb1a18538b26a2ed4b661130babda14504db0eb084dde&username='+user; 
     axios.get(ApiSN)
    .then((res) => {
      this.setState({
        data: res.data.data
      });
    })
    .catch(function(e){
      console.log('ERROR', e);
    })
  }
  else if(socialNetwork == "twitter"){
    ApiSN ='https://api-inxights-staging.herokuapp.com/public/v1/twitter/posts?api_token=14c261ec0de964822a4fb1a18538b26a2ed4b661130babda14504db0eb084dde&username='+user;
     axios.get(ApiSN)
    .then(res => {
      const posts = res.data;

      this.setState({ posts });
    })

    .catch(function(e){
      console.log('ERROR', e);
    })
  }
  setTimeout(() => {
    this.setState({loading: [1, 2]});
  },3000);
 
}

columnsDiv(){

}

render() {
const {socialNetwork} = this.props;
let renderSn
var contadorf = this.state.data;
var contadort = this.state.posts;

if(contadorf.length >0  || contadort.length >0 ){
  if(socialNetwork == "facebook"){
   renderSn = this.state.data.map(function(postFb, i){

      if(postFb.content.type == "video"){
       return(
        <div key={i}>
          <div className="col-md-12 header-column" style={{ marginBottom:"-390px", marginTop:"15px"}}>
            <img className="img-circle profile" src={postFb.content.profile_picture}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img className="profile-social" src={fb}/>&nbsp;<h2>{postFb.content.username}</h2>
         </div>
        <div className="columns-post">
        
         <div  className="thumbnail card-column" style={{marginLeft:"10px"}}>
            <div className="caption">
            <p className="date">
                  {moment(postFb.content.created_at).format('Do MMMM YYYY, h:mm:ss a')}
                  </p>

                <p>{postFb.content.message}</p>
               
              </div>

              <video height="250" controls>
                <source src={postFb.content.source}/>
              </video>
            
             <div className="opciones2">
                   <a className="btn"> <img src={megusta} alt="share" /> {numeral(postFb.reactions.like).format('0 a')}</a>&nbsp;
                  <a>{numeral(postFb.reactions.love).format('0 a')} <img src={amor} alt="share" /></a>&nbsp;
                  <a>{numeral(postFb.reactions.wow).format('0 a')} <img src={asombra} alt="share" /></a>&nbsp;
                  <a>{numeral(postFb.reactions.sad).format('0 a')}<img src={triste} alt="icon-fb" /></a>          
                  <a>{numeral(postFb.reactions.angry).format('0 a')}<img src={enojo} alt="icon-fb" /></a>&nbsp; 
                  <a>{numeral(postFb.content.comments).format('0 a')}<img src={comentario} alt="icon-comentario"/></a>          
             </div>
           </div> 
        </div> 
        </div>
        );
     }
     else {
         return(
           <div key={i}>
          <div className="col-md-12 header-column" style={{ marginBottom:"-390px", marginTop:"15px"}}>
            <img className="img-circle profile" src={postFb.content.profile_picture}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img className="profile-social" src={fb}/>&nbsp;<h2>{postFb.content.username}</h2>
         </div>
         <div className="columns-post">
           <div key={i} className="thumbnail card-column" style={{marginLeft:"10px"}}>
              <div className="caption">
                <p className="date">
                {moment(postFb.content.created_at).format('Do MMMM YYYY, h:mm:ss a')}
                </p>

                <p>{postFb.content.message}</p>
               
              </div>

              <img src={postFb.content.picture} />

               <div className="opciones2">
                    <a className="icon">{numeral(postFb.reactions.like).format('0 a')} <img src={megusta} alt="share" /></a>&nbsp;
                    <a>{numeral(postFb.reactions.love).format('0 a')} <img src={amor} alt="share" /></a>&nbsp;
                    <a>{numeral(postFb.reactions.wow).format('0 a')} <img src={asombra} alt="share" /></a>&nbsp;
                    <a>{numeral(postFb.reactions.sad).format('0 a')}<img src={triste} alt="icon-fb" /></a>&nbsp;
                    <a>{numeral(postFb.reactions.angry).format('0 a')}<img src={enojo} alt="icon-fb" /></a>&nbsp; 
                    <a>{numeral(postFb.content.comments).format('0 a')}<img src={comentario} alt="icon-comentario"/></a>     
               </div>
            </div> 
           </div>
          </div>
        );
     }



    }); 
  }
else{


     renderSn = this.state.posts.map(function(posttw, i){
      return(
         
           <div key={i}  className="columns-post">
           <div>
            <div className="col-md-12 header-column" style={{ marginBottom:"-390px", marginTop:"15px"}}>
              <img className="img-circle profile" src="http://via.placeholder.com/500x500"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img className="profile-social" src={tw}/>&nbsp;<h2>{posttw.content.username}</h2>
           </div>
           <div className="thumbnail card-column" style={{marginLeft:"10px"}}>
                <div className="caption">
                    <p className="date">
                     {moment(posttw.created_at).format('Do MMMM YYYY, h:mm:ss a')}
                      </p>
                    <p>{posttw.content.message}</p>
                  </div>
              
                 <div className="opciones2">
                       <a>{posttw.retweet} <img src={retweet} alt="share" /></a>
                      <a>{posttw.favorite} <img src={favorite} alt="share" /></a>
                </div>                
            </div>
           </div>                
        </div>
        );
    });       
  }
} 
else{
  return(
      
      <div className="blankStateD">
        <div className="item" >
        <img src={gif}/>
        
        </div>
      </div>
  );
}
    return (
      <div>
          {renderSn}
      </div>
    );
  }
}

export default Columns;