import React from "react";

class Navegation extends React.Component {
    render(){
        function home_view() {
            window.location = "/"
        }
        let login_view = () => {
            window.location = "/login"
        }
        let register_view = () => {
            window.location = "/register_page"
        }
        let recordActivity_view = () => {
            window.location = "/record_activity"
        }
        let consult_view = () => {
            window.location = "/consult"
        }
        return(
            <div id="block-nav">
                <li className="items-nav">
                    <button className="btn-nav" onClick={home_view}> Home </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={login_view}> Login </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={register_view}> Register User </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={recordActivity_view}> Record Activity </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={consult_view}> Consult </button>
                </li>
            </div>
        )
    }
}

export default Navegation
