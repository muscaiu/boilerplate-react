import React, { Component } from 'react';
import { connect } from 'react-redux';

import { action } from '../actions/action';

class ReduxTest extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div>
        <pre>
          {
            JSON.stringify(this.props.reducer)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(action())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
