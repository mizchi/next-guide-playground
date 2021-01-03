export const getServerSideProps = () => {
  return {
    props: {
      foo: 1,
    },
  };
};
export default function Foo(props) {
  return <div>foo, {props.foo}</div>;
}
