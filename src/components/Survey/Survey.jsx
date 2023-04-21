
import "./survey.css"
import SurveyCard from './SurveyCard'
import { useMainstate } from '../../context/Context'

export default function Survey() {
  const data = useMainstate();
  return (
    <div className='home-main'>
      <div className='container survey-home'>
        {
         data.survey.map((item, id) => {
              console.log(item)
              return <SurveyCard key={id} item={item} />
            })
        }
      </div>
    </div>

  )
}
