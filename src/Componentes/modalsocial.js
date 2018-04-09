import React, { Component } from 'react';

import '../Assets/ComponentesCSS/modals.css';

import facebook from '../Assets/Iconos/fb.png';
import tw from '../Assets/Iconos/twitterlogo-color.png';


import{createDashboard, createSocialNetwork, } from '../Assets/js/script.js';


class Modalssocial extends Component {
   
  render() {

    return (
      <div className="modalsocial">

                  <div id="modal-account" className="modal modal5 fade" role="dialog" >
              <div className="modal-dialog modal-dialog1 ">

              
                <div className="modal-content modal-content1">
              
                  <div className="modal-body modal-body5">
                    <div className="account-header">
                    <h2>Edita tus cuentas</h2>
                    <p>Selecciona las cuentas que desees eliminar en tu dashboard</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="account">


                            <div className="col-md-3">

                             <img src={facebook} alt="logo-fb"/>  
                            </div>

                            <div className="col-md-6">
                                <span className="name">lorem ipsum</span>
                                <span className="username">@lorenipsum</span>
                            </div>
                            <div className="col-md-3">
                           <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            </div>



                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="account">
                                <div className="col-md-3">

                             <img src={tw} alt="logo-fb"/>  
                            </div>

                            <div className="col-md-6">
                                <span className="name">lorem ipsum</span>
                                <span className="username">@lorenipsum</span>
                            </div>
                            <div className="col-md-3">
                           <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            </div>


                            </div>
                        </div>

                    </div>

                 
                  </div>

                  
                </div>

               

              </div>
            </div>
     



        	


			  
			  
      </div>


    );
  }
}

export default Modalssocial;