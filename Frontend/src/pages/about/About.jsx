import React from 'react';
import { Header } from '../../components/index';
import { Global } from '../../styles/globalStyle';

export default function About() {
    return (
        <>
            <Global/>
            <Header />
            <div className="about-page">
                <h1>Sobre nós</h1>
                <p>Idealizado por Franklyn</p>
            </div>
        </>
    )
}
