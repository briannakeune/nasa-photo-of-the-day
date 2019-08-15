import React from 'react';
import Nav from './Nav'

export default function Header () {
    return(
        <div className="header">
            <h1>APOD</h1>
            <div>
            <Nav />
            </div>
        </div>
    )
}