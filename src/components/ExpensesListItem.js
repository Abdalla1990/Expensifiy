import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses'
import { Link } from 'react-router-dom';
const ExpensesListItem = ({dispatch ,id,description , note , amount , createdAt})=>(
    <div>
        
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{amount}</p>
        <p>{createdAt}</p>
        <button onClick={(e)=>{
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
)


 export default connect()(ExpensesListItem);
 