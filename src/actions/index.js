import {ADD_REMINDER, CLEAR_REMINDERS} from '../types'
import {DELETE_REMINDER} from '../types'

export const add_reminder = (text, date) =>{
    const action = {
        type: ADD_REMINDER,
        text,
        date
    }
    console.log("Add", action);
    
    return action
}

export const delete_reminder = (id) => {

    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log("Remove" + action);
    return action
    
}

export const clear_reminders = () =>{

    const action={
        type: CLEAR_REMINDERS
    }
console.log("CLEAR"+ action);
return action

}