const add = newSubmission => {
  return {
    type: 'ADD_SUBMISSION',
    payload: newSubmission,
  };
};

export {add};
