import React from 'react';
import ExpensesListItem from './ExpensesListItem';
import { connect } from 'react-redux';
import getVisualExpenses from '../selectors/expenses';

const ExpensesList = (props)=>{

    
    return (<div>
        <h4> Expenses List</h4>
        {props.expenses.map((ex,index)=>{
            return (
                <ExpensesListItem  key={index} {...ex} />
            )
        })}
    </div>
);
}
    

const MapStateToProps = (state)=>{ 
   
    return {
        expenses :  getVisualExpenses(state.expenses,state.filters)
    };
}

export default connect(MapStateToProps)(ExpensesList);

 