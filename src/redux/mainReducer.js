import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2191707Reducer from '../features/SignIn2191707/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2191707: SignIn2191707Reducer,

});