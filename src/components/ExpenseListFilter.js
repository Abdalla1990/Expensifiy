import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter , setSortByAmount , setSortByDate } from '../actions/filters';
const ExpenseListFilter = (props)=>(

    <div>
    
    <p>Filters</p>
    <p>Filter By Text</p>
    <input type="text" value= {props.filters.text} onChange={(e)=>{

        props.dispatch(setTextFilter(e.target.value));

    }}/>
    <p>Filter By Amount Or Date</p>
    <select  onChange={(e)=>{
        e.target.value==='date' ? props.dispatch(setSortByDate()):props.dispatch(setSortByAmount())
    }}>
    <option value="date">Date</option>
    <option value="amount">Amount</option>
    </select>
    
    </div>
);

const MapStateToProps = (state)=>{ 
    
     return {
         
        filters : state.filters
     };
 }
 
 export default connect(MapStateToProps)(ExpenseListFilter);