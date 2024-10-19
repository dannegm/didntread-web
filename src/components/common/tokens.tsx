'use client';
import useSWR from 'swr';

import { useFingerprint } from '@/providers/fingerprint-provider';

const getTokens = async (token: string | null) => {
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

    const { data, error, isLoading } = useSWR(token, getTokens);

    if (isLoading) {
        return <></>;
    }

    if (error) {
        return <div className='text-red'>Something went wrong</div>;
    }

    return (
        <div className='flex flex-col gap-4 w-[400px] items-center'>
            <p className='break-all'>Tokens: {data?.tokens || 0}</p>
        </div>
    );
}
