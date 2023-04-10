import reactDom from "react-dom";
import React from "react";
import * as maps from "./maps.json";

const App = () => {
    return <i><h1>HELLO</h1></i>
}

var chosenMap = () => {
    for (var object in maps.default) {
        console.log(object, Object.keys(maps.default))
        var anum = Math.floor(Math.random() * 100)
        if(anum > 50) {
            return object;
        } else {
            if(object == maps.default.length) {}
        }
    }


}

chosenMap();

reactDom.render(< App />, document.getElementById("root"));