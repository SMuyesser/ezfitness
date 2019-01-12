import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {setCurrentWorkout} from '../actions';


import '../componentCSS/workoutboard.css';

export class WorkoutDropdown extends React.Component {

  setCurrentWorkout(event) {
    console.log('triggereddddddddddd');
    event.preventDefault();
    const selectedWorkout = document.getElementById('select-one').value;
    axios.get(`http://localhost:8000/workout/${selectedWorkout}`)
    .then(response => {
      console.log(response.data);
      this.props.dispatch(setCurrentWorkout(response.data));
    })
    .catch(error => {
      return console.error(error);
    })
  }

  render() {
    let formOptions;
    formOptions = this.props.workouts.map((option, index) => {
      return <option key={index} value={option._id}>{option.routinename}</option>
    });


    return (
      <div id="select-workout">
        <form>
          <select id="select-one">
            {formOptions}
          </select>
          <input type="submit" onClick={e => this.setCurrentWorkout(e)}></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts,
  loading: state.loading,
  error: state.error,
  currentWorkout: state.currentWorkout
});

export default connect(mapStateToProps)(WorkoutDropdown);

