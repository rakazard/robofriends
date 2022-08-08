import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import  'tachyons';


ReactDOM.render(
  <React.StrictMode>
    {/* <Card id={robos[0].id} name={robos[0].name}/>
    <Card id={robos[1].id} name={robos[1].name} />
    <Card id={robos[2].id} name={robos[2].name} />
    <Card id={robos[3].id} name={robos[3].name} />
    <Card id={robos[4].id} name={robos[4].name} /> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


