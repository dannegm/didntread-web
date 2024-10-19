'use client';
import { type ElementProps } from '@/types/common';
import { cn } from '@/helpers/utils';

import { useEnviroment } from '@/providers/enviroment-provider';
import { useGetTokens } from '@/services/didntread';

import JsonViewer from './json-viewer';

export interface DebuggerProps extends ElementProps {
    show?: boolean;
}

export default function Debugger({ className, show = false }: DebuggerProps) {
    const { data } = useGetTokens();
    const environmentInfo = useEnviroment();

    if (!show) {
        return <></>;
    }

    return (
        <div
            className={cn(
                'debugger',
                'fixed z-max right-2 bottom-2 rounded-md overflow-hidden bg-[#0f172a] shadow-xl',
                className,
            )}
        >
            <JsonViewer name='enviroment' data={environmentInfo} />
            <JsonViewer name='session' data={data} />
        </div>
    );
}
