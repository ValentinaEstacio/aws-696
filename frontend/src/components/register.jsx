function Register (){
    return(
        <div className="register-container">            
            <form action="/register_user" method="post">                
                <h2> Nombre </h2> 
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" className="design-input" />
                <h2> Apellido </h2>
                <label htmlFor="lastName"></label>
                <input type="text" id="lastName" name="lastName" className="design-input" />
                <h2> Id </h2>
                <label htmlFor="idUser"></label>
                <input type="number" id="idUser" name="idUser" className="design-input" />
                <h2> E-Mail </h2>
                <label htmlFor="email"></label>
                <input type="text" id="email" name="email" className="design-input" />
                <h2> Contraseña </h2>
                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" className="design-input" />
                <h2> Confirmar contraseña </h2>
                <label htmlFor="confpassword"></label>
                <input type="password" id="confpassword" name="confpassword" className="design-input" /> <br></br> <br></br> <br></br>
                <button className="btn-registerUser"> Registrar Usuario </button>
            </form>
        </div>
    )
}

export default Register