import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';

const ButtonsList = ({ numbersList }) => (
    <div className='tc w-100 ba pa4 bg-moon-gray '>
    <h1>Guess the Number ! </h1>
    
    {numbersList.map(number =>
      <Button key={number} number={number} />)}
  </div>
);

function mapStateToProps(state) {
  return {
    numbersList: state.numbersList,
  }
}

export default connect(mapStateToProps)(ButtonsList)
