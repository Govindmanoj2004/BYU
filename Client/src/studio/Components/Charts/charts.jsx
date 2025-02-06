import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './charts.module.css';

const Charts = () => {
  const chartRef = useRef(null); // Create a ref for the canvas element

  useEffect(() => {
    // Destroy any previous chart before creating a new one
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    const ctx = chartRef.current; // Get the canvas DOM element
    const chartInstance = new Chart(ctx, {
      type: 'bar',
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
            label: 'Revenue (million [$])',
            data: [
              5.2, 7.8, 12.3, 11.2, 11.5, 28.8, 35.5, 40, 42.5, 45.5, 50.5, 60,
            ],
            backgroundColor: '#1976d3',
            borderRadius: 6,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Viewership in 2025',
            padding: {
              bottom: 16,
            },
            font: {
              size: 16,
              weight: 'normal',
            },
          },
          tooltip: {
            backgroundColor: '#27292D',
          },
        },
        scales: {
          x: {
            // Remove grid and border properties
            grid: {
              display: false, // Hide grid lines
            },
            title: {
              text: '2023',
            },
          },
          y: {
            // Remove grid and border properties
            grid: {
              display: false, // Hide grid lines
            },
            beginAtZero: true,
            title: {
              display: true,
              text: 'Viewer Count',
            },
          },
        },
      },
    });

    // Save the chart instance to the canvas element for later destruction if needed
    chartRef.current.chartInstance = chartInstance;

    // Cleanup the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.widget}>
      <canvas ref={chartRef} id='revenues'></canvas> {/* Use the ref here */}
    </div>
  );
};

export default Charts;
