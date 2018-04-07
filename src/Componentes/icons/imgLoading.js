import React, {Component} from 'react';

class ImgLoading extends Component {
	componentDidMount() {
		window.bodymovin.loadAnimation({
		  container: document.getElementById('img-loading'),
		  renderer: 'svg',
		  loop: true,
		  autoplay: true,
		  path: '/assets/animations/loading_interno.json'
		});
	}

	render() {
		const loadingStyles = {
			
		};

		return(
			<div id="img-loading" className="img-loading" style={loadingStyles}></div>

		);
	}
}

export default ImgLoading;
