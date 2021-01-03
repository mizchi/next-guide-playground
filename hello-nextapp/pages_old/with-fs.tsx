import type { GetServerSideProps } from "next";
import fs from "fs/promises"; // import するだけなら大丈夫

// fs.readFile("/tmp/foo"); // これはクライアント実行時例外で NG

type Props = { foo: string };

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const foo = await fs.readFile("/tmp/foo", "utf-8"); // これはサーバーサイドなので OK
  return {
    props: { foo },
  };
};

export default function WithFS(props: Props) {
  return <div>{props.foo}</div>;
}
