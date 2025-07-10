import React from 'react';
import styles from './Sidebar.module.css';
import logo from '../../../assets/images/logo.png';
import { MdLogout } from 'react-icons/md';
import { FiX } from 'react-icons/fi';

const Sidebar = ({ open, onClose }) => {
  // Overlay for mobile
  return (
    <>
      <aside
        className={
          open ? `${styles.sidebar} ${styles.sidebarOpen}` : styles.sidebar
        }
      >
        <div className={styles.logoBox}>
          <img src={logo} alt="AJH Bread & Beans Logo" className={styles.logo} />
        </div>
        <div className={styles.logoutBox}>
          <MdLogout className={styles.logoutIcon} size={29.35} />
        </div>
        {/* Close button for mobile */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">
          <FiX size={28} />
        </button>
      </aside>
      {/* Overlay background for mobile */}
      {open && <div className={styles.overlay} onClick={onClose} />}
    </>
  );
};

export default Sidebar;