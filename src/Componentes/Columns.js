import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import '../Assets/ComponentesCSS/columns.css';
import Modals from './modals';

/*Imagenes*/

import agregar from '../Assets/Iconos/Agregar_icon.png';
import like from '../Assets/Iconos/likes.png';
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

var id = 'ProgramadoresAndanDiciendo';
/*declaramos como constantes a las APIS*/
const API_tw ='https://api-inxights-staging.herokuapp.com/public/v1/twitter/posts?username=prensagrafica';
const API_fb = 'https://api-inxights-staging.herokuapp.com/public/v1/facebook/posts?api_token=e4d21ec722cc86d79d71ffb5aee4cfa2176e28cbbd612f181bd3083b3a02553d&username='+id;

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
  var _this = this;
  axios.get(API_tw)
  .then(res => {
    const posts = res.data;
    _this.setState({ posts });
  })

  .catch(function(e){
    console.log('ERROR' , e);
  })

  axios.get(API_fb)
  .then(function(res){
    console.log(res)
    _this.setState({
      data: res.data.data
    });
  })

  .catch(function(e){
    console.log('ERROR', e);
  })
}

  render() {
     var id = 'ProgramadoresAndanDiciendo';
    const renderPosttw = this.state.posts.map(function(posttw, i){
      return(
                             <div key={i} className="thumbnail">
                                  <div className="caption">
                                      
                                      <p>{posttw.text}</p>
                                    </div>
                                
                                   <div className="opciones2">
                                         <a>{posttw.retweet_count} <img src={retweet} alt="share" /></a>
                                        <a>{posttw.favorite_count} <img src={favorite} alt="share" /></a>
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
                                         <a>{postfb.reactions.like} <img src={like} alt="share" /></a>
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
    console.log(renderPostfb)
    return (
   
      <div className="Columns">
               <div className="row">
               

               <div className="col-md-3 col-lg-3">
                          <div className="post-view">

                              <div className="col-md-8 logo-pagina">
                              <h2><img src={tw} /></h2>
                              </div>

                              <div className="col-md-4 logo-pagina">
                              
                              
                              </div>
                               <div className="columns-post">
                        {renderPosttw}
                      </div>
                   </div>

                
</div>


                    <div className="col-md-3 col-lg-3">
                          <div className="post-view">

                              <div className="col-md-8 logo-pagina">
                              <h2><img src={fb} />{id}</h2>
                              </div>

                              <div className="col-md-4 logo-pagina">
                              
                             
                              </div>
                      <div className="columns-post">
                        {renderPostfb}
                      </div>
                        </div>
                </div>
                        
                        
                       
                           <div className=" col-md-3 col-lg-3 post-div" align="center">
                            <div className="content-post">
                              <a data-toggle="modal" data-target="#myModal">
                              <img src={agregar} />
                              </a>
                              <p>Agregar una pagina</p>
                              <Modals />

                            </div>
                          </div>
                    </div>   

      </div>
    );
  }
}

export default Columns;
