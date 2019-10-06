import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_reminder } from '../src/actions/index'
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
            <div>{reminder.date}</div>
            </li>)
          
          })}
          
        </ul>
      )
     
        }
  render() {
    console.log(this.props);
    
    return (
      <div className="App">
        <img src=''/>
        <div className='reminder-title'>
          <h2>What Should U Do?</h2>
        </div>
        <input 
            className="form-control"
            type='text'
            placeholder='Enter What U Think..'
            onChange={(e) => this.setState({text : e.target.value})}
        />
        <input
          className="form-control"
          type='datetime-local'
          onChange={(e) => this.setState({date : e.target.value})}
        />
        <button
          className="btn btn-primary btn-block"
          onClick={() => this.props.add_reminder(this.state.text, this.state.date)}>
          Add Reminder
          </button>
          {this.render_Reminders()}
          <button
          className="btn btn-danger btn-block">
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
},{add_reminder} )(App);
