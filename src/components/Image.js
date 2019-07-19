import React from 'react';

const Image = (props) => {
    return (
        <li>
            <img src={props.picture} alt="" />
        </li>
    );
}

export default Image;