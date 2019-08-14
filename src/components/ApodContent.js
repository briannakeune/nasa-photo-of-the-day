import React, {useState, useEffect} from 'react';
import axios from "axios";
import ApodCard from './ApodCard.js';

export default function ApodContent() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    })
    .then(resp => {
        const pod = resp;
        console.log(`Data needed`, pod);
    })

    return(
        <div className="content">
            <p>poop.</p>

        </div>
    );
};