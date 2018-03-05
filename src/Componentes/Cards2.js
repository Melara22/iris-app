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

import tw from '../Assets/Iconos/twitterlogo-color.png';
import favorite from '../Assets/Iconos/like@2x.png';
import post1 from '../Assets/Iconos/place_holder.jpg';
import arrow from '../Assets/Iconos/arrow.png';
import fb from '../Assets/Iconos/fb.png';


/*Conexion de api*/
var id = 'ProgramadoresAndanDiciendo';






class Cards extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts:[],
       data:[]
     
    }
  }

  componentDidMount(){
    const {user} = this.props;
    console.log(user);

 const API_fb = 'https://api-inxights-staging.herokuapp.com/public/v1/facebook/posts?api_token=dff91550656ae9ad81dd5758343d1fa56d009afc7dbdc7786b8a1a5f1261c2c9&username='+user;
     axios.get(API_fb)
    .then((res) => {
      this.setState({
        data: res.data.data
      });
    })
    .catch(function(e){
      console.log('ERROR', e);
    })

  }

  render() {

    const {user} = this.props;
    const renderPosttw = this.state.posts.map(function(posttw, i){
      return (
              <div key={i} className="col-xs-12 col-md-15 space ">
                              <div className="card">
                              
                          
                                  <a className="img-card" >
                                  <img src={post1} />
                                  </a>
                              
                                  
                                  <div className="card-content">
                                  <h5><img style={{marginTop:'-10px', marginLeft:'3px'}} src={tw} />{user}</h5>
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
               <h4 className="card-title"><img src={fb} alt="icon-fb" /> {user}</h4>
                
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
         <div align="center">
            {renderPostfb}   
        </div>  
      </div>
    );
  }
}

export default Cards;