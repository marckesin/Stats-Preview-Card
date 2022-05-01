import CardStats from "../components/card";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

// Home component to render the landing page
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Stats preview card component</title>
        <meta
          name="description"
          content="This is a solution to the: Stats preview card component challenge on Frontend Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CardStats />
      </main>
      <Footer />
    </div>
  );
}
