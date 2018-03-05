import React, { Component } from 'react';

import '../Assets/ComponentesCSS/modals.css';

import facebook from '../Assets/Iconos/fb.png';
import AlertValidation from './alerts/alertValidation';
import AlertAdd from './alerts/alertAdd';
import tw from '../Assets/Iconos/twitterlogo-color.png';
import layout from '../Assets/Iconos/layout.png';
import layout1 from '../Assets/Iconos/layout1.png';
import publico from '../Assets/Iconos/icono_publico.png';
import privado from '../Assets/Iconos/privado.png';
import{createDashboard, createSocialNetwork} from '../Assets/js/script.js';


class Modals extends Component {
    constructor(props) {
    super(props);

    this.state = {
      msg: null
    };

    this.signInGoo = this.signInGoo.bind(this);
  }

  signInGoo() {
    const goo = createDashboard();

    goo.then((resp) => {

      if (resp.status === true) {
        //const {name, email, uid} = resp;
        this.setState({msg: <AlertAdd />});

        //checkIfUserExists(name, email, uid);
      } else {
        this.setState({msg: <AlertValidation />});
        
        //extermin();
      }

      console.log({then: resp});
    }).catch((resp) => {
      if (resp.status === false) {
        this.setState({msg: <AlertValidation />});
      }

      // console.log({catch: resp});
    });
  }
  render() {

    return (
      <div className="Modals">
      		<div id="myModal" className="modal modal1 fade" role="dialog">
			  <div className="modal-dialog modal-dialog1 ">

			  
			    <div className="modal-content modal-content1">
			     
			      <div className="modal-body modal-body1">
			      
			        <h2>Seleccione una red social</h2>
			        <p>Agregar una cuenta a tu dashboard y revisa constantemente su contenido</p>

			        <div className="redes">
    			     <input type="radio" className="radio_item" value="" name="item" id="radio1"/>
                     <label className="label_item" htmlFor="radio1"> <img src={facebook} /> </label>
                     <input type="radio" className="radio_item" value="" name="item" id="radio2"/>
                     <label className="label_item" htmlFor="radio2"> <img src={tw} /> </label>
			     </div>

			     <form>
			     	<div className="form-group" align="center">
					   
					    <input type="email" className="form-control input-color-blue" id="usname"/>
					  </div>
			     </form>
			      <a onClick={createSocialNetwork} className="btn bt-primary btnAgregar">Agregar cuenta</a>
			      </div>

			      
			    </div>

			   

			  </div>
			</div>
        	



        	<div className="modal modal2 fade" id="myModal2" role="dialog">
			    <div className="modal-dialog modal-dialog2 ">

			      <div className="modal-content modal-content2">
			         {this.state.msg}  
			        <div className="modal-body modal-body2">
			        	<div className="row">
			         	 <form>
			                  <h4 id="modalActionVal">Nuevo Dashboard</h4>
			                  <div className="form-group">
			                  	<input className="form-control input-noborder" id="dname" placeholder="Dashboard name" required/>
                                <hr/>
                                <textarea className="form-control input-noborder" id="ddescription" placeholder="Dashboard description" required></textarea>
			                  </div>
                		</form>

                		<div className="seleccion-col">
                			<h4>Diseño</h4>

                			<div className="row">
                				<div className="col-md-4">
	                				<div className="radio radio-danger">
									  <label><input type="radio" name="optradio" id="columns"/>Columnas</label>
									</div>
                				</div>
                				<div className="col-md-8 layout" align="left">
	                				<img src={layout} alt="radio-opcion" />
	                				<p>Lorem ipsum</p>
                				</div>
                			</div>

                			<br />

                			<div className="row">
                				<div className="col-md-4">
	                				<div className="radio radio-danger">
									  <label><input type="radio" name="optradio" id="cards" />Cards</label>
									</div>
                				</div>


                				<div className="col-md-8 layout" align="left">
                				<img src={layout1} alt="radio-opcion2" />
                				<p>Lorem ipsum</p>
                				</div>
                			</div>
                		</div>
                		<form>
                		<div className="seleccion-col">
                			<h4>Privacidad</h4>

                			<div className="row">
                				<div className="col-md-4">
	                				<div className="radio radio-danger">
									  <label><input type="radio" name="optradio" id="publi" /><img src={publico} alt="opcion2.2" /></label>
									</div>
                				</div>
                				<div className="col-md-8 layout" align="left">
	                				
	                				<p>Publico para todos los usuarios</p>
                				</div>
                			</div>

                			<br />

                			<div className="row">
                				<div className="col-md-4">
	                				<div className="radio radio-danger">
									  <label><input type="radio" name="optradio" id="priv" /><img src={privado} alt="privado"/></label>
									</div>
                				</div>


                				<div className="col-md-8 layout" align="left">
                				
                				<p>Privado</p>
                				</div>
                			</div>
                		</div>

                		<div className="btn-right">
                		<a onClick={this.signInGoo} className="btn btn-primary btn-green" >Crear dashboard</a>
                		</div>
                		</form>

                	</div>

			        </div>
			        
			      </div>
			    </div>
			  </div>

			  <div className="modal modal2 fade" id="myModal3" role="dialog">
			    <div className="modal-dialog modal-dialog2 ">
			      <div className="modal-content modal-content2">
			        
			        <div className="modal-body modal-body2">
			        	<div className="row">
			         	 <form >
			                  <h4>Actualizar Dashboard</h4>
			                  <div className="form-group">
			                  	<input required className="form-control input-noborder" placeholder="Nombre de dashboard" id="dashnameUpd" />
                                <br/>
                                <textarea className="form-control input-noborder" id="descriptionUpd" placeholder="Dashboard description" required></textarea>
			                  </div>
                		</form>

                		<div className="seleccion-col">
                			<h4>Diseño</h4>

                			<div className="row">
                				<div className="col-md-4">
	                				<div className="radio radio-danger">
									  <label><input id="colUpd" type="radio" name="optradio" />Columnas</label>
									</div>
                				</div>
                				<div className="col-md-8 layout" align="left">
	                				<img src={layout} alt="radio-opcion3" />
	                				<p>Lorem ipsum</p>
                				</div>
                			</div>

                			<br />

                			<div className="row">
                				<div className="col-md-4">
	                				<div className="radio radio-danger">
									  <label><input type="radio" id="cardUpd" name="optradio" />Cards</label>
									</div>
                				</div>


                				<div className="col-md-8 layout" align="left">
                				<img src={layout1} alt="radio-opcion4"/>
                				<p>Lorem ipsum</p>
                				</div>
                			</div>
                		</div>
                		<form>
                		<div className="seleccion-col">
                			<h4>Privacidad</h4>

                			<div className="row">
                				<div className="col-md-4">
	                				<div className="radio radio-danger">
									  <label><input type="radio" id="publiUpd" name="optradio" /><img src={publico} alt="public2" /></label>
									</div>
                				</div>
                				<div className="col-md-8 layout" align="left">
	                				
	                				<p>Publico para todos los usuarios</p>
                				</div>
                			</div>

                			<br />

                			<div className="row">
                				<div className="col-md-4">
	                				<div className="radio radio-danger">
									  <label><input type="radio" id="privateUpd" name="optradio" /><img src={privado} alt="privated" /></label>
									</div>
                				</div>


                				<div className="col-md-8 layout" align="left">
                				
                				<p>Privado</p>
                				</div>
                			</div>
                		</div>

                		<div className="btn-right">
                		<a onClick={this.signInGoo} className="btn btn-primary btn-green">Actualizar dashboard</a>
                		</div>
                		</form>

                	</div>

			        </div>
			        
			      </div>
			    </div>
			  </div>


			  
			  
      </div>


    );
  }
}

export default Modals;