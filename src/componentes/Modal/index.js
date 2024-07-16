import React, { useState } from 'react';
import CampoTexto from '../../componentes/CampoTexto';
import ListaSuspensa from '../../componentes/ListaSuspensa';
import { CampoTextArea } from '../../componentes/CampoTextArea';
import Botao from '../../componentes/Botao';
import './Modal.css';


const EditModal = ({ isOpen, onClose, video }) => {
    const [titulo, setTitulo] = useState(video.titulo);
    const [categoria, setCategoria] = useState(video.categoria);
    const [imagem, setImagem] = useState(video.imagem);
    const [videoLink, setVideoLink] = useState(video.video);
    const [texto, setTexto] = useState(video.texto);

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log("Detalhes do Vídeo Atualizados:", { titulo, categoria, imagem, videoLink, texto });
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'is-open' : ''}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Editar Vídeo</h5>
                        <button type="button" className="close" onClick={handleCancel}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <CampoTexto
                                obrigatorio={true}
                                label="Título"
                                placeholder="Título do Vídeo"
                                valor={titulo}
                                aoAlterado={setTitulo}
                            />
                            <ListaSuspensa
                                obrigatorio={true}
                                label="Categoria"
                                itens={['Front-End', 'Back-End', 'Mobile']}
                                valor={categoria}
                                aoAlterado={setCategoria}
                            />
                            <CampoTexto
                                label="Imagem"
                                placeholder="Link da Imagem do Vídeo"
                                valor={imagem}
                                aoAlterado={setImagem}
                            />
                            <CampoTexto
                                obrigatorio={true}
                                label="Vídeo"
                                placeholder="Link do Vídeo"
                                valor={videoLink}
                                aoAlterado={setVideoLink}
                            />
                            <CampoTextArea
                                nome="Descrição"
                                valor={texto}
                                aoAlterado={setTexto}
                            />
                            <div className="modal-footer">
                                <Botao
                                    corBorda="#2271D1"
                                    corFonte="#2271D1"
                                    corBoxShadows="#2271D1"
                                    nome="Salvar"
                                    type="submit"
                                />
                                <Botao
                                    corBorda="#FFFFFF"
                                    corFonte="#FFFFFF"
                                    nome="Cancelar"
                                    onClick={handleCancel}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
