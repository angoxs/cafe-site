import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import Tip from "../components/Tip/Tip";
import Showcase from "../components/Showcase/Showcase";
import Box from "../components/Box/Box";
import Insta from "../components/Insta/Insta";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tip />
      <Hero title="El Mejor Cafe!" />
      <Showcase />
      <Box />
      <Insta />
    </div>
  );
}
