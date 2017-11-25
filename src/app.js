import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import 'normalize.css/normalize.css' // this module resets the css browser configurations to the default settings.
import './styles/styles.scss'; // loades the styles file which we configured webpack to read in bwepack config file.





        

ReactDOM.render(<AppRouter />,document.getElementById('app'));