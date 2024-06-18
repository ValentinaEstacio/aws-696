function RecordActivity (){
    return(
        <div className="recordActivity-container">            
            <form action="/recordActivity" method="post">
                <h1> Código de usuario </h1>
                <label htmlFor="idUser"></label>
                <input type="number" id="idUser" name="idUser" className="design-input" />                
                <h1> Código de la actividad </h1> 
                <label htmlFor="idAct"></label>
                <input type="number" id="name" name="idAct" className="design-input" />
                <h1> Fecha de la actividad </h1>
                <label htmlFor="dateAct"></label>
                <input type="date" id="dateAct" name="dateAct" className="design-input" />
                <h1> Registro de horas </h1>
                <label htmlFor="timeAct"></label>
                <input type="text" id="timeAct" name="timeAct" className="design-input" />
                <h1> Descripción </h1>
                <label htmlFor="DescripAct"></label>
                <input type="text" id="DescripAct" name="DescripAct" className="design-input" /> <br></br> <br></br> <br></br>
                <button className="btn-registerUser"> Registrar Usuario </button>
            </form>
        </div>
    )
}

export default RecordActivity