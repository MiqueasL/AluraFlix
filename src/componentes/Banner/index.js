import './Banner.css'


export function Banner() {

    return (

        <section className='banner'>

            <div className='texto'>

                <h1>BACK END</h1>

                <span>Como usar o TLDraw? Escreva CÓDIGOS com DESENHOS!</span>

                <p>Descubra técnicas avançadas de desenho e IA, explorando a interseção entre programação, arte e criatividade. </p>

            </div>

            <div className='video'>
               <iframe title='' src='https://www.youtube.com/embed/ms-DTT4n_pw?si=H-h8Ic2ptyBS6-D2'/>
            </div>

        </section>

    )

}