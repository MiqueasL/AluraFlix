import './CampoTextArea.css'

export function CampoTextArea(props) {

    const textodigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campotext">

            <label>
                {props.nome}
            </label>

            <textarea
                value={props.valor}
                onChange={textodigitado}
                placeholder="Sobre o que é este vídeo ?">
            </textarea>

        </div>
    )
}