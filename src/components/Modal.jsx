import { useState } from "react";

function Modal(props){
    let [text, setText] = useState(props.text);
    let [title, setTitle] = useState(props.title);

    return (
        <div>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver Mais</button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div className="modal-dialog " >
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form method="post">
                            <div>
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input type="text" className="form-control" name="title" id="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="text" className="form-label">
                                    Text
                                </label>
                                <textarea className="form-control" defaultValue={text}></textarea>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary">Atualizar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Modal;