'use client';
import { type ChildrenContainer } from '@/types/common';

import { createContext, useContext, useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

import { tokenEncode } from '@/helpers/crypto';

export interface Fingerprint {
    fingerprint?: string;
    token?: string;
}

const FingerprintContext = createContext<Fingerprint>({
    fingerprint: undefined,
    token: undefined,
});

export const useFingerprint = () => {
    return useContext(FingerprintContext);
};

export default function FingerprintProvider({ children }: ChildrenContainer) {
    const [fingerprint, setFingerprint] = useState<string>();
    const [token, setToken] = useState<string>();

    useEffect(() => {
        const getFingerprint = async () => {
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            setFingerprint(result.visitorId);

            const tokenResult = tokenEncode({
                fingerprint: result.visitorId,
                apiKey: 'GEzj5E0Ybrw9f73NP07UsPMinzmACZx5',
            });

            setToken(tokenResult);
        };

        getFingerprint();
    }, []);

    return (
        <FingerprintContext.Provider value={{ fingerprint, token }}>
            {children}
        </FingerprintContext.Provider>
    );
}