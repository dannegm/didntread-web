import './globals.css';

import { type Metadata } from 'next';
import { type ChildrenContainer } from '@/types/common';

import { getEnvironmentInfo } from '@/helpers/environment';
import RootLayout from '@/components/layout/root-layout';

// Random Token, this is useless, just to see if gitguardian is catching
// bqKPaAI3cF7azgTSvq6aiYCaQrqCZM9i

const environmentInfo = getEnvironmentInfo();

export const metadata: Metadata = {
    title: "Did't read.",
    other: {
        ...environmentInfo,
    },
};

export default function Layout({ children }: Readonly<ChildrenContainer>) {
    return <RootLayout environmentInfo={environmentInfo}>{children}</RootLayout>;
}
