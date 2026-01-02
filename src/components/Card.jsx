import Modal from "./Modal";

function Card(props){

    return (
        <div className="w-50">
            <Modal defaultValue={{firstName: 'Otto', lastName: 'Mozale'}}/>
            <img className="w-50" src={props.img}/>
            <hr />
            <h1>{props.title ?? 'Card Name'}</h1>
            <p>{props.text}</p>
            <hr />
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver Mais</button>
        </div>
    )
}

export default Card;