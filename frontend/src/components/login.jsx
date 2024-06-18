function Login (){
    return(
        <div className="login-container">            
            <form action="/login_user" method="post">
                <h1> Código de usuario </h1>
                <label htmlFor="idUser"></label>
                <input type="number" id="idUser" name="idUser" className="design-input" />
                <h1> Contraseña </h1>
                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" className="design-input" /> <br></br> <br></br> <br></br>
                <button className="btn-login"> Registrar Usuario </button>
            </form>
        </div>
    )
}

export default Login 
