import { ChartOptions } from 'chart.js';

export const defaultTheme: Partial<ChartOptions> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
    },
  },
};

export const darkTheme: Partial<ChartOptions> = {
  ...defaultTheme,
  plugins: {
    ...defaultTheme.plugins,
    legend: {
      ...defaultTheme.plugins?.legend,
      labels: {
        color: '#e5e7eb',
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#9ca3af' },
      grid: { color: '#374151' },
    },
    y: {
      ticks: { color: '#9ca3af' },
      grid: { color: '#374151' },
    },
  },
};
