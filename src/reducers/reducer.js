import { combineReducers } from 'redux';
import user from './signin_reducer';
import goal from './goal_reducer';

/**
 * Turns different reducing functions into a single reducing function
 */
const Reducers = combineReducers({
    user,
    goal
});
//console.log()
export default Reducers;