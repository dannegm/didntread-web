'use client';
import { type ChildrenContainer } from '@/types/common';
import { type EnvironmentInfo } from '@/helpers/environment';

import FingerprintProvider from '@/providers/fingerprint-provider';
import EnviromentProvider from './enviroment-provider';

export interface ProvidersProps extends ChildrenContainer {
    environmentInfo?: EnvironmentInfo;
}

export default function Providers({ environmentInfo, children }: ProvidersProps) {
    return (
        <EnviromentProvider data={environmentInfo}>
            <FingerprintProvider>{children}</FingerprintProvider>
        </EnviromentProvider>
    );
}
