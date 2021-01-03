import type { GetStaticPaths, GetStaticProps } from "next";

type Props = { id: string };

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  return {
    props: {
      id: ctx.params?.id as string,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Props> = async (ctx) => {
  return {
    paths: [
      {
        params: { id: "foo" },
      },
      {
        params: { id: "bar" },
      },
    ],
    fallback: false,
  };
};

export default function Client(props: Props) {
  return <div>id: {props.id}</div>;
}
