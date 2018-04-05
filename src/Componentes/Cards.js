import React, { Component } from 'react';
import axios  from 'axios';
import moment from 'moment';

import 'moment/locale/es';
import '../Assets/ComponentesCSS/Cards.css';


import Modals from './modals';
/*Imagenes*/
import agregar from '../Assets/Iconos/Agregar_icon.png';

import megusta from '../Assets/Iconos/icon-fb/like@2x.png';
import amor from '../Assets/Iconos/icon-fb/encanta@2x.png';
import asombra from '../Assets/Iconos/icon-fb/asombra@2x.png';
import triste from '../Assets/Iconos/icon-fb/triste@2x.png';
import enojo from '../Assets/Iconos/icon-fb/enoja@2x.png';
import comentario from '../Assets/Iconos/icon-fb/comentarios@2x.png';

import fav from '../Assets/Iconos/icon-tw/fav@.png';
import rt from '../Assets/Iconos/icon-tw/ret.png';





import divierte from '../Assets/Iconos/reacciones/divierte.png';
import love from '../Assets/Iconos/reacciones/love.png';
import wow from '../Assets/Iconos/reacciones/wow.png';
import retweet from '../Assets/Iconos/retweet@2x.png';
import share from '../Assets/Iconos/share.png';

import likefb from '../Assets/Iconos/likefb.png';
import tw from '../Assets/Iconos/twitterlogo-color.png';
import favorite from '../Assets/Iconos/like@2x.png';
import post1 from '../Assets/Iconos/place_holder.jpg';
import arrow from '../Assets/Iconos/arrow.png';
import fb from '../Assets/Iconos/fb.png';
import * as firebase from 'firebase';
import {config} from '../Assets/js/cons.js';
import {app} from '../Assets/js/script.js';


var numeral = require('numeral');
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Masonry = require ( 'masonry-layout' );
/*Conexion de api*/
var id = 'ProgramadoresAndanDiciendo';
let imgval;



