import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './BestSellers.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const bestSellersData = {
  Coffee: {
    labels: [
      'Caramel Dream Latte',
      'Brown Sugar Charm',
      'Vanilla Cloud Brew',
      'Mocha Velvet Crush',
      'Espresso Sunrise',
      'Vanilla Cold Brew',
    ],
    data: [120, 100, 80, 60, 30, 20],
  },
  Bread: {
    labels: [
      'Sourdough Loaf',
      'Baguette',
      'Ciabatta',
      'Brioche',
      'Focaccia',
      'Whole Wheat',
    ],
    data: [110, 90, 70, 60, 40, 25],
  },
};

const getChartData = (category) => ({
  labels: bestSellersData[category].labels,
  datasets: [
    {
      label: 'Sales',
      data: bestSellersData[category].data,
      backgroundColor: '#888784',
      borderRadius: 6,
      barPercentage: 0.7,
      categoryPercentage: 0.7,
      borderSkipped: false,
    },
  ],
});

const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Top 6 Best Sellers',
      align: 'start',
      color: '#232323',
      font: { size: 20, weight: 'bold' },
      padding: { bottom: 20 },
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (context) => `${context.parsed.x} sales`,
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        color: '#e0dfdb',
        borderDash: [4, 4],
      },
      ticks: {
        color: '#232323',
        font: { size: 15 },
        stepSize: 20,
      },
      display: true,
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#232323',
        font: { size: 15 },
      },
    },
  },
  layout: {
    padding: 20,
  },
};

const BestSellers = ({ category = 'Coffee' }) => (
  <div className={styles.card}>
    <Bar data={getChartData(category)} options={options} height={320} />
  </div>
);

export default BestSellers;
export { bestSellersData };
