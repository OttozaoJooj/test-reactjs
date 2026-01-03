import Modal from "./Modal";

function Card(props){
//defaultValue={{title: props.title, text: props.text}}
    return (
        <div className="w-50">
            
            <Modal title={props.title} text={props.text}/>
            <img className="w-50" src={props.img}/>
            <hr />
            <h1>{props.title ?? 'Card Name'}</h1>
            <p>{props.text}</p>
            <hr />
            
        </div>
    )
}

export default Card;