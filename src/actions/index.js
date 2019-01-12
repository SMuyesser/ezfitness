export const FETCH_WORKOUTS_BEGIN   = 'FETCH_WORKOUTS_BEGIN';
export const FETCH_WORKOUTS_SUCCESS = 'FETCH_WORKOUTS_SUCCESS';
export const FETCH_WORKOUTS_ERROR = 'FETCH_WORKOUTS_ERROR';
export const SET_CURRENT_WORKOUT = 'SET_CURRENT_WORKOUT';

export const fetchWorkoutsBegin = () => ({
  type: FETCH_WORKOUTS_BEGIN
});

export const fetchWorkoutsSuccess = workouts => ({
  type: FETCH_WORKOUTS_SUCCESS,
  payload: { workouts }
});

export const fetchWorkoutsError = error => ({
  type: FETCH_WORKOUTS_ERROR,
  payload: { error }
});

export const setCurrentWorkout = workout => ({
  type: SET_CURRENT_WORKOUT,
  currentWorkout: workout
});