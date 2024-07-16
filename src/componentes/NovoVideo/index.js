import { useState } from 'react'
import Botao from '../Botao/index.js'
import CampoTexto from '../CampoTexto/index.js'
import ListaSuspensa from '../ListaSuspensa/index.js'
import './novoVideo.css'
import { CampoTextArea } from '../CampoTextArea/index.js'

const NovoVideo = (props) => {

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [texto, setTexto] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.novoCadastrado({
            titulo,
            categoria,
            imagem,
            video,
            texto
        })
        setTitulo('')
        setCategoria('')
        setImagem('')
        setVideo('')
        setTexto('')
    }

    const limpar = () => {
        setTitulo('')
        setCategoria('')
        setImagem('')
        setVideo('')
        setTexto('')
    }


    const cores = [
        {
            corFonte: '#2271D1',
            corBorda: '#2271D1',
            corBoxShadows: '#2271D1'
        },

        {
            corFonte: '#FFFFFF',
            corBorda: '#FFFFFF'
        }
    ];


    return (
        <section className="formulario">

            <form className='formulario__container' onSubmit={aoSalvar}>

                <div className='formulario__titulo'>
                    <h1>NOVO VÍDEO</h1>
                    <h2>Complete o formulário para criar um novo card de vídeo.</h2>
                </div>

                <div className='formulario__criar_card'>
                    <h1>Criar Card</h1>
                </div>

                <div className='formulario__um'>
                    <CampoTexto
                        obrigatorio={true}
                        label="Titulo"
                        placeholder="Titulo"
                        valor={titulo}
                        aoAlterado={valor => setTitulo(valor)}
                    />

                    <ListaSuspensa
                        obrigatorio={true}
                        label="Categoria"
                        itens={props.times}
                        valor={categoria}
                        aoAlterado={valor => setCategoria(valor)}
                    />
                </div>

                <div className='formulario__dois'>
                    <CampoTexto
                        label="Imagem"
                        placeholder="Link imagem video"
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />

                    <CampoTexto
                        obrigatorio={true}
                        label="Video"
                        placeholder="Link do video"
                        valor={video}
                        aoAlterado={valor => setVideo(valor)}
                    />
                </div>

                <div className='formulario__texto'>
                    <CampoTextArea
                        nome='Descrição'
                        valor={texto}
                        aoAlterado={valor => setTexto(valor)}
                    />
                </div>

                <div className='formulario__botao'>

                    <div className='formulario__botao'>
                        
                        <Botao
                            key={cores[0].titulo}
                            corBorda={cores[0].corBorda}
                            corFonte={cores[0].corFonte}
                            corBoxShadows={cores[0].corBoxShadows}
                            nome='Enviar'
                        />

                        
                        <Botao
                            key={cores[1].titulo}
                            corBorda={cores[1].corBorda}
                            corFonte={cores[1].corFonte}
                            nome='Limpar'
                            onClick={limpar}
                        />
                    </div>

                </div>
                
            </form>
        </section>
    )
}

export default NovoVideo