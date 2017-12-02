import React from 'react';
import { Link } from 'react-router-dom';
const ExpensesListItem = ({id,description , note , amount , createdAt})=>(
    <div>
        
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{amount}</p>
        <p>{createdAt}</p>
    
    </div>
)


 export default ExpensesListItem ;
 