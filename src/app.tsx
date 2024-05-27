import React from 'react';
import { Layout } from './components/Layout';
import { useGetGenerationMix } from './hooks/useGetGenerationMix';
import { GenerationTable } from './components/Generation/GenerationTable';
import './index.css';
import { GenerationBarChart, parseParams } from './components/Generation/GenerationBarChart';

export const App = () => {

    const { data, isLoading, isError } = useGetGenerationMix();

    return <Layout>

        <div><h1>UK Energy Mix</h1></div>

        {isError && <div data-testid="error-loading-data">Something went wrong ...</div>}
        {isLoading ? (
            <div data-testid="loading-data">Loading ...</div>
        ) : (
            <div className='GenerationInfoContainer'>
                <div className='GenerationTableContainer'>
                    <GenerationTable generationmix={{ ...data?.data?.generationmix || [] }} />
                </div>
                <div style={{ width: "65%" }}>
                    <GenerationBarChart generationmix={{ ...data?.data?.generationmix || [] }} />
                </div>
            </div>
        )}

    </Layout>
}
