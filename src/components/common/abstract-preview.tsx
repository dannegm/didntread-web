import { type ElementProps } from '@/types/common';
import { type AbstractModel } from '@/types/models';
import { cn } from '@/helpers/utils';
import Image from 'next/image';
import Link from 'next/link';

export interface AbstractCardProps extends ElementProps {
    data: AbstractModel;
}

export default function AbstractPreview({ className, data }: AbstractCardProps) {
    return (
        <article
            className={cn(
                'flex flex-col gap-4 h-auto sm:h-96  p-2 pt-16 sm:p-4 overflow-hidden bg-white rounded-xl border border-gray-400 justify-end',
                className,
            )}
            style={{
                backgroundImage: `url(${data.image})`,
            }}
        >
            <div className='flex flex-col gap-2 bg-white/60 p-4 overflow-hidden backdrop-blur-lg rounded-lg shadow-lg'>
                <h2 className='font-bold text-base text-balance'>{data.title}</h2>

                <p className='flex-1 text-lg text-balance'>{data.resume}</p>

                <p className='flex-1 text-sm text-balance text-gray-600'>{data.description}</p>

                <footer>
                    <Link href={data.url} target='_blank'>
                        <div className='flex flex-row gap-2 bg-gray-100/40 py-2 px-4 -m-4 mt-0'>
                            {data.logo && (
                                <Image
                                    className='bock w-4 h-4 rounded-full'
                                    src={data.logo}
                                    width={64}
                                    height={64}
                                    alt={data.publisher}
                                />
                            )}
                            <div className='flex flex-row gap-1 items-center'>
                                <span className='text-xs'>{data.publisher}</span>
                                <span className='text-xs text-gray-500'>&ndash;</span>
                                <span className='text-xs text-blue-800'>
                                    {new URL(data.url).hostname}
                                </span>
                            </div>
                        </div>
                    </Link>
                </footer>
            </div>
        </article>
    );
}
