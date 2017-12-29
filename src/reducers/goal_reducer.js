import { SET_GOAL } from '../constants';

export default (state = [], action) => {
	switch (action.type) {
		case SET_GOAL:
			const { goals } = action;
			return goals;
		default:
			return state;
	}
}