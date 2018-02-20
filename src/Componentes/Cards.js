import React, { Component } from 'react';
import axios  from 'axios';
import moment from 'moment';
import 'moment/locale/es';
import '../Assets/ComponentesCSS/Cards.css';


import Modals from './modals';
/*Imagenes*/
import agregar from '../Assets/Iconos/Agregar_icon.png';
import like from '../Assets/Iconos/likes.png';
import divierte from '../Assets/Iconos/reacciones/divierte.png';
import love from '../Assets/Iconos/reacciones/love.png';
import wow from '../Assets/Iconos/reacciones/wow.png';
import retweet from '../Assets/Iconos/retweet@2x.png';
import share from '../Assets/Iconos/share.png';
import favorite from '../Assets/Iconos/like@2x.png';
import post1 from '../Assets/Iconos/place_holder.jpg';
import arrow from '../Assets/Iconos/arrow.png';
import fb from '../Assets/Iconos/fb.png';


/*Conexion de api*/
var id = 'ProgramadoresAndanDiciendo';
const API_tw = 'https://api-inxights-staging.herokuapp.com/public/v1/twitter/posts?username=prensagrafica';
const API_fb = 'https://api-inxights-staging.herokuapp.com/public/v1/facebook/posts?api_token=e4d21ec722cc86d79d71ffb5aee4cfa2176e28cbbd612f181bd3083b3a02553d&username='+id;





class Cards extends Component {

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
      console.log('ERROR ', e);
    })

    axios.get(API_fb)
    .then(function(res){
      console.log(res)
      _this.setState({
        data: res.data.data
      });
    })

    .catch(function(e){
      console.log('ERROR ', e);
    })

  }

  render() {
     var id = 'ProgramadoresAndanDiciendo';
     
    const renderPosttw = this.state.posts.map(function(posttw, i){
      return (
              <div key={i} className="col-xs-12 col-md-15 space ">
                              <div className="card">
                              
                          
                                  <a className="img-card" >
                                  <img src={post1} />
                                  </a>
                              
    
                                  <div className="card-content">
                                     <div className="texto-card">
                                       <p className="card-text">
                                       {posttw.text}
                                       {posttw.entities.urls.url}
                                     </p>
                                     </div>

                                      <div className="opciones">
                                        <a>{posttw.retweet_count} <img src={retweet} alt="share" /></a>
                                        <a>{posttw.favorite_count} <img src={favorite} alt="share" /></a>
                                        <a className="float-opcion">
                                          {moment(posttw.created_at).format('Do MMMM YYYY, h:mm:ss a')}
                                          </a>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>
                            
        );
    });
    
    const renderPostfb = this.state.data.map(function(postfb, i){
      return(
       
        <div key={i} className="col-xs-12 col-md-15 space ">
                              <div className="card">
                                  <a className="img-card">
                                  <img src={postfb.content.picture} />
                                </a>
                                  <div className="card-content">
                                 <h4 className="card-title"><img src={fb} alt="icon-fb" /> {id}</h4>
                                  
                                    <div className="texto-card">
                                       <p className="card-text">
                                       {postfb.content.message}
                                        </p>
                                       </div> 

                                       <div className="opciones">
                                        <a>{postfb.reactions.like} <img src={like} alt="share" /></a>
                                        <a>{postfb.reactions.love} <img src={love} alt="share" /></a>
                                        <a>{postfb.reactions.wow} <img src={wow} alt="share" /></a>
                                        
                                        <a>{postfb.shares} <img src={share} alt="share" /></a>
                                        <a className="float-opcion">
                                        {moment(postfb.content.created_at).format('Do MMMM YYYY, h:mm:ss a')}
                                        </a>
                                      </div>
                                   
                                  </div>
                                   
                                  
                              </div>
                          </div>
        );

    });
   
    return (
      <div className="Cards">

                     <div className="row " align="center">
                        {renderPosttw}
                         
                    </div> 

                    <div className="row " align="center">
                        {renderPostfb}
                         <div className="col-xs-12 col-md-15">
                              <div className="card post-nuevo">
                                  <a className="img-card">
                                  
                                </a>
                                  <div className="content-post" align="center">
                                      <a data-toggle="modal" data-target="#myModal">

                                     <img src={agregar} alt="agregar" />
                                      </a>
                                      <p>Agregar una pagina</p>

                                      
                                  </div>
                              
                              </div>
                              <Modals />
                          </div>
                    </div>   
       
      </div>
    );
  }
}

export default Cards;