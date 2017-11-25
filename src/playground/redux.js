import {createStore } from 'redux';

//create a reducer 
const reducer = (state ={count :0},action)=>{
    // reducer : the tool to specifiy how you want to change the state of the store. 
    // 1- reducer is a pure function : only the input is used to make the output
    // 2- never change the state by imutating them , instead, use return {} to achieve the seeked update .
    switch(action.type){
        
        case 'INCREMENT':
       
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
       
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
      
        return {
            count: action.resetBy
        };
        case 'SET':
       return {
           count : action.count
       }
        default:
        return state;
    }
}


//create the store 
let store = createStore(reducer);



// create the action switcher ( which dispatches based on types and values )

const action = ({Type,variable = 1})=>{

        console.log('inside switch of action ')
    switch (Type) {


        case 'INCREMENT':
        console.log('inside inc action ', variable )
            return store.dispatch({type : Type , incrementBy : variable });            
       



        case 'DECREMENT':
        console.log('inside dec action ', variable )
       
            return store.dispatch({type : Type , decrementBy : variable });            
       


        case 'RESET':
        console.log('inside rest action ', variable )
        
        if(variable === 1){variable -= 1}
        console.log('variable after change :' , variable)
            return store.dispatch({type : Type , resetBy : variable });            
     


        case 'SET':
        console.log('inside set action ', variable )
        if(variable){
            return store.dispatch({type : Type , count : variable});            
        }
    }

}








// if you want to unsubscripe : the subscripe function returns a function callback which you can call at anytime to unsubscripte 

// ex. 

let unsubscripe = store.subscribe(()=>{// gets called everytime the store gets updated.
    console.log(store.getState());
})
// anything happens here will be watched 


// one way of dispatch action
//========================================
let increment = ({incrementBy = 1})=>{
    return{type : 'INCREMENT' , incrementBy}
    }
store.dispatch(increment({incrementBy:1}));
//=========================================

// one way of dispatch action
//========================================
let decrement = ({decrementBy = 1})=>{
    return{type : 'DECREMENT' , decrementBy}
    }
store.dispatch(decrement({decrementBy:3}));
//=========================================

// one way of dispatch action
//========================================
let reset = ({resetBy = 0})=>{
    return{type : 'RESET' , resetBy}
    }
store.dispatch(reset({resetBy:0}));
//=========================================

// one way of dispatch action
//========================================
let set = ({count})=>{
    return{type : 'SET' , count}
    }
store.dispatch(set({count:50}));
//=========================================


//================== using switch instead of multiple functions
// action({Type :'INCREMENT', variable :1});
// action({Type :'DECREMENT', variable :5});
// action({Type :'RESET'});
// action({Type :'SET', variable :1100});
//================================================================

// here we unsubscripe 
unsubscripe();

//anything happens after this line will be unwatched 
// the updates will continue but you will not be notified. 


