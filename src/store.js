import { createStore } from 'redux'

// state
const initialState = {
  numbersList: [],
  guess: undefined,
  try: undefined,
  lastguess: undefined,
  tooHigh: false,
  tooLow: false,
  Correct: false,
  newGame: false
}

// actions
export function loadNumbers(topNumber) {
  return { type: "LOAD_NUMBERS", payload: topNumber }
}

export function guessNumber(choosenNumber) {
   return { type: "GUESS_NUMBER", payload: choosenNumber }
}


// reducer
function reducer(state, action) {
     
  if (action.type === "LOAD_NUMBERS") {
       const buttonList = [];
       for (let i=0; i < action.payload; i++) {
       buttonList.push(i);        
    };
    const guessNumber = Math.floor(Math.random() * action.payload);
    console.log ("Lucky number:", guessNumber);
    return {
      ...state,
      numbersList: buttonList,
      guess: guessNumber,
      counterTry: 0,
      tooHigh: false,
      tooLow: false,
      Correct: false,
      newGame: false
    }
  }


  if (action.type === "GUESS_NUMBER") {

            if (action.payload === state.guess) {
                return {
                    ...state,
                    Correct: true,
                    tooHigh: false,
                    tooLow: false,
                    newGame: true,
                                    
                }
            }

            if (action.payload < state.guess) {
                    let newCounter=state.counterTry+1;
                    return {
                    ...state,
                    counterTry: newCounter,    
                    tooHigh: false,
                    tooLow: true,
                    }
                }
            
            if (action.payload > state.guess) {
                    let newCounter=state.counterTry+1;
                        return {
                        ...state,
                        counterTry: newCounter,
                        tooHigh: true,
                        tooLow: false,
                           }

            }
    return state
    }
return state
}

// store

const store = createStore(reducer, initialState)

export default store
