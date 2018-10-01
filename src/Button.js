import React from 'react';
import { connect } from 'react-redux';
import { guessNumber } from './store'
import 'tachyons';

const Button = ({ number, guessNumber }) => (
      <button className='shadow-1 bg-orange f3 pa3' key={number.toString()} onClick={guessNumber}>{number}</button>
)

function mapDispatchToProps(dispatch, props) {
  return {
    guessNumber: () => dispatch(guessNumber(props.number))
  }
}

export default connect(null, mapDispatchToProps)(Button)