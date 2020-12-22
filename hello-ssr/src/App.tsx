import React, { useEffect } from "react";

export type ServerSideProps = {
  message: string;
};

export function getServerSideProps(): ServerSideProps {
  return { message: "hello, ssr" };
}

export default function App(props: ServerSideProps) {
  useEffect(() => {
    console.log("exec on client");
  }, []);
  return <div>{props.message}</div>;
}
