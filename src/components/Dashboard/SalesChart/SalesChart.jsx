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
import styles from './SalesChart.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['10AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
  datasets: [
    {
      label: 'Today',
      data: [150000, 180000, 120000, 100000, 110000, 130000, 140000],
      backgroundColor: '#b0b0b0', // lighter gray
      borderRadius: 6,
      barPercentage: 0.6,
      categoryPercentage: 0.6,
    },
    {
      label: 'Yesterday',
      data: [120000, 160000, 90000, 90000, 100000, 120000, 120000],
      backgroundColor: '#232a36', // dark blue/gray
      borderRadius: 6,
      barPercentage: 0.6,
      categoryPercentage: 0.6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'start', // left align
      labels: {
        color: '#7d8592',
        font: { size: 13, weight: '400', family: 'Inter, system-ui, sans-serif' },
        boxWidth: 12,
        boxHeight: 12,
        padding: 8,
      },
    },
    title: {
      display: true,
      text: 'Order / Sales',
      align: 'start',
      color: '#232a36',
      font: { size: 15, weight: '400', family: 'Inter, system-ui, sans-serif' },
      padding: { bottom: 4 },
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (context) => `₱${context.parsed.y.toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#7d8592',
        font: { size: 12, weight: '400', family: 'Inter, system-ui, sans-serif' },
      },
    },
    y: {
      beginAtZero: true,
      max: 250000,
      ticks: {
        color: '#7d8592',
        font: { size: 12, weight: '400', family: 'Inter, system-ui, sans-serif' },
        callback: (value) => `₱${(value / 1000).toFixed(0)}K`,
        stepSize: 50000,
      },
      grid: {
        color: '#e0e0e0',
        borderDash: [2, 2], // more subtle dotted
      },
    },
  },
  layout: {
    padding: 0,
  },
};

const SalesChart = () => (
  <div className={styles.card} style={{ height: 420, background: '#f7f8fa' }}>
    <Bar data={data} options={options} height={420} />
  </div>
);

export default SalesChart;
