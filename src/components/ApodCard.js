import React from 'react';

const ApodCard = props => {
    return (
        <div className="apod" key={props.id}>
            <h1>Astronomy Picture of the Day (APOD)</h1>
            <img className="apodImg" alt={props.title} src={props.imgUrl} />
            <div>
                <h2 className="picTitle">{props.title}</h2>
                {/* <h3 className="imgCred"></h3> */}
                <p className="explanation">{props.expl}</p>
                {/* <p className="tomorrowPod"></p> */}
            </div>
        </div>
    );
};

export default ApodCard;