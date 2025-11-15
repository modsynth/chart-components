// Re-export from react-chartjs-2 and chart.js
export { Line, Bar, Pie, Doughnut, Scatter, Bubble, Radar, PolarArea } from 'react-chartjs-2';
export { Chart, registerables, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement } from 'chart.js';

// Export themes
export { defaultTheme, darkTheme } from './theme';

// Export type helpers
export type { ChartData, ChartOptions } from 'chart.js';
