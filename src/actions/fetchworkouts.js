import {fetchWorkoutsBegin, fetchWorkoutsSuccess, fetchWorkoutsError} from './index';

export function fetchWorkouts() {
  return dispatch => {
    dispatch(fetchWorkoutsBegin());
    return fetch('http://localhost:8000/workout')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchWorkoutsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchWorkoutsError(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}