import React, { useState } from 'react';
import './Card.css';
import EditModal from '../Modal';

const Card = (props) => {
    const { video, corBorda, onExcluir } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleExcluir = () => {
        
        if (onExcluir) {
            onExcluir(video); 
        }
    };

    return (
        <div className='card'>
            <div>
                <div className='card__img' style={{ borderColor: corBorda, boxShadow: `${corBorda} 0px 0px 17px 8px inset` }}>
                    <iframe src={video} title='video' allowFullScreen></iframe>
                </div>
                <div className='card__botao' style={{ borderColor: corBorda }}>
                    <button onClick={handleExcluir}><img src="/imagens/delet.svg" alt="Deletar"/>Deletar</button>
                    <button onClick={openModal}><img src="/imagens/edit.svg" alt="Editar"/>Editar</button>
                </div>
            </div>

            {isModalOpen && <EditModal onClose={closeModal} video={video} />}
        </div>
    );
};

export default Card;
