import { Merriweather } from 'next/font/google';

import { cn } from '@/helpers/utils';
import Providers, { ProvidersProps } from '@/providers/providers';

const merriweather = Merriweather({
    weight: ['700'],
    subsets: ['latin'],
});

export default function RootLayout({ environmentInfo, children }: ProvidersProps) {
    return (
        <Providers environmentInfo={environmentInfo}>
            <html lang='en'>
                <body className={cn(merriweather.className, 'antialiased')}>{children}</body>
            </html>
        </Providers>
    );
}
