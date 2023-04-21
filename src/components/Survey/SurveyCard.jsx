import React from 'react'
import { useMainstate } from '../../context/Context'
import { useNavigate } from 'react-router-dom';
import "./survey.css";

export default function SurveyCard({item}) {
  const data=useMainstate();
  const navigate=useNavigate()
  function attempt(){
    data.temp=item;
    navigate("/survey")
  }
  console.log(item.surveydata[0].surveyName)
  return (
    <div className='survey-card-wrapper'>
        <div className="surveyCard-left-box">
          <h2>{item.surveydata[0].surveyName}</h2>
          <p>{item.surveydata[0].catagory}</p>
        </div>
        <div className="surveyCard-right-box">
          <button className='btn-primary' onClick={attempt}>Attempt</button>
          <button className='btn-primary'>delete</button>
        </div>
    </div>
  )
}
