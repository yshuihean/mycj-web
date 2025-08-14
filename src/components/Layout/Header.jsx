import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';
import ThemeToggle from '@/components/ThemeToggle';
import Hamburger from 'hamburger-react';

const navItems = [
  { to: '/',        label: '首页',   desktop: true, mobile: true },
  { to: '/rooms',   label: '房间',   desktop: true, mobile: true },
  { to: '/scenic',  label: '周边景点', desktop: false, mobile: true },
  { to: '/booking', label: '立即预订', desktop: false, mobile: true },
  { to: '/about',   label: '关于我们', desktop: false, mobile: true },
];

const renderLinks = (filter = () => true) =>
  navItems.filter(filter).map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) => (isActive ? styles.active : '')}
      onClick={() => setDrawerOpen(false)}
    >
      {label}
    </NavLink>
  ));

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const desktopMain = navItems.filter(item => item.desktop);
  const desktopMore = navItems.filter(item => !item.desktop && item.mobile);
  
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>沐雲川景</h1>

      {/* 桌面端导航 */}
      <nav className={styles.nav}>
        {renderLinks(i => i.desktop)}
        {/*主菜单*/}
        {desktopMore.length >0 &&(
          <div 
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className={styles.trigger}>更多</span>
              {dropdownOpen && (
                <ul className={styles.popup}>
                  {renderLinks(i => !i.desktop)}
                </ul>
              )}
          </div>
        )}
        <ThemeToggle />
      </nav>

      {/* 移动端 */}
      {/*移动端汉堡按钮*/}
      <div className={styles.mobileOnly}>
        <Hamburger toggled={drawerOpen} toggle={setDrawerOpen} />
      </div>
      {/* 移动端抽屉 */}
      <nav className={`${styles.drawer} ${drawerOpen ? styles.open : ''} ${styles.mobileOnly}`} onClick={() => setDrawerOpen(false)}>
        <div className={styles.drawerPanel} onClick={e => e.stopPropagation()}>
          {/* 主菜单 */}
          {renderLinks(i => i.mobile)}
          <div className={styles.themeBtn}>
            <ThemeToggle />
          </div>
          <div className={styles.routeInfo}>
            <img className='route' src='/images/home_route_small.jpg' alt='HomeRoute' />
            <p className={styles.route}>扫码查看导航</p>
          </div>
        </div>
      </nav>
    </header>
  );
}