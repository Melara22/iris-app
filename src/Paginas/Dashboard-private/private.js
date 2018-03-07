import React, {Component} from 'react';
import nopo from '../../Assets/Iconos/nopo.png';
import './private.css';
class Private extends Component {

	render() {
		const loadingStyles = {
			height: '100vh',
			width: '100%',
		    display: 'flex',
		    justifyContent: 'center',
		    alignItems: 'center',
		    zIndex:100000,
		};

		return(
			<div id="private" className="icon-loading" style={loadingStyles}>
			<a align="center">
			<img src={nopo}/>
			<h1>¡ALTO AHI!</h1>
			<p>Estas entrando a un dashboard privado, y no tienes acceso necesario para poder ingresar.</p>
			</a>
			</div>
		);
	}
}

export default Private;
