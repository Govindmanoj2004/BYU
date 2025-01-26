import * as React from 'react';
import { LineChart } from '@mui/x-charts';
import { Box } from '@mui/material';

export default function StatsLineChart() {
  return (
    <Box
      sx={{
        boxShadow:
          'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        borderRadius: '15px',
        padding: '20px',
      }}
    >
      <LineChart
        xAxis={[
          {
            data: [1, 2, 3, 5, 8, 10], // X-axis data points (time, e.g., months, days, etc.)
            showLabel: false, // Hide axis labels
          },
        ]}
        series={[
          {
            data: [120, 150, 180, 220, 300, 400], // Demo data for average views
            label: 'Views',
            color: '#007FFF', // Blue color for views
            point: { shape: 'circle', size: 8 }, // Circle shape for data points
          },
          {
            data: [30, 50, 80, 100, 150, 200], // Demo data for average likes
            label: 'Likes',
            color: '#00BFA5', // Green color for likes
            point: { shape: 'circle', size: 8 }, // Circle shape for data points
          },
          {
            data: [10, 15, 25, 35, 50, 65], // Demo data for average subscriptions
            label: 'Subscriptions',
            color: '#FF4081', // Pink color for subscriptions
            point: { shape: 'circle', size: 8 }, // Circle shape for data points
          },
        ]}
        width={500}
        height={300}
        margin={{
          top: 70, // Space between the chart and the top label
          bottom: 30, // Space between the chart and the bottom labels
          left: 30, // Space between the chart and the left axis labels
          right: 20, // Space between the chart and the right edge
        }}
        tooltip={{
          // Enable tooltip on hover
          show: true,
        }}
      />
    </Box>
  );
}
