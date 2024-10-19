'use client';
import useSWR from 'swr';
import NumberFlow from '@number-flow/react';

import { useFingerprint } from '@/providers/fingerprint-provider';
import PokerChipRegular from '../icons/poker-chip-regular';

const getTokens = async (token?: string) => {
    if (!token) {
        return null;
    }

    const res = await fetch('https://endpoints.hckr.mx/didntread/tokens', {
        headers: {
            'x-dnn-token': token,
        },
    });

    if (!res.ok) {
        return null;
    }

    const data = await res.json();
    return data;
};

export default function Tokens() {
    const { token } = useFingerprint();

    const { data } = useSWR(token, getTokens);

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
