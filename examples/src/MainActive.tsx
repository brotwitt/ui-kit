import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainActive } from "@mindbox/ui-kit/templates/MainActive/MainActive";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
    <MainActive />,
    entryElement
)
