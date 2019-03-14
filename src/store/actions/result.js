import * as actionTypes from './actionTypes'

//action creators
export const saveResult = (res)=>{
    const updatedResult = res*2
    return{
        type: actionTypes.STORE_RESULT,
        result: updatedResult
    };
}
//Store result gets dispatched handed to it as aresult of redux thunk. We can also get state
//But you shouldnt use get state here. Better to just pass what is needed thru maptodispatch
export const storeResult =(res)=>{
    return  (dispatch, getState) => {
        setTimeout(()=>{
            const olcCounter = getState().ctr.counter;
            console.log(olcCounter);
            dispatch(saveResult(res))
        }, 2000);
    }
   

};

export const deleteResult =(id)=>{
    return{
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
};