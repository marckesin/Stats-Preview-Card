import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CardStats from "../components/card";

// Home component to render the landing page
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Stats preview card component</title>
        <meta name="description" content="Stats preview card component." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CardStats />
      </main>
      <Footer />
    </div>
  );
}
