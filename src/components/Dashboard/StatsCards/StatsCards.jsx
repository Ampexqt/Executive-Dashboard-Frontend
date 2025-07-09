import styles from './StatsCards.module.css';

const mockStats = {
  totalSales: '₱1,435,000',
  orderCount: '8,000',
  customerCount: '20,000',
};

const StatsCards = () => {
  return (
    <div className={styles.statsCardsContainer}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Total Sales</div>
        <div className={styles.cardValue}>{mockStats.totalSales}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Order Count</div>
        <div className={styles.cardValue}>{mockStats.orderCount}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Total Customer Count</div>
        <div className={styles.cardValue}>{mockStats.customerCount}</div>
      </div>
    </div>
  );
};

export default StatsCards;
