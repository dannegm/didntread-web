import { type ElementProps } from '@/types/common';
import { cn } from '@/helpers/utils';

export default function Footer({ className }: ElementProps) {
    return (
        <footer className={cn('mx-auto max-w-lg border-t p-4 mb-8 flex flex-col gap-4', className)}>
            <nav className='flex flex-row justify-center gap-6'>
                <a
                    className='font-bold text-gray-500 transition hover:text-black hover:underline hover:underline-offset-4 active:translate-y-1'
                    href='#'
                >
                    About
                </a>
                <a
                    className='font-bold text-gray-500 transition hover:text-black hover:underline hover:underline-offset-4 active:translate-y-1'
                    href='#'
                >
                    FAQ
                </a>
                <a
                    className='font-bold text-gray-500 transition hover:text-black hover:underline hover:underline-offset-4 active:translate-y-1'
                    href='#'
                >
                    Terms
                </a>

                <a
                    className='font-bold text-gray-500 transition hover:text-black hover:underline hover:underline-offset-4 active:translate-y-1'
                    href='#'
                >
                    Privacy
                </a>
                <a
                    className='font-bold text-gray-500 transition hover:text-black hover:underline hover:underline-offset-4 active:translate-y-1'
                    href='#'
                >
                    Donate
                </a>
            </nav>

            <div className='text-center text-sm text-gray-400'>
                &copy; {new Date().getFullYear()} - All rights reserved.
            </div>
        </footer>
    );
}
