import { Component } from "react";
import Header from "../components/Header";
import MainItems from "../components/MainItems";

export default class Items extends Component {
    render() {
        return(
            <div>
                <Header />
                <MainItems />            
            </div>

        )
    }
}