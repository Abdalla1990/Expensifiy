import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilter from './ExpenseListFilter';

class ExpensDashboard extends React.Component{

   
        render(){


            return (
                <div>
                
               <h3>DASHBOARD</h3>
               <ExpenseListFilter />
               <ExpenseList />
        
                
                </div>
            )
        }


}

export default ExpensDashboard ;