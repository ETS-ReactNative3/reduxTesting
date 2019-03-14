import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility'

const initialState = {
    counter: 100,
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.INCREMENT:
    //copying state, First argument is empty object and second argument is object to be copied which is state
    //Cloning in an immutable way. Not a deep clone
    const newState = Object.assign({}, state);
    newState.counter=state.counter+1
    return newState;
    //Or use spread to copy state, bu returning a javascript object, and copying the state with spread into the new Object
    //The second line is to override existing properties or add new properties, but it will leave results untouched.
    case actionTypes.DECREMENT:
    return updateObject(state, {counter: state.counter - 1});
        // return{
        //   ...state,
        //   counter: state.counter - 1
        // }
    case actionTypes.ADD:
    return updateObject(state, {counter: state.counter + action.payload.value});
    case actionTypes.SUBTRACT:
      return updateObject(state, {counter: state.counter - action.payload.value});
      



  // if (action.type === 'INCREMENT') {
  //     return {
  //         counter: state.counter + 1000
  //     }
  // }
  // if (action.type === 'DECREMENT') {
  //     return {
  //         counter: state.counter - 1000
  //     }
  // }
  // if (action.type === 'ADD') {
  //     return {
  //         counter: state.counter + action.payload.value
  //     }
  // }
  // if (action.type === 'SUBTRACT') {
  //     return {
  //         counter: state.counter - action.payload.value
  //     }
  // }
  // return state;
};
    return state;
}
export default reducer;
