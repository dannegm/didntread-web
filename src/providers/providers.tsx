'use client';
import type { ChildrenContainer } from '@/types/common';
import type { EnvironmentInfo } from '@/helpers/environment';

import { Provider as ReduxProvider } from 'react-redux';
import FingerprintProvider from '@/providers/fingerprint-provider';
import EnviromentProvider from '@/providers/enviroment-provider';
import { TrackersProvider } from '@/providers/trackers-provider';

import { store } from '@/store';
import { Suspense } from 'react';

export interface ProvidersProps extends ChildrenContainer {
    environmentInfo?: EnvironmentInfo;
}

export default function Providers({ environmentInfo, children }: ProvidersProps) {
    return (
        <ReduxProvider store={store}>
            <EnviromentProvider data={environmentInfo}>
                <TrackersProvider>
                    <FingerprintProvider>
                        <Suspense>{children}</Suspense>
                    </FingerprintProvider>
                </TrackersProvider>
            </EnviromentProvider>
        </ReduxProvider>
    );
}
