import React, {Component} from 'react';

class IconLoading extends Component {
	componentDidMount() {
		window.bodymovin.loadAnimation({
		  container: document.getElementById('icon-loading'),
		  renderer: 'svg',
		  loop: true,
		  autoplay: true,
		  path: '/assets/animations/loading.json'
		});
	}

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
			<div id="icon-loading" className="icon-loading" style={loadingStyles}></div>
		);
	}
}

export default IconLoading;
