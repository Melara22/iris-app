import React from 'react';
import AlertWarning from './alertWarning.js'
import '../../Assets/ComponentesCSS/alerts.css';
class YouAreOffline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOnline: window.navigator.onLine
        }
        this.offlineMessage = this.props.whenOffline || <AlertWarning />;
        this.onlineMessage = this.props.whenOnline || 'Online';
        this.offlineStyle = this.props.style || { color: 'red' };
        this.onlineStyle = this.props.style || { color: 'transparent', display:'none' };
        this.offlineClass = this.props.className || ''
        this.onlineClass = this.props.className || '';
    }

    componentDidMount() {
        window.addEventListener('online', this.putOnline.bind(this));
        window.addEventListener('offline', this.putOffline.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.putOnline.bind(this));
        window.removeEventListener('offline', this.putOffline.bind(this));
    }

    putOnline() {
        this.setState({ isOnline: true });
        console.info('went online');
    }


    putOffline() {
        this.setState({ isOnline: false });
        console.info('went offline');
    }

    render() {
        let style = this.state.isOnline ? this.onlineStyle : this.offlineStyle;
        let className = this.state.isOnline ? this.onlineClass : this.offlineClass;
        return (
            <span style={style} className={className}>
               
                      {this.state.isOnline ? this.onlineMessage : this.offlineMessage}
                    

                
            </span>
        )
    }
}

export { YouAreOffline };