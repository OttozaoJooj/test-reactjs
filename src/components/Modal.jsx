function Modal(props){
    return (
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
                            <input type="text" className="form-control" name="title" id="title" defaultValue={props.defaultValue.firstName}/>
                        </div>
                        <div>
                            <label htmlFor="text" className="form-label">
                                Text
                            </label>
                            <textarea className="form-control" defaultValue={props.defaultValue.lastName}></textarea>
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
    )
}

export default Modal;