class Cards extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts:[],
       data:[],
       users:[],
       
    }
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


  componentDidMount(){
    const {user} = this.props;
    const {socialNetwork} = this.props;
    let APIDa=[];
    let posts=[];
    let value;

    for(var j=0; j<user.length; j++ ){
      if(socialNetwork[j]=="Facebook"){
        APIDa[j] = 'https://api-inxights-staging.herokuapp.com/public/v1/facebook/posts?api_token=14c261ec0de964822a4fb1a18538b26a2ed4b661130babda14504db0eb084dde&username='+user[j];
      }
      else if(socialNetwork[j]=="twitter"){
        APIDa[j] = 'https://api-inxights-staging.herokuapp.com/public/v1/twitter/posts?api_token=14c261ec0de964822a4fb1a18538b26a2ed4b661130babda14504db0eb084dde&username='+user[j];
      }
    }
      let _this = this;
      axios.all(APIDa.map(l => axios.get(l)))
      .then(axios.spread((...res) => {
        for(var j=0; j<user.length; j++ ){
          // console.log({
          //   ...this.state.posts,
          //   ...res[j].data
          // });
          if(socialNetwork[j]=="Facebook"){

          this.setState({
            posts: [
              ...this.state.posts,
              ...res[j].data.data
            ]
          });
          }
          else if(socialNetwork[j]=="twitter"){
            this.setState({
            posts: [
              ...this.state.posts,
              ...res[j].data
            ]
          });
          }
        }

        setTimeout(() => {
          this.invokeMasonry();
        }, 200);
      }))
      .catch(function(e){
        console.log('ERROR ', e);
      })


      
      
  }

  invokeMasonry(){
    var msnry;
    msnry = new Masonry( '.cards', {
        itemSelector: '.grid-item',
        
  percentPosition: true
    });

    console.log({msnry});    
  }

  render() {
    let renderPostsn;
    let self = this;
    const {user} = this.props;
    // for(var j=0; j<user.length; j++ ){

     let postsOrdenados = this.state.posts.sort((a, b) => new Date(...b.content.created_at.split('/').reverse()) - new Date(...a.content.created_at.split('/').reverse()) );
      
       renderPostsn = postsOrdenados.map(function(postsn, i){
        const DefaultPlaceholdeR = 
          function placeholder(){
            if(postsn.content.picture == null){
              return(<img src={post1}/>);
            } 
            else{
              return(<img src={postsn.content.picture}/>);
            }
          }
        var usernamevar=postsn.content.username;
        var usersplit = usernamevar.split("@");
        if(usersplit.length>1){
         return (
                 <div  className="grid-item col-md-3 col-lg-5 space ">
                   
                  
                         <div className="thumbnail card-post" key={i}>
          <img src={postsn.content.media.media_url_https} />
              <div className="caption">
                <div className="text-cards">
                <span><p>{moment(postsn.content.created_at).format('Do MMMM YYYY, h:mm:ss a')}</p></span>
                <p className="post-name">{postsn.content.username}</p>
                </div>
                <p className="post-description">{postsn.content.message}</p>
                 
                <div className="row">
                 <div className="reaction-post col-md-8">
                <a className="btn" role="button"><img src={rt} />{postsn.retweet}</a>
                <a className="btn" role="button"><img src={fav} />{postsn.favorite}</a> 
                
                
                </div>
                
                </div>
            </div>
          </div>


               </div>
                              
           );
        }
        else{
         if(postsn.content.type == "video") {return (
                 <div  className="grid-item col-md-3 col-lg-5 space ">
                    

                   <div className="thumbnail card-post">
           <video height="300" controls>
                                      <source src={postsn.content.source}/>
                                    </video>
              <div className="caption">
                <div className="text-cards">
                <span><p>{moment(postsn.content.created_at).format('Do MMMM YYYY, h:mm:ss a')}</p></span>
                <p className="post-name">{postsn.content.username}</p>
                </div>
                <p className="post-description">{postsn.content.message}</p>
                 
                <div className="row">
                 <div className="reaction-post col-md-8">
                <a className="btn" role="button"><img src={megusta} />{numeral(postsn.reactions.like).format('0 a')}</a>
                <a className="btn" role="button"><img src={amor} />{numeral(postsn.reactions.love).format('0 a')}</a> 
                <a className="btn" role="button"><img src={asombra} />{numeral(postsn.reactions.wow).format('0 a')}</a> 
                <a className="btn" role="button"><img src={triste} />{numeral(postsn.reactions.SAD).format('0 a')}</a> 
                <a className="btn" role="button"><img src={enojo} />{numeral(postsn.reactions.ANGRY).format('0 a')}</a> 
                
                </div>
                <div className="col-md-4 coment-icon">
                <a className="btn pull-right" role="button"><img src={comentario} width="12"/>350</a>
                </div>
                </div>
            </div>
          </div>
               </div>
                              
           );
          }
        else{
            return(
            <div  className="grid-item col-md-3 col-lg-5 space ">
                    

                   <div className="thumbnail card-post">
          <DefaultPlaceholdeR />
              <div className="caption">
                
                <div className="row">
                <div className="col-md-3">
                   
                </div>

                <div className="col-md-8">
                <div className="text-cards">
                <span><p>{moment(postsn.content.created_at).format('Do MMMM YYYY, h:mm:ss a')}</p></span>
                <p className="post-name">{postsn.content.username}</p>
                </div>
                </div>
                
                </div>
                <p className="post-description">{postsn.content.message}</p>
                 
                <div className="row">
                 <div className="reaction-post col-md-8">
                <a className="btn" role="button"><img src={megusta} />{numeral(postsn.reactions.like).format('0 a')}</a>
                <a className="btn" role="button"><img src={amor} />{numeral(postsn.reactions.love).format('0 a')}</a> 
                <a className="btn" role="button"><img src={asombra} />{numeral(postsn.reactions.wow).format('0 a')}</a> 
                <a className="btn" role="button"><img src={triste} />{numeral(postsn.reactions.SAD).format('0 a')}</a> 
                <a className="btn" role="button"><img src={enojo} />{numeral(postsn.reactions.ANGRY).format('0 a')}</a> 
                
                </div>
                <div className="col-md-4 coment-icon">
                <a className="btn pull-right" role="button"><img src={comentario} width="12"/>350</a>
                </div>
                </div>
            </div>
          </div>
               </div>
               );
        }
          
        }
        
       });

    // }

  
    return (
    
      <div className="cards row">

                     
                        {renderPostsn}  
                          {this.userLogged && (
                         <div className="grid-item col-md-3 col-lg-5">
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
                          </div>
                                      
                          )}
                     
       
      </div>
      
    );
  }
  
}

export default Cards;