import {SIGNED_IN, SET_GOAL} from '../constants';

export function logUser(email) {
	const action = {
		type: SIGNED_IN,
		email
  }
  return action
}

export function setGoal(goals) {
	const action = {
		type: SET_GOAL,
		goals
	}
	return action
}