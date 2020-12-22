import { Server } from "http";
import React from "react";
import ReactDOM from "react-dom";
import App, { ServerSideProps } from "./App";

declare const __initialProps: ServerSideProps;

ReactDOM.hydrate(<App {...__initialProps} />, document.querySelector("#root"));
