import {createStore , combineReducers} from 'redux';
import uuid from 'uuid';

// const store = createStore(combineReducers({keyOfReducer=ReducerBody , keyOfReducer=ReducerBody }))
// const reducer = (state=defaultStateValue,action)=>{ switch(action.type) { default : return {state}}}

// JUST A REFERENCE TO THE DATA STRUCTURE WE NEED TO BUILD. 
// let Demostate = {
//     // make a reducer for this
//     expenses:[{
//         id:'',
//         descreption:'',
//         note:'',
//         amount:0,
//         createdAt:undefined
//     }],
//     //make a reducer for this 
//     filters:{
//         text:'',
//         sortBy:'',
//         startDate:undefined,
//         endDate:undefined
//     }
// }
const expensesReducerDefaultState = [];
const filtersReducerDefaultState  = {
        text:'',
        sortBy:'Date',
        startDate:undefined,
        endDate:undefined
}

const expenses_reducer = (state = expensesReducerDefaultState,action)=>{
    switch (action.type){
        case 'ADD_EXPENSE':
        return [...state,action.expense];
        
        
        case 'REMOVE_EXPENSE':
        return state.filter((ex)=>{
        return ex.id !== action.expense.id;
        });

        case 'EDIT_EXPENSE':
        let modifiedExpe = state.map((ex)=>{
            if (ex.id === action.id){
                 let modified = { id : action.id,
                                description : action.descreption,
                                note : action.amount,
                                amount : action.amount,
                                createdAt : action.createdAt}
                return modified  
                              
            }
            else {
                return ex
            }
        })
        return modifiedExpe
        default : return state;
    }

};
const filters_reducer = (state = filtersReducerDefaultState , action)=>{
    switch (action.type){
        default : return state;
    }
}

//store creation 
let store = createStore(combineReducers({
    expenses : expenses_reducer,
    filters  : filters_reducer
}));

// SUBSCRIPTION TO TRACK DOWN ALL UPDATES TO THE STORE STATE . 
store.subscribe(()=>{
    console.log(store.getState());
})


// MY ACTION GENERATORS

// ADD_EXPENSE

// action name : addExpense the type 'ADD_EXPENSE' the values : action.expense <<(use this inside the reducer)
const addExpense = ({descreption = '',note = '',amount = 0,createdAt = 0} = {})=>(
                    {type : 'ADD_EXPENSE', expense : { id : uuid(),descreption,note,amount,createdAt}});

const removeExpense = ({id} = {})=>({type : 'REMOVE_EXPENSE',expense : {id}});       

const editExpense = ({id, descreption = '',note = '',amount = 0,createdAt = 0} = {})=> ({
    type : 'EDIT_EXPENSE' ,id, descreption ,note ,amount ,createdAt 
})
                        

 // DISPATCH ACTIONS ! 
const expense1 =store.dispatch(addExpense({
    descreption : 'RENT',
    note : 'THIS IS MY RENT FOR JULY',
    amount : 54500,
    createdAt : 1234
}));
const expense2 =store.dispatch(addExpense({
    descreption : 'CAR',
    note : 'THIS IS MY CAR RENT FOR JULY',
    amount : 600000,
    createdAt : 1234
}));
store.dispatch(addExpense({
    descreption : 'FOOD',
    note : 'THIS IS MY FOOD COST FOR JULY',
    amount : 700000,
    createdAt : 1234
}));

//REMOVE_EXPENSE

const removedOne = store.dispatch(removeExpense({id : expense1.expense.id}));
//EDIT_EXPENSE
//console.log('expense2 : ',expense2);
const edittedOne = store.dispatch(editExpense({id : expense2.expense.id ,
                                            descreption : 'modified value',
                                            note : 'modified value',
                                            amount: 3000000,
                                            createdAt: 300000
}));

//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE



    

