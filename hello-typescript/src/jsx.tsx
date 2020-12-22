import React from "react";

function App(props: { message: string }) {
  return <h1>Hello, {props.message}</h1>;
}

const el = <App message="react" />;
