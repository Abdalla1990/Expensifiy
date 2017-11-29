import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import 'normalize.css/normalize.css'; // this module resets the css browser configurations to the default settings.
import './styles/styles.scss'; // loades the styles file which we configured webpack to read in bwepack config file.
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter , setSortByAmount, setSortByDate} from './actions/filters';
import getvisiableExpenses from './selectors/expenses';

const store = configureStore() ;


   
store.dispatch(addExpense({
    descreption: 'WATER BELL',
    note: 'THIS IS MY WATER BELL FOR JULY',
    amount: 54500,
    createdAt: -1000
}));
store.dispatch(addExpense({
    descreption: 'GAS BELL',
    note: 'THIS IS MY GAS BELL FOR JULY',
    amount: 600000,
    createdAt: 2000
}));
store.dispatch(setTextFilter());
store.dispatch(setSortByDate());
const state = store.getState();
const visiableExpenses = getvisiableExpenses(state.expenses,state.filters);

console.log(visiableExpenses);



   


ReactDOM.render(<AppRouter />,document.getElementById('app'));