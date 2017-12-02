import React from 'react';
import {connect} from 'react-redux';
import {DayPickerRangeController, DateRangePicker} from 'react-dates';
import {setTextFilter , setSortByAmount , setSortByDate , setStartDate , setEndDate} from '../actions/filters';
class ExpenseListFilter extends React.Component {

    state ={
        calenderFocused: null 
    }
    render (){
       
        return (
            <div>
            
            <p>Filters</p>
            <p>Filter By Text</p>
            <input type="text" value= {this.props.filters.text} onChange={(e)=>{
        
                this.props.dispatch(setTextFilter(e.target.value));
        
            }}/>
            <p>Filter By Amount Or Date</p>
            <select  onChange={(e)=>{
                e.target.value==='date' ? this.props.dispatch(setSortByDate()):this.props.dispatch(setSortByAmount())
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            </select>
            <DateRangePicker
            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => {
                this.props.dispatch(setStartDate(startDate));
                this.props.dispatch(setEndDate(endDate));
            }} // PropTypes.func.isRequired,
            focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={calenderFocused => this.setState({ calenderFocused })} // PropTypes.func.isRequired,
            numberOfMonths = {1}
            isOutsideRange={()=>false}
            showClearDates= {true}
          />
            </div>
        )
    }
}


const MapStateToProps = (state)=>{ 
    
     return {
         
        filters : state.filters
     };
 }
 
 export default connect(MapStateToProps)(ExpenseListFilter);