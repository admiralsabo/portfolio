import { Header, Navbar, Projects, Services, Skills } from "@containers/index";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jason Pitogo - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Header />
      <Services />
      <Skills />
      <Projects />
    </div>
  );
}
