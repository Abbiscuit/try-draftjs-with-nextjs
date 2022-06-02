import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const DraftEditor = dynamic(() => import('../components/DraftEditor'), {
  ssr: false,
});

type Props = {};
const HomePage: NextPage = (props: Props) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <a className={styles.logo} href="">
            Logo
          </a>
        </nav>
      </header>

      <main>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Editor State</h2>

          <div className={styles.draftWrapper}>
            <DraftEditor />
          </div>
          <div className={styles.draftWrapper}>
            <DraftEditor />
          </div>
          <div className={styles.draftWrapper}>
            <DraftEditor />
          </div>
          <div className={styles.draftWrapper}>
            <DraftEditor />
          </div>
        </section>
      </main>

      <footer>
        <p style={{ fontSize: 12 }}>メモリ &copy;{year}</p>
      </footer>
    </div>
  );
};
export default HomePage;
