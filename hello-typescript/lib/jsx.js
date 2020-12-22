import React from "react";
function App(props) {
    return React.createElement("h1", null,
        "Hello, ",
        props.message);
}
const el = React.createElement(App, { message: "react" });
