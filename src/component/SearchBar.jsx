import './SearchBar.css'
import '../index'
import Index from  '../index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar(){
    return(
    <>    
        <div className="searchfield" id="inputSec">
        <form className="search-form" id="inputInfos">
            <input type="text" className="name-input" id="cityInput" placeholder="Nome da Cidade"/>
            <button className="btn-search" id="searchBtn" type="submit"  onClick={Index}><FontAwesomeIcon icon={faMagnifyingGlass} /> Pesquisar</button>
        </form>
    </div>
    </>
    )
}

export default SearchBar