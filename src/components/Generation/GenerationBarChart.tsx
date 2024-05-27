import React from 'react';
import { BarChart, BarChartProps } from '../BarChart';
import { GenerationIem } from '../../../types/types';


export const parseParams = (params): {
    labels: string[],
    dataSet: number[]
} => {

    let labels: string[] = [];
    let dataSet: number[] = [];

    console.log(params);

    Object.keys(params).map(key => {
        labels.push(params[key].fuel);
        dataSet.push(params[key].perc);
    })

    return {
        labels,
        dataSet
    }
}


export const GenerationBarChart = ({ generationmix }: { generationmix: GenerationIem[] }) => {
    console.log('dataSet generationmix', generationmix);

    const bParams = parseParams(generationmix);

    const barChartParams: BarChartProps = { title: "Generation Sources", labels: bParams.labels, dataSet: bParams.dataSet };

    return <BarChart
        {...barChartParams} />;

}

