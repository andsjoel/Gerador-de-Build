import { Component } from "react";
import ItemCard from "../components/ItemCard";
import { items_legendary } from "../api/Items_Legendary";
import { items_mythic } from "../api/Items_Mythic";

export default class MainItems extends Component {
    render() {
        return(

            <div className="main mainItem">

                 <h2 className="titleItem">Legendary Items</h2>

                 <div className="legendaryItems">
                    {
                        items_legendary.map((item) => (
                            <ItemCard 
                                key={ item.id }
                                name={ item.name }
                                icon={require(`../img/legendary/${item.id}.webp`)}
                            />
                        ))
                    }
                </div>

                <h2 className="titleItem">Mythic Items</h2> 

                <div className="mythicItems">
                     {
                        items_mythic.map((item) => (
                            <ItemCard 
                                key={ item.id }
                                name={ item.name }
                                icon={require(`../img/mythic/${item.id}.webp`)}
                            />
                        ))
                    }
                </div>

            </div>
        )
    }
}