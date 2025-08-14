import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  // 客户端阶段再读 localStorage & matchMedia
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(saved ? saved === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(d => !d)}
      aria-label="切换深浅色"
      className={styles.button}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}