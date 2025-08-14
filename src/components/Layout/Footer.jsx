import styles from './Layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      © 2025 沐雲川景民宿 · 保留所有权利
      <button
        onClick={() => window.scrollTo({top: 0, behavior: 'auto'})}
        className={styles.scrollTop}
      >
        ↑
      </button>
    </footer>
  );
}