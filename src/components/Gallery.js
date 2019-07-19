import React from 'react';
import Image from './Image';
import NotFound from './NotFound';


const Gallery = (props) => {
    let pictures = props.pics.map((pic, index) => <Image picture={pic} key={index} />)
    return (
        <div className="photo-container">
            <h2>{props.gallery}</h2>
            <ul>
                {props.pics.length > 0 ? pictures : <NotFound />}
            </ul>
        </div>
    );
}

export default Gallery;