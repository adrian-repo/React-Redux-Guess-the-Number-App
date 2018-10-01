import React from 'react';
import { connect } from 'react-redux';
import { loadNumbers } from './store';
import 'tachyons';


const Controls = ({ loadNumbers, tooHigh, tooLow, Correct, newGame, counterTry }) => (
      <div className='tc ma5'>
        <button className='pa4 f3 br-pill bg-orange:' onClick={loadNumbers} style={{visibility: newGame ? 'visible' : 'hidden' }} >New Game</button>
        <button className='pa4 f3 br-pill bg-light-blue' style={{visibility: tooLow ? 'visible' : 'hidden' }}>TOO LOW</button>
        <button className='pa4 f3 br-pill bg-dark-red' style={{visibility: tooHigh ? 'visible' : 'hidden' }}>TOO HIGH</button>
        <button className='pa4 f3 br-pill bg-dark-red' style={{visibility: Correct ? 'visible' : 'hidden' }}>You've missed {counterTry} times</button>
        <button className='pa4 f3 br-pill bg-green' style={{visibility: Correct ? 'visible' : 'hidden' }}>CORRECT ! CONGRATS !</button>
      </div>      
)

function mapStateToProps (state) {
    return {
    tooHigh: state.tooHigh,
    tooLow: state.tooLow,
    Correct: state.Correct,
    newGame: state.newGame,
    counterTry: state.counterTry
  }
  
}

function mapDispatchToProps(dispatch, props) {
  return {
    loadNumbers: () => dispatch(loadNumbers(100))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Controls)