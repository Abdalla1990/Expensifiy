import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses'
const ExpensesListItem = ({dispatch ,id,descreption , note , amount , createdAt})=>(
    <div>
        <h3>{descreption}</h3>
        <p>{amount}</p>
        <p>{note}</p>
        <p>{createdAt}</p>
        <button onClick={(e)=>{
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
)


 export default connect()(ExpensesListItem);
 