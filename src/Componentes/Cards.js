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
let imgval;





class Cards extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts:[],
       data:[],
       users:[]
    }
  }

  componentDidMount(){
    const {user} = this.props;
    const {socialNetwork} = this.props;
    let APIDa=[];
    let posts=[];
    let value;

    for(var j=0; j<user.length; j++ ){
      if(socialNetwork[j]=="Facebook"){
        APIDa[j] = 'https://api-inxights-staging.herokuapp.com/public/v1/facebook/posts?api_token=c58d7f1fda4f2acd141c1395a2280fcde6cc33cca84ab8dd4362a962f6732ec9&username='+user[j];
      }
      else if(socialNetwork[j]=="twitter"){
        APIDa[j] = 'https://api-inxights-staging.herokuapp.com/public/v1/twitter/posts?username='+user[j];
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
      }))
      .catch(function(e){
        console.log('ERROR ', e);
      })
  }

  render() {
    let renderPostsn;
    let self = this;
    const {user} = this.props;
    // for(var j=0; j<user.length; j++ ){
     let postsOrdenados = this.state.posts.sort((a, b) => new Date(...b.content.created_at.split('/').reverse()) - new Date(...a.content.created_at.split('/').reverse()) );
      
       renderPostsn = postsOrdenados.map(function(postsn, i){
        const DefaultPlaceholdeR = 
          function vavavav(){
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
                 <div  className="col-md-3 space ">
                   <div className="card" key={i}>
                  
              
                       <a className="img-card" >
                       <img src={post1} />
                       </a>
                  
                      
                       <div className="card-content">
                       <h5><img style={{marginTop:'-10px', marginLeft:'3px'}} src={tw} />{postsn.content.username}</h5>
                          <div className="texto-card">
                            <p className="card-text">
                            {postsn.content.message}
                          </p>
                          </div>

                           <div className="opciones">
                             <a>{postsn.retweet} <img src={retweet} alt="share" /></a>
                             <a>{postsn.favorite} <img src={favorite} alt="share" /></a>
                             <a className="float-opcion">
                               {moment(postsn.content.created_at).format('Do MMMM YYYY, h:mm:ss a')}
                               </a>
                           </div>
                       </div>
                      
                   </div>
               </div>
                              
           );
        }
        else{
         return (
                 <div  className="col-md-3 space ">
                    <div className="card" key={i}>
                        <a className="img-card">
                        <DefaultPlaceholdeR />
                      </a>
                        <div className="card-content">
                         <h4 className="card-title"><img src={fb} alt="icon-fb" /> {postsn.content.username}</h4>
                          
                            <div className="texto-card">
                               <p className="card-text">
                               {postsn.content.message}
                                </p>
                               </div> 

                               <div className="opciones">
                                <a>{postsn.reactions.like} <img src={like} alt="share" /></a>
                                <a>{postsn.reactions.love} <img src={love} alt="share" /></a>
                                <a>{postsn.reactions.wow} <img src={wow} alt="share" /></a>
                                
                                <a>{postsn.shares} <img src={share} alt="share" /></a>
                                <a className="float-opcion">
                                {moment(postsn.content.created_at).format('Do MMMM YYYY, h:mm:ss a')}
                                </a>
                              </div>
                           
                          </div>
                      
                   </div>
               </div>
                              
           );

        }
       });

    // }

  
    return (
      <div className="Cards">

                     <div  align="center">
                        {renderPostsn}   
                    </div>  
       
      </div>
    );
  }
  
}

export default Cards;