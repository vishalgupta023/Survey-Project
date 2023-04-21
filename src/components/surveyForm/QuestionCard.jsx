import React, { useState } from 'react'
import "./surveyform.css";
import { useMainstate } from '../../context/Context';

export default function Questions({qes}) {
const data=useMainstate();
  function addMarks(e){
    qes[e.target.name]=e.target.value;
  }

  return (
    <div className='mcq-main'>
      <h3>Q: {qes.question}</h3>
      <div className="mcq-options " onClick={(e)=>addMarks(e)}>
       <span><input type="radio" name={qes.id} value={qes.option1} id="" /> {qes.option1}</span>
       <span><input type="radio" name={qes.id} value={qes.option2} id="" /> {qes.option2}</span>
       <span><input type="radio" name={qes.id} value={qes.option3} id=""  /> {qes.option3}</span>
       <span><input type="radio" name={qes.id} value={qes.option4} id=""  /> {qes.option4}</span>
      </div>
      <span className='form-marks'>pnt:-{qes.pnt}</span>
    </div>
  )
}
