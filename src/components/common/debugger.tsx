'use client';
import { type ElementProps } from '@/types/common';
import { cn } from '@/helpers/utils';

import useSWR from 'swr';

import { useEnviroment } from '@/providers/enviroment-provider';
import { useFingerprint } from '@/providers/fingerprint-provider';
import JsonViewer from './json-viewer';

const getTokens = async (token?: string) => {
    if (!token) {
        return null;
    }

    const res = await fetch('https://endpoints.hckr.mx/didntread/tokens', {
        headers: { 'x-dnn-token': token },
    });

    if (!res.ok) {
        return null;
    }

    const data = await res.json();
    return data;
};

export interface DebuggerProps extends ElementProps {
    show?: boolean;
}

export default function Debugger({ className, show = false }: DebuggerProps) {
    const { token } = useFingerprint();
    const { data } = useSWR(token, getTokens);
    const environmentInfo = useEnviroment();

    if (!show) {
        return <></>;
    }

    return (
        <div
            className={cn(
                'fixed left-2 bottom-2 rounded-md overflow-hidden bg-[#0f172a] text-white shadow-md',
                className,
            )}
        >
            <JsonViewer name='enviroment' data={environmentInfo} />
            <JsonViewer name='session' data={data} />
        </div>
    );
}
