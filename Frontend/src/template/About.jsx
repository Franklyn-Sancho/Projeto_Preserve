import React from 'react'
import '../styles/About.css'
import Header from './Header'

function About() {

    return (

        <React.Fragment>
            <Header />
            <div className="about-page">
                <h1>Sobre nós</h1>
                <p>Idealizado por Franklyn</p>
            </div>
        </React.Fragment>

    )
}

export default About