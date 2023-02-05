import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to{" "}
        <a href="https://github.com/AidenCastillo/utr-tracker">UTR Tracker</a>
      </h1>
      <p className={styles.description}>Uses Universal Tennis Rating to show stats, player connections, and watchlists for all your tennis needs.</p>
    </main>
  );
}
