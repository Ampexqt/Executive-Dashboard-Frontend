import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './MenuStock.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Coffee', 'Bread'],
  datasets: [
    {
      data: [43, 57],
      backgroundColor: ['#232323', '#bdbdbd'],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.parsed}%`,
      },
    },
  },
};

const legendData = [
  { label: 'Coffee', value: 43, color: '#232323' },
  { label: 'Bread', value: 57, color: '#bdbdbd' },
];

const MenuStock = () => (
  <div className={styles.card}>
    <div className={styles.title}>Menu Stock</div>
    <div className={styles.pieWrapper}>
      <div className={styles.pieChart}>
        <Pie data={data} options={options} />
      </div>
      <div className={styles.legend}>
        {legendData.map((item) => (
          <div className={styles.legendRow} key={item.label}>
            <span
              className={styles.legendColor}
              style={{ background: item.color }}
            ></span>
            <span>{item.value}% {item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MenuStock;
