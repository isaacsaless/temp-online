import './Warnings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function Warnings(){
    return(
        <>
        <div className="pre-card">
          <h1 className="teste" style={{ display: "block" }} id="preCard">
            Coloque o nome de uma cidade para vizualizar suas informações
          </h1>
        </div>
        <div className="warnings">
          <p id="emptyCity" style={{ display: "none" }} className="warning">
            <FontAwesomeIcon icon={faTriangleExclamation} /> Coloque o nome de
            uma cidade para pesquisá-la
          </p>
          <p id="cityNotFound" style={{ display: "none" }} className="warning">
            <FontAwesomeIcon icon={faTriangleExclamation} /> Nome de cidade
            inválido ou não encontrado
          </p>
          <p id="unknownError" style={{ display: "none" }} className="warning">
            <FontAwesomeIcon icon={faTriangleExclamation} /> Ocorreu um erro,
            tente novamente mais tarde
          </p>
        </div>
        </>
    )
}

export default Warnings