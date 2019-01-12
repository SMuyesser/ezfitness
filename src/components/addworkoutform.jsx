import React from 'react';

class AddWorkoutForm extends React.Component {

  render() {
    return (
      <form method="post" action="http://localhost:8000/workout" >
        <h2>Create New Workout</h2>
        <input type="text" placeholder="Enter New Workout Name" name="routinename" />
        <input type="submit" value="Add Workout" />
      </form>
    );
  }
}

export default AddWorkoutForm;