import React from 'react';
import {Card, Image} from "semantic-ui-react";


const ApodCard = props => {
    return (
        <div>
          <h2>Astronomy Picture of the Day (APOD)</h2>
            <Image src={props.imgUrl} centered />
        <Card>
          {/* <Image src="{props.imgUrl}" alt="{props.title}" wrapped ui={false} /> */}
          <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>
              <span className='date'>{props.date}</span>
            </Card.Meta>
            <Card.Description>
                {props.expl}
            </Card.Description>
          </Card.Content>
        </Card>
        </div>

    );
};

export default ApodCard;