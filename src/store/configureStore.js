import { createStore, combineReducers } from 'redux';
import expenses_reducer from '../reducers/expenses';
import filters_reducer from '../reducers/filters';
let store = createStore(combineReducers({
    expenses: expenses_reducer,
    filters: filters_reducer
}));
export default () => {
    let store = createStore(combineReducers({
        expenses: expenses_reducer,
        filters: filters_reducer
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
};