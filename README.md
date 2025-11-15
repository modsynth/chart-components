# Chart Components

[![npm version](https://badge.fury.io/js/%40modsynth%2Fchart-components.svg)](https://www.npmjs.com/package/@modsynth/chart-components)
[![npm downloads](https://img.shields.io/npm/dm/@modsynth/chart-components.svg)](https://www.npmjs.com/package/@modsynth/chart-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Chart components with Chart.js and custom themes

Part of the [Modsynth](https://github.com/modsynth) ecosystem.

## Features

- Chart.js integration
- React components (Line, Bar, Pie, Doughnut)
- TypeScript support
- ✨ **Pre-built Themes**: Default and dark themes (v0.2.0)
- ✨ **Theme Utilities**: Easy theme switching (v0.2.0)

## What's New in v0.2.0

- **Themes**: Pre-configured default and dark themes
- **Theme Helpers**: `applyTheme()` utility for easy customization

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

Current version: `v0.2.0`

## License

MIT
