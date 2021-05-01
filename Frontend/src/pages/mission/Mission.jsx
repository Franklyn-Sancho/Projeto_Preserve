import React from 'react';
import { Header } from '../../components/index';
import { Global } from '../../styles/globalStyle';

export default function Mission() {
    return (
        <>
            <Global/>
            <Header />
            <div className="page-mission">
                <div className="titulo">
                    <h1>Nossa Missão</h1>
                    <p>Todas as causas importam</p>
                </div>
            </div>
        </>

    )
}

