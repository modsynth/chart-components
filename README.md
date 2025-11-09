# Chart Components

> Chart components (Chart.js)

## Installation
```bash
npm install @modsynth/chart-components chart.js react-chartjs-2
```

## Usage
```tsx
import { Line } from '@modsynth/chart-components';

const data = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [{ label: 'Sales', data: [10, 20, 30] }]
};

<Line data={data} />
```

## Version
v0.1.0

## License
MIT
