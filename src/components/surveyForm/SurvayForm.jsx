
import "./surveyform.css"
import Questions from './QuestionCard';
import {  useNavigate } from 'react-router-dom';
import { useMainstate } from '../../context/Context';

export default function SurveyForm() {
  const navigate=useNavigate()
  const data=useMainstate();
  console.log(data)
  let total=0;
  let outof=0

   function result(){
    data.temp.surveydata.forEach((item)=>{
      let Point=parseInt(item.pnt)
        if(item.answer===item[item.id]){
          total=total+Point
        }
        
        outof=outof+Point;
    })
     alert(`Your Point is ${total} out of ${outof}`)
    outof=0;
    total=0;
    navigate("/")
   }
  
  return (
    <div className='main-form '>
        <div className="form-header container">
          <div>
            <h2 className='survey-name'>{data.temp.surveydata[0].surveyName}</h2>
            <p className='catagory'> catogory:- {data.temp.surveydata[0].catagory}</p>
          </div>
            <p className='description'>description:- Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam odit commodi ipsa adipisci quae id cupiditate natus tempora aspernatur, voluptatem nobis repellendus consequatur voluptates. Unde ratione modi fugit sequi.</p>
        </div>
        <div className="form-body container">
          <p>This is Multiple type questions 1 true out of 4</p>
          <div className="questions"> 
              {
                data.temp.surveydata.map((qes,i)=>{
                  return <Questions key={i} qes={qes} />
                })
              }
              
          </div>
          <button onClick={result} className='btn-primary' style={{marginTop:"10px"}}>Submit</button>
        </div>
    </div>
  )
}
