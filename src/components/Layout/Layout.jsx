import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <div className={styles.wrapper} >
        <Header /> {/*导航版*/}
        <main className={styles.main}>
          <Outlet /> {/*路由子页面插槽*/}
        </main>
        <Footer />
      </div>
    </>
  );
}