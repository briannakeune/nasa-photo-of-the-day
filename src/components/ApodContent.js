import React, {useState, useEffect} from 'react';
import axios from "axios";
import ApodCard from './ApodCard';

export default function ApodContent() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=xqzKNDRaPx4VZzZ2k3WSic5UD3Ee8Yb1ygcPOt1b`)
        .then(resp => {
            //pod = picture of the day
            const pod = resp.data;
            console.log(`Data needed`, pod);
            setContent(pod);
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
        })
    
    }, []);
    return(
        <div className="apodContent">
            <ApodCard 
            key={content.url}
            id={content.url}
            title={content.title}
            imgUrl={content.url}
            expl={content.explanation}
            date={content.date}
            />
        </div>
    );
};