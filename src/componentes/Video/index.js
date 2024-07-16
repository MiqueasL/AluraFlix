import React from 'react';
import Card from '../Card';
import './Video.css'

const Video = (props) => {
    const { corBorda, entradaVideo, onExcluir } = props;

    return (
        <div className="tecnologia">
            
            <h3 className='tec' style={{ backgroundColor: props.corTitulo }}>{props.nome}</h3>
            
            <div className="videos">
                {entradaVideo.map(video => (
                    <Card
                        key={video.video}
                        video={video.video}
                        corBorda={corBorda}
                        onExcluir={onExcluir}
                    />
                ))}
            </div>
        </div>
    );
};

export default Video;
