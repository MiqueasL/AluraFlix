import React from 'react';
import './Botao.css';

const Botao = (props) => {
    const estiloBotao = {
        borderColor: props.corBorda,
        color: props.corFonte,
        boxShadow: `0px 0px 12px 4px inset ${props.corBoxShadows}`
    };

    return (
        <button className='botao' style={estiloBotao}>
            {props.children}
            {props.nome}
        </button>
    );
};

export default Botao;
