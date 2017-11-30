import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './Router/AppRouter';
import 'normalize.css/normalize.css'; // this module resets the css browser configurations to the default settings.
import './styles/styles.scss'; // loades the styles file which we configured webpack to read in bwepack config file.
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter , setSortByAmount, setSortByDate} from './actions/filters';
import getvisiableExpenses from './selectors/expenses';

const store = configureStore() ;


   
store.dispatch(addExpense({
    description: 'WATER BELL',
    note: 'THIS IS MY WATER BELL FOR JULY',
    amount: 54500,
    createdAt: -1000
}));
store.dispatch(addExpense({
    description: 'GAS BELL',
    note: 'THIS IS MY GAS BELL FOR JULY',
    amount: 600000,
    createdAt: 2000
}));
store.dispatch(addExpense({
    description: 'CAR BELL',
    note: 'THIS IS MY CAR BELL FOR JULY',
    amount: 40000,
    createdAt: 3000
}));
store.dispatch(addExpense({
    description: 'FOOD BELL',
    note: 'THIS IS MY FOOD BELL FOR JULY',
    amount: 100000,
    createdAt: -3000
}));




const state = store.getState();
const visiableExpenses = getvisiableExpenses(state.expenses,state.filters);

console.log(visiableExpenses);



   const jsx = ( 
      <Provider store = {store}> 
         <AppRouter />
      </Provider>
)


ReactDOM.render(jsx,document.getElementById('app'));