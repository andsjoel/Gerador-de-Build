import { Component } from "react";
import ItemCard2 from "../components/ItemCard2";
import { items_legendary } from "../api/Items_Legendary";
import { items_mythic } from "../api/Items_Mythic";
import Icon from "../img/background/icon3.ico"

export default class Gerador extends Component {
    state = {
        mythic: {name: "Item", id: '165'},
        legendary: {name: "Item", id: '120'},
    };

    geradorItem = (array, validation) => {
        const randomItem = Math.floor(Math.random() * array.length);
        console.log(array[randomItem].id);
        const legendaryList = [];

        if(validation === 'mythic') {
            console.log(array[randomItem]);
            this.setState({
                mythic: {name: array[randomItem].name, id: array[randomItem].id}
            })
        } else {
            legendaryList.push(array[randomItem])
            console.log(legendaryList);
            this.setState({
                legendary: {name: array[randomItem].name, id: array[randomItem].id}
            })
        }
    }

    render() {
        const { mythic, legendary } = this.state
        return(
            <div className="main">
                <div className="itensGerados">

                    <div className="mythic">
                        <button className="btnGerar" onClick={ () => this.geradorItem(items_mythic, 'mythic') }>Gerar Mítico</button>
                        <ItemCard2
                            name={ mythic.name }
                            icon={ require(`../img/mythic/${mythic.id}.webp`) } 
                        />
                    </div>

                    <div className="legendary">
                        <button className="btnGerar" onClick={ () => this.geradorItem(items_legendary, 'legendary') }>Gerar Lendário</button>
                        <ItemCard2
                            name={ legendary.name }
                            icon={ require(`../img/legendary/${legendary.id}.webp`) } 
                        />                 
                    </div>
                    <div className="selectedItens">

                    </div>

                </div>
            </div>
        )
    }
}