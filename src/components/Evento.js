import Button from './evento/Button'


function Evento({ numero }) {

    function meuEvento() {
        console.log(`Ativando primenro evento`)
    }

    function segundoEvento() {
        console.log('Ativando segundo evento')
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )

}

export default Evento