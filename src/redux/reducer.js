import data from '../data/data.json';
import {DUMMY_DATA} from '../data/dummy_data';

const initialState = {
  formFields: data.inputFields,
  submissions: DUMMY_DATA,
  token: null,
};

export const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUBMISSION':
      const newSubmission = structuredClone(action.payload);
      return {...state, submissions: [...state.submissions, newSubmission]};
    case 'ADD_TOKEN':
      return {...state, token: action.payload};
    case 'REMOVE_TOKEN':
      return {...state, token: action.payload};

    default:
      return state;
  }
};
