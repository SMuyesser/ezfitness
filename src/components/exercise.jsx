import React from 'react';
import {connect} from 'react-redux';

export class Exercise extends React.Component {

    render() {

        return (
          <li key={this.props.index} className='top-margin'>
              <h4>{this.props.workoutname}</h4>
              <img src={this.props.img} alt={this.props.workoutname}/>
              <ul>
                  <li>SETS:{this.props.sets}</li>
                  <li>REPS:{this.props.reps}</li>
                  <li>WEIGHT:{this.props.weight}</li>
              </ul>
          </li>
        );
      }
    }

const mapStateToProps = state => ({
  workouts: state.workouts,
  loading: state.loading,
  error: state.error,
  currentWorkout: state.currentWorkout
});

export default connect(mapStateToProps)(Exercise);

