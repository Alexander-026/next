import Head from "next/head";
import A from "./A";
const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={`Bryndin Alexander - ${keywords}`}></meta>
        <title>Hauptseite</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Hauptseite" />
        <A href="/Users" text="Benutzer" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
