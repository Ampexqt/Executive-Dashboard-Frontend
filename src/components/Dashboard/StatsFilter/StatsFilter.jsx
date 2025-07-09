import styles from './StatsFilter.module.css';

const StatsFilter = () => {
  return (
    <div className={styles.filterContainer}>
      <span className={styles.filterLabel}>Filter by Date:</span>
      <div className={styles.buttonGroup}>
        <button className={styles.filterButton}>Today</button>
        <button className={styles.filterButton}>This Week</button>
        <button className={styles.filterButton}>This Month</button>
      </div>
    </div>
  );
};

export default StatsFilter;
