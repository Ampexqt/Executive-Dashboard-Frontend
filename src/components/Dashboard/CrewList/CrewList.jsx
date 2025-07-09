import styles from './CrewList.module.css';

const mockData = [
  { id: '001', name: 'Angelito Hofmann', sales: 100 },
  { id: '002', name: 'John Harold N. Rueda', sales: 98 },
  { id: '003', name: 'John Christian R. Saporno', sales: 95 },
];

const CrewList = () => (
  <div className={styles.card}>
    <div className={styles.title}>Top Crew Based on Sales</div>
    <div className={styles.list}>
      {mockData.map((crew) => (
        <div className={styles.row} key={crew.id}>
          <span className={styles.id}>{crew.id}.</span>
          <span className={styles.name}>{crew.name}</span>
          <span className={styles.sales}>Sold {crew.sales}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CrewList;
