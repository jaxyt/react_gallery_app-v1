import React from 'react';

const Image = (props) => {
    return (
        <li>
            <img src={props.picture} alt={`${props.key}`} />
        </li>
    );
}

export default Image;