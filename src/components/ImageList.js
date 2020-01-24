import React from 'react';
import './ImageList.css';

// se les pone key para renderizar solo cambios
const ImageList = (props) => {
    const imagenes = props.images.map(
        //desEstructuración
        ({ urls, id, description }) =>
            (
                <img src={urls.thumb} key={id} alt={description} />
            )
    );
    return (
        <div className="image-list">{imagenes}</div>
    );
};

export default ImageList;