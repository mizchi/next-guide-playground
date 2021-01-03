import type { GetStaticPaths, GetStaticProps } from "next";

type Props = { id: string; generatedAt: number };

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  return {
    props: {
      id: ctx.params?.id as string,
      generatedAt: Date.now(),
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async (_ctx) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default function Client(props: Props) {
  return (
    <div>
      id: {props.id} - {props.generatedAt}
    </div>
  );
}
