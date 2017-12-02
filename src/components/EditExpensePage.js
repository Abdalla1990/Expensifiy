import React from 'react';
import {connect} from 'react-redux';
import {removeExpense,editExpense} from '../actions/expenses';
import getvisiableExpenses from '../selectors/expenses';
import ExpenseForm from './ExpenseForm';
const EditExpensePage = (props)=>{

      
           
            return (
                <div>
                
                
                <h1>Edit Page</h1>
                <ExpenseForm  
                expense ={props.expense}
                onSubmit={(expense)=>{
                    console.log(`expense : ${expense}`);
                    console.log(`propes expense : ${props.expense}`);
                    props.dispatch(editExpense(props.expense.id,expense));
                   
                   props.history.push('/');
                }}
            />
            <button onClick={()=>{ 
                console.log(props.expense.id);
                
                 props.dispatch(removeExpense(
                 {id:props.expense.id}))
                 props.history.push('/');
            }
        }>Remove</button>
                
        
                
                </div>
            )
        
           

}
const MapStateToProps = (state,props)=>{ 
    
     return {
         expense :  state.expenses.find((ex)=>props.match.params.id === ex.id)
     };
 }

export default connect(MapStateToProps)(EditExpensePage);