import styles from './Dashboard.module.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import StatsFilter from './StatsFilter/StatsFilter';
import StatsCards from './StatsCards/StatsCards';
import BestSellers from './BestSellers/BestSellers';
import SalesChart from './SalesChart/SalesChart';
import CrewList from './CrewList/CrewList';
import OrderList from './OrderList/OrderList';
import MenuStock from './MenuStock/MenuStock';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import React, { useState } from 'react';

const Dashboard = () => {
  const [category, setCategory] = useState('Coffee');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen((open) => !open);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
      <div className={styles.rightSideWrapper}>
        <Header onSidebarToggle={handleSidebarToggle} />
        <div className={styles.mainContent}>
          <StatsFilter />
          <StatsCards />
          <div className={styles.gridRow}>
            <div className={styles.leftCol}>
              <SalesChart />
              <div className={styles.bottomRow}>
                <CrewList />
                <OrderList />
              </div>
            </div>
            <div className={styles.rightCol}>
              <CategoryFilter selected={category} onChange={setCategory} />
              <BestSellers category={category} />
              <MenuStock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;