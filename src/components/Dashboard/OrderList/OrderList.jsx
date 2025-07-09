import styles from './OrderList.module.css';

const mockData = [
  { name: 'Brown Sugar Charm' },
  { name: 'Espresso Sunrise' },
  { name: 'Vanilla Cloud Brew' },
];

const OrderList = () => (
  <div className={styles.card}>
    <div className={styles.title}>Live Order List</div>
    <div className={styles.list}>
      {mockData.map((order, idx) => (
        <div className={styles.row} key={order.name}>
          <span className={styles.name}>{order.name}</span>
          <button className={styles.viewBtn}>View</button>
        </div>
      ))}
    </div>
  </div>
);

export default OrderList;
