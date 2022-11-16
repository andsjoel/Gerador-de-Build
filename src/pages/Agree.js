import { Component } from "react";
import { Link } from "react-router-dom";

export default class Agree extends Component {
    render() {
        return(
            <div className="agreeBo">
                <div className="agreeBox">
                    <h2>ATENÇÃO:</h2>
                    <ul className="agreeRules">
                        <p>
                            Este é um gerador de build automático. Seu uso deve ser feito com responsabilidade,
                            não podendo ser usado para trolar partidas. Recomendamos o uso deste método em partidas
                            casuais e ARAM e, de extrema importância, que você esteja em um time fechado (5 players).
                            Assim, evita trolar a partida de outros jogadores.


                        </p>
                        {/* <li>
                            <span>1</span> Use com responsabilidade. 
                        </li>
                        <li>
                            <span>2</span> Recomenda-se o uso em partidas casuais e ARAM.
                        </li>
                        <li>
                            <span>3</span> É de extrema importância que você esteja em um time fechado (5 pessoas). 
                            Assim, evita trolar a partida de outros jogadores.
                        </li> */}
                    </ul>


                    <Link to="/Home">
                        <div className="boxAgree">
                            <label id="checkLabel" for="checkbox">
                            <input type="checkbox" id="checkbox" name="checkbox" />
                                Concordo
                            </label>
                        </div>                
                    </Link>

                </div>
            </div>


        )
    }
}