import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'Date',
    startDate: undefined,
    endDate: undefined
}

const expenses_reducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];


        case 'REMOVE_EXPENSE':
            return state.filter((ex) => {
                return ex.id !== action.expense.id; // this is the only condition that will not return a value 
            });

        case 'EDIT_EXPENSE':
            return state.map((ex) => {
                if (ex.id === action.id) {
                    // using spread operator with objects >> { ...Obj , newKey or override existing key} returns the same object with overrided values or new values 
                    return {...ex,
                        ...action.updates
                    }

                } else {
                    return ex
                }
            })

        default:
            return state;
    }

};
const filters_reducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_SORT_BY_FILTER':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

//store creation 
let store = createStore(combineReducers({
    expenses: expenses_reducer,
    filters: filters_reducer
}));






// Filtering The Expenses 

const getVisiableExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((ex) => {
        // if the startDate is undefined it will result in true ,, if the created at is bigger than the start date filter it will result in true 
        const startDateMatch = typeof startDate !== 'number' || ex.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || ex.createdAt <= endDate;
        const textMatch = ex.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch // if any of these results in true , the ex wont be returned .
    }).sort((a, b) => {
        if (sortBy === 'Date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'Amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// SUBSCRIPTION TO TRACK DOWN ALL UPDATES TO THE STORE STATE . 
store.subscribe(() => {
    const state = store.getState();
    //console.log(state);
    console.log(getVisiableExpenses(state.expenses, state.filters));
})

// MY ACTION GENERATORS

// ADD_EXPENSE

// action name : addExpense the type 'ADD_EXPENSE' the values : action.expense <<(use this inside the reducer)
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({ type: 'ADD_EXPENSE', expense: { id: uuid(), description, note, amount, createdAt } });

// DISPATCH ACTIONS ! 
const expense1 = store.dispatch(addExpense({
    description: 'RENT',
    note: 'THIS IS MY RENT FOR JULY',
    amount: 54500,
    createdAt: -3000
}));
const expense2 = store.dispatch(addExpense({
    description: 'CAR',
    note: 'THIS IS MY CAR RENT FOR JULY',
    amount: 600000,
    createdAt: 2000
}));
store.dispatch(addExpense({
    description: 'FOOD',
    note: 'THIS IS MY FOOD COST FOR JULY',
    amount: 700000,
    createdAt: -1000
}));

store.dispatch(addExpense({
    description: 'CLOTHES',
    note: 'THIS IS MY CLOTHES COST FOR JULY',
    amount: 700000,
    createdAt: -2000
}));

store.dispatch(addExpense({
    description: 'PETROL',
    note: 'THIS IS MY PETROL COST FOR JULY',
    amount: 700000,
    createdAt: 2000
}));

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({ type: 'REMOVE_EXPENSE', expense: { id } });
// const removedOne = store.dispatch(removeExpense({id : expense1.expense.id}));


//EDIT_EXPENSE
const editExpense = (id, updates) => ({ type: 'EDIT_EXPENSE', id, updates })
    // const edittedOne = store.dispatch(editExpense(expense2.expense.id, {
    //     description: 'modified value',
    //     note: 'modified value',
    //     amount: 3000000,
    //     createdAt: 300000
    // }));




//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
        type: 'SET_TEXT_FILTER',
        text
    })
    //store.dispatch(setTextFilter('re'));
    // store.dispatch(setTextFilter());

//SORT_BY_AMOUNT
const setSortByAmount = () => ({
    type: 'SET_SORT_BY_FILTER',
    sortBy: 'Amount'
})
store.dispatch(setSortByAmount());
//SORT_BY_Date
const setSortByDate = () => ({
        type: 'SET_SORT_BY_FILTER',
        sortBy: 'Date'
    })
    //store.dispatch(setSortByDate());


//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
store.dispatch(setStartDate(-3000));

//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
store.dispatch(setEndDate(3000));