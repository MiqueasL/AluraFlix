import React, { useState } from 'react';
import { Cabecalho } from './componentes/Cabecalho';
import { Rodape } from './componentes/Rodape';
import NovoVideo from './componentes/NovoVideo';
import Video from './componentes/Video';
import { Banner } from './componentes/Banner';

function App() {
    const categoria = [
        {
            nome: 'Front-End',
            corTitulo: '#6BD1FF',
            corBorda: '#6BD1FF'
        },
        {
            nome: 'Back-End',
            corTitulo: '#00C86F',
            corBorda: '#00C86F'
        },
        {
            nome: 'Mobile',
            corTitulo: '#FFBA05',
            corBorda: '#FFBA05',
        },
    ]

    const [entradaVideo, setEntradaVideo] = useState([])

    const videoAdicionado = (videos) => {
        setEntradaVideo([...entradaVideo, videos])
    }

    const handleExcluirVideo = (videoExcluido) => {
        const novaLista = entradaVideo.filter(video => video.video !== videoExcluido);
        setEntradaVideo(novaLista);
    }

    return (
        <div className="App">
            <Cabecalho />
            <Banner />
            <NovoVideo times={categoria.map(categoria => categoria.nome)} novoCadastrado={videoAdicionado} />

            {categoria.map(categoria => (
                <Video
                    key={categoria.nome}
                    nome={categoria.nome}
                    corTitulo={categoria.corTitulo}
                    corBorda={categoria.corBorda}
                    entradaVideo={entradaVideo.filter(videos => videos.categoria === categoria.nome)}
                    onExcluir={handleExcluirVideo} // Passando a função de exclusão para o componente Video
                />
            ))}

            <Rodape />
        </div>
    );
}

export default App;
