import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.STORE_RESULT:
      return{
          ...state,
          //concat returns a new array plus the arguement that is passed. immutable way
          //push manipulates the original array
          results: state.results.concat({id: new Date(), value: action.result})
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
};





export default reducer;
