# You Are Offline element for ReactJS

[![npm](https://img.shields.io/npm/v/react-you-are-offline.svg)](https://www.npmjs.com/package/react-you-are-offline)
![gzip size](http://img.badgesize.io/https://unpkg.com/react-you-are-offline?compression=gzip&label=gzip%20size)
![badges](https://img.shields.io/badge/license-ISC-lightgrey.svg)

ReactJS library to output a text when browser is offline (real offline as no wifi or throttled offline).

By default it renders green 'online' when online and red 'offline', when offline. But it is possible to override styles, classes and the messages. See "Configuration examples" lower.

## Installation

```
    yarn add react-you-are-offline
    // or
    npm i react-you-are-offline
```

## Usage

```jsx
import { YouAreOffline } from 'react-you-are-offline';

class MyComponent extends React.Component {
    render(){
        return (
            <YouAreOffline />
        )
    }
}

export default MyComponent;
```

## Configuration examples

### Customize online status
```jsx
    let message = 'You are online';
    let customStyle = { color: 'limegreen', backgroundColor: '#333333' };
    let customClass = 'alert alert-success'
    <YouAreOffline whenOnline={customMessage} onlineStyle={customStyle} onlineClass={customClass}/>
```

### Customize offline status
```jsx
    let message = 'You are OFFLINE!';
    let customStyle = { color: 'orange', backgroundColor: '#333333' };
    let customClass = 'alert alert-danger'
    <YouAreOffline whenOffline={customMessage} offlineStyle={customStyle} offlineClass={customClass}/>
```

## Licence

This software is released under [ISC licence](https://choosealicense.com/licenses/isc/)