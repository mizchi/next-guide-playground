import type { GetServerSideProps } from "next";

type Props = { id: string };

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  return {
    props: {
      id: ctx.params?.id as string,
    },
  };
};

export default function Client(props: Props) {
  return <div>id: {props.id}</div>;
}
