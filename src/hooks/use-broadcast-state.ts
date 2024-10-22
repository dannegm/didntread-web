import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

const useBroadcastState = <T>(name: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(initialValue);
    const [updatedValue, setUpdatedValue] = useState<T>(initialValue);
    const channel = new BroadcastChannel(name);

    useEffect(() => {
        channel.postMessage(value);
    }, [value]);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            setUpdatedValue(event.data);
        };

        channel.addEventListener('message', handleMessage);
        return () => {
            channel.removeEventListener('message', handleMessage);
        };
    }, []);

    return [updatedValue, setValue];
};

export default useBroadcastState;
