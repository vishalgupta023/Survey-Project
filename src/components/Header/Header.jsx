import "./header.css"
import React from 'react'
import { Link } from "react-router-dom"


export default function Header() {
    return (
        <div className="main-header">
            <div className="header container">
                <h1>EasySurvey</h1>
                <div className="head-right">
                    <p>Welcome User</p>
                  <Link to="/dashboard"><button>Create Survey</button></Link>
                </div>
            </div>
        </div>

    )
}
