import * as actionTypes from './actions'

const initialState = {
    counter: 100,
    results: []
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
        return{
          ...state,
          counter: state.counter - 1
        }
    case actionTypes.ADD:
      return{
          ...state,
          counter: state.counter + action.payload.value
      }
    case actionTypes.SUBTRACT:
      return{
          ...state,
        counter: state.counter - action.payload.value
      }
    case actionTypes.STORE_RESULT:
      return{
          ...state,
          //concat returns a new array plus the arguement that is passed. immutable way
          //push manipulates the original array
          results: state.results.concat({id: new Date(), value: state.counter})
      }
    case actionTypes.DELETE_RESULT:
    // const id=2
    // //this is shallow. This works because we are only deleting, but if we had an array of objects and were changing those objects that is not valid
    // const newArray=[...state.results];
    // //first argument of splice, removes elements starting at that given index
    // //second argument tells splice how many to remove from that index
    // newArray.splice(id,1)


//returns a new array, takes a function as an input executed on each element of the array
    const updatedArray = state.results.filter((result)=>result.id!== action.resultElId);
      return{
          ...state,
          //concat returns a new array plus the arguement that is passed. immutable way
          //push manipulates the original array
          results:updatedArray
      }
  }
    return state;
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

export default reducer;
