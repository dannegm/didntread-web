'use client';
import type { ChildrenContainer } from '@/types/common';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { umami } from '@/services/umami';

export const TrackersProvider = ({ children }: ChildrenContainer) => {
    const pathname = usePathname();

    useEffect(() => {
        umami.track({
            url: pathname,
            referrer: document.referrer,
            screen: `${window.screen.width}x${window.screen.height}`,
            title: document.title,
        });
    }, []);
    return <>{children}</>;
};
