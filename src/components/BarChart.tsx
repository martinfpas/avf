export interface GenerationBarChartProps {
    labels: string[],
    dataSet: number[]
}

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export interface BarChartProps {
    title: string,
    labels: string[],
    dataSet: number[]
}

export const BarChart = (params: BarChartProps) => {
    const { title, labels, dataSet } = params;

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const getUniqueColors = (array) => {
        const colorMap = {};
        return array.map((item) => {
            let color;
            do {
                color = generateRandomColor();
            } while (colorMap[color]);
            colorMap[color] = true;
            return color;
        });
    };


    const data = {
        labels,
        datasets: [
            {
                label: title,
                data: dataSet,
                backgroundColor: getUniqueColors(labels),
            },
        ],
    };

    return <Bar data={data} />;

}
