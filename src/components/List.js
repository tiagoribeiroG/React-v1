import Item from './Item'
import  PropTypes from 'prop-types'

function List() {
    return (
        <>
        <h1>minha lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={2000}/>
            <Item marca="Fiat" ano_lancamento={1985}/>
            <Item marca="Renault" ano_lancamento={1965}/>
            <Item />
            
        </ul>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca' ,
    
}

export default List;
