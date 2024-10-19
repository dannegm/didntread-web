import type { Metadata } from 'next';
import './globals.css';

import { Merriweather } from '@next/font/google';

const merriweather = Merriweather({
    weight: ['700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "Did't read.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${merriweather.className} antialiased`}>{children}</body>
        </html>
    );
}
