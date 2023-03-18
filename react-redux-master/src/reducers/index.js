import {combineReducers} from 'redux'

const counter = (state = 0, action) => {
    if(action.type === 'INCREMENT') {
        //Increase the value of the counter by the value of the value passed into the increment method
        return state + action.inc;
    }

    //No increment, just return the current value (why call it state???)
    return state;
}

const myReducers = combineReducers({counter});

export default myReducers;