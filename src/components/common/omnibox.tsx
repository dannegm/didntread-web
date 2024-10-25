'use client';
import type { ElementProps } from '@/types/common';
import type { FormEvent, ChangeEvent, MouseEvent } from 'react';

import { useState } from 'react';
import { trim } from 'lodash';

import { cn } from '@/helpers/utils';

import LinkSimpleRegular from '@/components/icons/link-simple-regular';
import LightningFill from '@/components/icons/lightning-fill';
import ClipboardRegular from '@/components/icons/clipboard-regular';

import { urlValidator } from '@/helpers/validators';
import { useScrapAbstract } from '@/services/didntread';

import AbstractPreview from './abstract-preview';

export default function Omnibox({ className }: ElementProps) {
    const [inputUrl, setInputUrl] = useState<string>('');
    const [typing, setTyping] = useState<boolean>(false);

    const sanitizedUrl = trim(inputUrl.trim(), '.');
    const isValidUrl = urlValidator(sanitizedUrl);

    const { executor, data, isLoading } = useScrapAbstract();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isValidUrl) {
            executor({
                url: sanitizedUrl,
            });
            setInputUrl('');
            setTyping(false);
        }
    };

    const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputUrl(event.target.value);
        setTyping(true);
    };

    const handlePaste = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const clipboardText = await navigator.clipboard.readText();
            if (urlValidator(clipboardText)) {
                setInputUrl(clipboardText);
            }
        } catch (error) {
            console.warn('Error trying to read the clipboard', error);
        }
    };

    return (
        <div className='flex flex-col gap-8 mb-[120px] items-center'>
            <form
                className={cn(
                    'flex flex-row w-[360px] sm:w-[550px] p-1 items-center bg-white rounded-3xl border border-black shadow-lg focus-within:ring-4 transition',
                    {
                        'ring-2 ring-red-500': typing && !isValidUrl,
                    },
                    className,
                )}
                onSubmit={handleSubmit}
            >
                <div className='w-8 h-8 flex items-center justify-center'>
                    <LinkSimpleRegular className='text-gray-700' />
                </div>

                <input
                    className='flex-1 outline-none'
                    type='url'
                    value={inputUrl}
                    onChange={handleUrlChange}
                    autoFocus
                />

                <div className='w-8 h-8 flex ml-2 items-center justify-center'>
                    <button
                        type='button'
                        className={cn(
                            'select-none flex w-8 h-8 items-center justify-center rounded-full transition',
                            'hover:scale-110 active:scale-105 disabled:opacity-50 disabled:cursor-not-allowed',
                        )}
                        onClick={handlePaste}
                    >
                        <ClipboardRegular className='text-black' />
                    </button>
                </div>

                <div className='w-8 h-8 flex ml-2 items-center justify-center'>
                    <button
                        type='submit'
                        className={cn(
                            'select-none flex w-8 h-8 items-center justify-center rounded-full bg-black transition',
                            'hover:scale-110 active:scale-105 disabled:opacity-50 disabled:cursor-not-allowed',
                        )}
                        disabled={!isValidUrl || isLoading}
                    >
                        <LightningFill className='text-white' />
                    </button>
                </div>
            </form>

            {data && <AbstractPreview className='mx-4 sm:-mx-24' data={data} />}

            {isLoading && (
                <>
                    <div className='shimmer h-12 w-full sm:w-96 bg-gray-200 rounded-lg'></div>
                    <style>
                        {`
                            .shimmer {
                                position: relative;
                                overflow: hidden;
                            }
                            .shimmer::before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: -100%;
                                width: 100%;
                                height: 100%;
                                background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.2) 100%);
                                animation: shimmer 1.5s infinite;
                            }
                            @keyframes shimmer {
                                0% {
                                left: -100%;
                                }
                                100% {
                                left: 100%;
                                }
                            }
                        `}
                    </style>
                </>
            )}
        </div>
    );
}
