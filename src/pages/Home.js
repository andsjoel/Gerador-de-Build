import { Component } from "react";
import Header from "../components/Header";
import Gerador from "../components/Gerador";
// import ItemCard from "../components/ItemCard";
// import { items_legendary } from "../api/Items_Legendary";
// import { items_mythic } from "../api/Items_Mythic";

export default class Home extends Component {
    render() {
        return(
            <div className="home">
                <Header />
                <Gerador />            
            </div>

        )
    }
}