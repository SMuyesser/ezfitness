import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


class AddExerciseForm extends React.Component {

  componentWillUpdate(){
    console.log(this.props.currentWorkout);
  }
  
  sendFormValues(e) {
    e.preventDefault();
    const updateData = {
      workoutname: document.getElementById('workoutname').value,
      img: document.getElementById('img').value,
      sets: document.getElementById('sets').value,
      reps: document.getElementById('reps').value,
      weight: document.getElementById('weight').value,

    }
    axios({
      method: 'put',
      url: `http://localhost:8000/workout/${this.props.currentWorkout._id}`,
      data: updateData
    });
  }

  render() {
    return (
      <form id="exercise-form" onSubmit={e => this.sendFormValues(e)}>
        <h2>Create New Exercise</h2>
        <input type="text" placeholder="Enter New Exercise Name" name="workoutname" id="workoutname" />
        <input type="text" placeholder="Enter Image Link" name="img" id="img" />
        <input type="number" placeholder="Enter Sets" name="sets" id="sets" />
        <input type="number" placeholder="Enter Reps" name="reps" id="reps" />
        <input type="text" placeholder="Enter Weight" name="weight" id="weight" />

        <input type="submit" value="Add Exercise" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts,
  loading: state.loading,
  error: state.error,
  currentWorkout: state.currentWorkout
});

export default connect(mapStateToProps)(AddExerciseForm);
