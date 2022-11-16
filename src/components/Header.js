import { Component } from "react";
import { Link } from "react-router-dom";
import iconImg from "../img/background/icon2.jpg";

export default class Header extends Component {
    render() {
        return(
                <div className="headerBo">
                    <div className="headerBox">
                        <header>
                            <img className="iconHome" src={ iconImg } alt="" /> 
                        </header>
                        <h2 className="title">Gerador de Builds</h2>

                        <nav>
                            <ul>
                                <li>
                                    <Link to="/Home">
                                        <span>Home</span>
                                    </Link>
                                    
                                </li>
                                <li>
                                <Link to="/Items">
                                        <span>Items</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        )
    }
}