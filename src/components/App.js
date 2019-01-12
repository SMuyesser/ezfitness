import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import '../componentCSS/App.css';

import Header from './header';
import LoginForm from './loginform';
import WorkoutBoard from './workoutboard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/home" component={LoginForm} />
        <Route exact path="/workouts" component={WorkoutBoard} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
	workouts: state.workouts
});

export default withRouter(connect(mapStateToProps)(App));
