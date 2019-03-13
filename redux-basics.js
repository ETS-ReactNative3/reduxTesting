//Node js syntax
const redux =require('redux');
const createStore=redux.createStore;

const initialState={
  counter:0
}

//Reducer. Never mutate data. Always do it immutably
const rootReducer = (state=initialState, action)=>{
  if(action.type==='INC_COUNTER'){
    return{
      ...state,
      counter: state.counter +1
    }
  }
  if(action.type==='ADD_COUNTER'){
    return{
      ...state,
      counter: state.counter +action.value
    }
  }
  return state;
}

//Store
const store=createStore(rootReducer);
console.log(store.getState());


//Subscription. Goes before action but after store
store.subscribe(()=>{
  console.log('Sunscribption', store.getState());
});

//Dispatching Action. Type is important. All uppercase
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER' , value: 100});
console.log(store.getState());
