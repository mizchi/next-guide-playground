// import { AppProps } from "next/app";
// import Link from "next/link";

// function Layout(props: { children: React.ReactNode }) {
//   return (
//     <>
//       <style jsx>{`
//         a,
//         a:visited {
//           color: #303080;
//           text-decoration: none;
//         }
//       `}</style>
//       <header>
//         <nav>
//           <h1>
//             <Link href="/">
//               <a>Home</a>
//             </Link>
//           </h1>
//         </nav>
//       </header>
//       {props.children}
//     </>
//   );
// }

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <style jsx global>{`
//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
