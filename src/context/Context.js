import React, { createContext, useContext, useReducer } from 'react'
import { addQuestions } from './Reducer';

export  const surveyData=createContext();

export  function Context(props) {
  const[survey,qesDispatch]=useReducer(addQuestions,[]);
  
  return (
    <surveyData.Provider value={{survey,qesDispatch}}>
        {props.children}
    </surveyData.Provider>
  )
}
export function useMainstate(){
  return useContext(surveyData)
}
