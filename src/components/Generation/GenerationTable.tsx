import React from 'react';
import { GenerationIem } from '../../../types/types';

export const GenerationTable = ({ generationmix }: { generationmix: GenerationIem[] }) => {
    return <div className="GenerationTable" data-testid="generationTable">
        {Object.keys(generationmix).map((key) => (
            <div className='GenerationItem' key={generationmix[key].fuel} >
                <div className='fuel'>{generationmix[key].fuel}</div>
                <div className='perc'>{generationmix[key].perc}%</div>
            </div>
        ))}
    </div>
}