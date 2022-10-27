import data from '../data/data.json';

const initialState = {
  formFields: data.inputFields,
  submissions: [],
  token: null,
};

export const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUBMISSION':
      const clone = structuredClone(action.payload);
      return {...state, submissions: [...state.submissions, clone]};
    case 'ADD_TOKEN':
      return {...state, token: action.payload};
    case 'REMOVE_TOKEN':
      return {...state, token: action.payload};

    default:
      return state;
  }
};
