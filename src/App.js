import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { add_reminder, delete_reminder, clear_reminders } from '../src/actions/index'
import './App.css';

class App extends Component {
  state = {
    text: '',
    date: new Date ()
  }
  
  render_Reminders = () => {
    const {reminders} = this.props;
      return(
        <ul className='list-group'>
          {
            reminders.map(reminder => {
            return(
            <li key={reminder.id} className='list-group-item'>
            <div>{reminder.text}</div>
            <div>{moment(new Date(reminder.date)).fromNow()}</div>
            <div className='btn btn-danger' onClick={() => this.props.delete_reminder(reminder.id)}>X</div>
            </li>)
          
          })}
          
        </ul>
      )
     
        }
  render() {
    console.log(this.props);
    
    return (
      <div className="container">
        <img src=''/>
        <div className='reminder-title'>
          <h2>What Should U Do?</h2>
        </div>
        <input 
            className="form-control"
            type='text'
            value={this.state.text}
            placeholder='Enter What U Think..'
            onChange={(e) => this.setState({text : e.target.value})}
        />
        {/* <input
          className="form-control"
          type='datetime-local'
          value={this.state.date}
          onChange={(e) => this.setState({date : e.target.value})}
        /> */}
        <DatePicker
              className="form-control"
              value={this.state.date}
              placeholder="Enter Date"
              selected={this.state.date}
              onChange={(date) => this.setState({date})}
              showTimeSelect
              timeFormat="HH:mm"
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />

        <button
          className="btn btn-primary btn-block"
          onClick={() =>
            {this.props.add_reminder(this.state.text, this.state.date)
            this.setState({text:'', date:''})}}>
          Add Reminder
          </button>
          {this.render_Reminders()}
          <button
          className="btn btn-danger btn-block"
          onClick={() => this.props.clear_reminders()}>
          Clear Reminder
          </button>
      </div>
    )
  }
}
// function mapStateToProps (state){
//   return{
//     reminders : state
//   }
// }
// state => {
//   return {
//     reminders: state
//   }
// }

// }
// function mapDispatchToProps(dispatch){
//   return {
//     add_reminder : () => dispatch (add_reminder())
//   }

// }
export default connect (state => {
  return {
    reminders : state
  }
},{add_reminder, delete_reminder, clear_reminders} )(App);
