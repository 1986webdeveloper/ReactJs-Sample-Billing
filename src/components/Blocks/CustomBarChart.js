import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['MARCH', 'APRIL', 'MAY', 'JUNE'],
    datasets: [
        {
            label: 'Unpaid',
            backgroundColor: 'rgba(240, 58, 58, 1)',
            borderColor: 'rgba(240, 58, 58, 1)',
            data: [0, 0, 10, 0]
        },
        {
            label: 'Sent',
            backgroundColor: 'rgba(240, 181, 58, 1)',
            borderColor: 'rgba(240, 181, 58, 1)',
            data: [60, 48, 30, 0]
        },
        {
            label: 'Paid',
            backgroundColor: 'rgba(76, 175, 120, 1)',
            borderColor: 'rgba(76, 175, 120, 1)',
            data: [20, 35, 40, 45]
        }
    ]
};

export default class CustomBarChart extends Component {
    render() {
        return (

            <div className="custom-chart-block">
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            display: true,
                            position: 'bottom'
                        },
                        scales: {
                            xAxes: [{
                                barPercentage: 2,
                                barThickness: 18,
                                maxBarThickness: 18
                            }],
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: '%'
                                },
                                ticks: {
                                    max: 100
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}