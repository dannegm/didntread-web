'use client';
import NumberFlow from '@number-flow/react';

import { useGetTokens } from '@/services/didntread';
import PokerChipRegular from '../icons/poker-chip-regular';

export default function Tokens() {
    const { data } = useGetTokens();
    const tokens = data?.tokens || 0;

    return (
        <div className='fixed z-50 top-4 right-4 flex flex-row gap-2 px-3 py-1 items-center bg-black rounded-3xl shadow-lg'>
            <span className='text-white font-bold'>
                <NumberFlow
                    value={tokens}
                    format={tokens > 100_000 ? { notation: 'compact' } : undefined}
                    locales='en-US'
                />
            </span>
            <PokerChipRegular className='text-yellow-400' />
        </div>
    );
}
