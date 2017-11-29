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
    }));
    return store;
};