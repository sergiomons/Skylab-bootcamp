import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Calculator from './components/Calculator'
import Calculators from './components/Calculators'

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Calculators />, document.getElementById('root'));
registerServiceWorker();