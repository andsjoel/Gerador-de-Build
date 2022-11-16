import { Component } from "react";
// import { items_legendary } from "../api/Items_Legendary";
// import { items_mythic } from "../api/Items_Mythic";

export default class ItemCard2 extends Component {
    render() {
        const { name, icon } = this.props;

        return (
            <div className="card2">
                <img src={icon} alt={name} />
                <h2>{name}</h2>
            </div>
        )
    }
}