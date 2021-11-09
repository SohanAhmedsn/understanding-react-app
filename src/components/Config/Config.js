import React from 'react';

const Config = (props) => {
    return (
        <div style={{border: '5px solid red', margin: ' 3px'}}>
            <li>price :{props.price}</li>
            <li>steps: {props.steps}</li>
        </div>
    );
};

export default Config;