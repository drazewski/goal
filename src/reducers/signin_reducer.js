import {SIGNED_IN} from '../constants';

const user = (state = {
	email: null
}, action) => {
	switch(action.type) {
		case SIGNED_IN: 
      return {
        ...state,
        email: action.email
      }
    default:
      return state;
  }
}

export default user;