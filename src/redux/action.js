const add = newSubmission => {
  return {
    type: 'ADD_SUBMISSION',
    payload: newSubmission,
  };
};

const setToken = token => {
  return {
    type: 'ADD_TOKEN',
    payload: token,
  };
};

const removeToken = () => {
  return {
    type: 'REMOVE_TOKEN',
    payload: null,
  };
};

export {add, setToken, removeToken};
