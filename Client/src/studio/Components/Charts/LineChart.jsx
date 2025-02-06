import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import style from './LineChart.module.css'; // CSS Modules for styling

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Income',
            data: [
              2235, 3250, 1890, 5400, 20240, 6254, 12325, 4856, 10325, 2254,
              22356, 8486,
            ],
            borderColor: '#4CAF50', // Subtle green for the line
            backgroundColor: 'transparent',
            cubicInterpolationMode: 'monotone',
            fill: false,
            tension: 0.4, // Smooth curve
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Your Income',
            padding: { bottom: 16 },
            font: { size: 16, weight: 'normal' },
            color: '#E0E0E0', // Light gray title
          },
          tooltip: {
            backgroundColor: '#333',
            bodyColor: '#FFF',
            titleColor: '#FFF',
            cornerRadius: 4,
            usePointStyle: true,
            callbacks: {
              label: context =>
                context.parsed.y !== null
                  ? new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(context.parsed.y)
                  : null,
            },
          },
        },
        scales: {
          x: {
            ticks: { color: '#A0A0A0' }, // Light gray text
            grid: { display: false }, // No grid
          },
          y: {
            ticks: { color: '#A0A0A0' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }, // Very light grid
            title: { display: true, text: 'Income [$]', color: '#E0E0E0' },
          },
        },
      },
    });

    return () => myChart.destroy();
  }, []);

  return (
    <div className={style.widget}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
