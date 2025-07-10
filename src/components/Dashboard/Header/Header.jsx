import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { format } from 'date-fns';
import { FiMenu } from 'react-icons/fi';

const Header = ({ onSidebarToggle }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = format(now, 'EEEE, dd MMM yyyy');
  const formattedTime = format(now, 'h:mmaaa').toLowerCase();

  return (
    <header className={styles.header}>
      <button className={styles.hamburger} onClick={onSidebarToggle} aria-label="Open sidebar">
        <FiMenu size={28} />
      </button>
      <div className={styles.left}>
        <span className={styles.weatherIcon}>☁️</span>
        <div>
          <div className={styles.date}>{formattedDate}</div>
          <div className={styles.time}>{formattedTime}</div>
        </div>
      </div>
          <div className="user-info">
            <div>John Christian R. Saporno</div>
            <div>internaxztechzppsu@gmail.com</div>
          </div>
    </header>
  );
};

export default Header;