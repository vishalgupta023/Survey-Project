import React, { useState } from 'react'
import "./dashbord.css";
import { useMainstate } from "..//../context/Context"
import { useNavigate } from 'react-router-dom';


export default function SurveyDashbord() {
    const data = useMainstate();
    const navigate=useNavigate()

    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [answer, setAnswer] = useState("");
    const [surName, setSurName] = useState("");
    const [catagory, setCatagory] = useState("");
    const [pnt, setPnt] = useState(1);
    const [num, setNum] = useState(0);
    const [bool, setBool] = useState(false);
    let [arr, setarr] = useState([]);
    function submitted() {
        if(question&&option1&&option2&&option3&&option4&&surName&&catagory){
            if(bool){
                arr.push({ question: question, option1: option1, option2: option2, option3: option3, option4: option4, answer: answer, id: Date.now(),pnt:pnt,surveyName:surName,catagory:catagory });
               setNum(num+1)
            }else{
                alert("choose correct option")
            }
        }else{
            alert("Please Add Valid fields")
        }
    }
    function handleMainArr(){
        if(surName&&catagory){
            if(arr[0]){
                data.survey.push({surveydata:arr});
                setarr([]);
                arr=[]
                navigate("/")
                setNum(0)
            }else{
                alert("submitt question first")
            }
        }else{
            alert("survey name required!!!")
        }
    }
    function handleAnswer(e){
        setBool(true);
        setTimeout(()=>{
            e.target.style.backgroundColor="green"
        });
    };
    function handleSubmit(e) {
        e.preventDefault();
        if(bool){
            setQuestion("");
            setOption1("");
            setOption2("");
            setOption3("");
            setOption4("");
            setPnt(1)
            setBool(false);
        }
    };

    const myStyle={
        backgroundColor:"red",
    }


    return (
        <div className='container dashborad-main'>
            <div className="dashoboard-header">
                <h1>Create A Survey</h1>
                <p>Description :- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore placeat quam quae</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-head">
                <div className="inputes">
                    <label >Survay Name:</label>
                    <input type="text" name="" id="" placeholder='Enter A Survey Name' value={surName} onChange={(e)=>setSurName(e.target.value)} />
                </div>
                <div className="inputes">
                    <label htmlFor="">Catagory:</label>
                    <input type="text" name="" id="" placeholder='Enter A catagory' value={catagory} onChange={(e)=>setCatagory(e.target.value)}  />
                </div>

                </div>
                <div className="add-questions">
                    <p className='question-count'>Number Of Questions:- <span style={{fontSize:"25px"}}>{num}</span></p>
                    <p>Add MCq</p>
                    <div className="inputes">
                        <label htmlFor="">Enter Question:</label>
                        <input type="text" value={question} onChange={(e) => { setQuestion(e.target.value) }}
                            name="" id="" placeholder='Enter Question' />
                    </div>
                    Note:-<i>Click On the Option Box to Specify True option for MCQ</i>
                    <div className="options">
                        <div className="inputes">
                            <label htmlFor="" style={bool?myStyle:null} onClick={(e) =>{handleAnswer(e);setAnswer(option1)}} >Option1:</label>
                            <input type="text" value={option1} onChange={(e) => { setOption1(e.target.value) }}
                                name="" id="" placeholder='Enter option1' />
                        </div>

                        <div className="inputes">
                            <label htmlFor="" data={option2} style={bool?myStyle:null} onClick={(e) =>{handleAnswer(e);setAnswer(option2)}}>Option2:</label>
                            <input type="text" value={option2} onChange={(e) => { setOption2(e.target.value) }}
                                name="" id="" placeholder='Enter option2' />
                        </div>
                        <div className="inputes">
                            <label htmlFor="" style={bool?myStyle:null} onClick={(e) =>{handleAnswer(e);setAnswer(option3)}}>Option3:</label>
                            <input type="text" value={option3} onChange={(e) => { setOption3(e.target.value) }}
                                name="" id="" placeholder='Enter option3' />
                        </div>
                        <div className="inputes">
                            <label htmlFor="" style={bool?myStyle:null} onClick={(e) =>{handleAnswer(e);setAnswer(option4)}}>Option4:</label>
                            <input type="text" value={option4} onChange={(e) => { setOption4(e.target.value) }}
                                name="" id="" placeholder='Enter option4' />
                        </div>
                    </div>
                    <div className="points">
                            <label>Points:</label>
                            <input type="number" value={pnt} 
                                name="" id="" onChange={(e)=>setPnt(e.target.value)} />
                        </div>
                    <button onClick={submitted}>Submit Question</button>
                </div>
            </form>

            <button className='btn-primary' onClick={handleMainArr}>Submit Form</button>
        </div>
    )
}
