import Header from './components/Header/Header';
import './App.css';
import Survey from "./components/Survey/Survey"
import SurvayForm from './components/surveyForm/SurvayForm';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import DashBoard from "./components/SurveyDashbord/SurveyDashbord";


function App() {

  return (
    <BrowserRouter>
         <Header/>  
    <Routes>
        <Route path='/' exact element={<Survey/>} />
        <Route path='/survey' element={<SurvayForm />} /> 
        <Route path='/dashboard' element={<DashBoard />} /> 
    </Routes>
    </BrowserRouter>
  );
}
export default App;
