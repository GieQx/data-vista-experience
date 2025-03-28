
import { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
import { ChartContainer } from '@/components/ui/chart';

// Register required chart.js components
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export function DataVisualization() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  
  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [
              {
                label: 'Data Science Growth',
                data: [65, 70, 80, 81, 90, 95, 100],
                borderColor: '#126E82',
                backgroundColor: 'rgba(18, 110, 130, 0.1)',
                tension: 0.4,
                fill: true
              },
              {
                label: 'Statistical Analysis Usage',
                data: [28, 48, 56, 70, 75, 85, 92],
                borderColor: '#57CC99',
                backgroundColor: 'rgba(87, 204, 153, 0.1)',
                tension: 0.4,
                fill: true
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: {
                    family: 'Inter',
                    size: 12
                  }
                }
              },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(10, 35, 66, 0.8)',
                titleFont: {
                  family: 'Inter',
                  size: 14
                },
                bodyFont: {
                  family: 'Inter',
                  size: 13
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                  font: {
                    family: 'Inter'
                  }
                }
              },
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  font: {
                    family: 'Inter'
                  }
                }
              }
            }
          }
        });
      }
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[400px] bg-white rounded-lg shadow-lg p-4">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
