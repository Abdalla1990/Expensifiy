import React from 'react'; 
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



class ExpenseForm extends React.Component{
    
    constructor(props){
        super(props);
         this.state = {
            description : props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note :'',
            amount :props.expense ? (props.expense.amount/100).toString() : 0,
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused : false,
            error : ''
         }  

    }
       
         

    handleformSubmittion = (e)=>{
        
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:'description or amount fields can\'t be empty'}))
        }else{
            this.props.onSubmit({
                description : this.state.description,
                note:this.state.note,
                amount:parseFloat(this.state.amount , 10)* 100,
                createdAt:this.state.createdAt.valueOf()
            });

        }
      

    }

    desOnChange =  (e)=>{

        const des = e.target.value ; 
        this.setState(()=>({
            error : '',
            description : des
        }))
    }
    noteOnChange =  (e)=>{
        const note = e.target.value ; 
        this.setState(()=>({note}));
    }
    amountOnChange =  (e)=>{
        const amount = e.target.value ; 
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({error : '',amount}));
        }
        
    }
    onDateChange = (createdAt)=>{
        if(createdAt)
        {
            this.setState(()=>({createdAt})) // to prevent the browser from allowing the user to delete the date manually
        }
        
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>({calenderFocused:focused}))
    }

    render () {
        
        
        return ( <div>
            {this.state.error}
            <form onSubmit={this.handleformSubmittion}>
            
                <input onChange= {this.desOnChange} value = {this.state.description} autoFocus placeholder="description" type="text"/>
                
                <input onChange={this.amountOnChange}  value = {this.state.amount} placeholder="amount" type="text" />

                <SingleDatePicker  date = {this.state.createdAt}
                                   onDateChange = {this.onDateChange}
                                   focused={this.state.calenderFocused}
                                   onFocusChange={this.onFocusChange}
                                   numberOfMonths={1}
                                   isOutsideRange={()=> false}

                />
               
                <textarea onChange= {this.noteOnChange} placeholder="note" value = {this.state.note} type="textarea"></textarea>
               
                <button>Submit</button>
            
            </form>
        </div>)
       
    }
       
    
}

export default ExpenseForm;