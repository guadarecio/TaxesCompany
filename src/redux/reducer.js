import data from '../data/data.json';

const initialState = {
  submissions: [
    {
      id: 1,
      Name: 'Bruce',
      Surname: 'Wayne',
      Age: 26,
    },
    {
      id: 2,
      Name: 'Clark',
      Surname: 'Kent',
      Age: 22,
    },
  ],

  formFields: [data.inputFields],
  token: null,
};

export const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUBMISSION':
      const newSubmission = [...state.submissions, action.payload];
      return {...state, submissions: newSubmission};
    case 'ADD_TOKEN':
      return {...state, token: action.payload};
    case 'REMOVE_TOKEN':
      return {...state, token: action.payload};
    default:
      return state;
  }
};
