import React from 'react'
import '../styles/About.css'
import Header from './Header'

export default props =>

<React.Fragment>
    <Header {...props} />
    <div className="about-page">
        <h1>Sobre nós</h1>
        <p>Idealizado por Franklyn</p>
    </div>
</React.Fragment>