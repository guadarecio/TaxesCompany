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
};

export const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUBMISSION':
      const newSubmission = [...state.submissions, action.payload];
      return {...state, submissions: newSubmission};
    default:
      return state;
  }
};
