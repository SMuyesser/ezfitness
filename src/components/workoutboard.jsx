import React from 'react';
import {connect} from 'react-redux';

import {fetchWorkouts} from '../actions/fetchworkouts';

import AddWorkoutForm from '../components/addworkoutform';
import AddExerciseForm from '../components/addexerciseform';
import WorkoutDropdown from '../components/workoutdropdown';
import Exercise from '../components/exercise';

import '../componentCSS/workoutboard.css';

export class WorkoutBoard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchWorkouts());
    }

    render() {
        const { error, loading } = this.props;
        let workoutListElement;
        let exerciseFormElement;
        
        if (error) {
          return <div>Error! {error.message}</div>;
        }

        if (loading) {
          return <div>Loading...</div>;
        }

        //conditional render of add exercise form if current workout is set
        if (this.props.currentWorkout.routinename !== undefined) {
          exerciseFormElement = (
            <AddExerciseForm />
          );
        } else {
          exerciseFormElement = (<span></span>)
        }

        //conditional render of exercises if workoutlist is not undefined
        if (this.props.currentWorkout.workoutlist !== undefined) {
          workoutListElement = (
              <ul>
                  {this.props.currentWorkout.workoutlist.map((exercise, index) =>
                            <Exercise 
                                key={index} 
                                workoutname={exercise.workoutname}
                                sets={exercise.workoutstats.sets}
                                reps={exercise.workoutstats.reps}
                                weight={exercise.workoutstats.weight} 
                            />
                        )}
              </ul>
            )
        } else {
          workoutListElement = (
            <ul></ul>
            )
        }

        return (
        <div className="board">
            <AddWorkoutForm />
            <WorkoutDropdown />
            <h2>{this.props.currentWorkout.routinename}</h2>
            {workoutListElement}
            {exerciseFormElement}
        </div>
        );
      }
    }

const mapStateToProps = state => ({
  workouts: state.workouts,
  loading: state.loading,
  error: state.error,
  currentWorkout: state.currentWorkout
});

export default connect(mapStateToProps)(WorkoutBoard);

