import React from 'react';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
const AddExpensePage = (props) => {

   
        
           
            return (
                <div>
                <h2>Add Expenses</h2>
                <ExpenseForm  
                    onSubmit={(expense)=>{
                         props.dispatch(addExpense(expense));
                        console.log(expense);
                        props.history.push('/');
                    }}
                />
                </div>
            )
}




 
 export default connect()(AddExpensePage);

