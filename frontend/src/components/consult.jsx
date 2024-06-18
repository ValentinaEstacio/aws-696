function Consult (){
    return(
        <div className="consult-container">          
                <form action="/consult_user" method="post">
                    <h1 className="h1-consult"> Código de usuario </h1>
                    <label htmlFor="idUser"></label>
                    <input type="number" id="idUser" name="idUser" className="design-input" /> <br></br> <br></br> <br></br>
                    <button className="btn-consult"> Consultar actividades </button>
                </form>
        </div>
    )
}

export default Consult
