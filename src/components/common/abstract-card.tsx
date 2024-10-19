import { type ElementProps } from '@/types/common';
import { type AbstractModel } from '@/types/models';
import { cn } from '@/helpers/utils';
import Image from 'next/image';
import Link from 'next/link';

export interface AbstractCardProps extends ElementProps {
    data: AbstractModel;
}

export default function AbstractCard({ className, data }: AbstractCardProps) {
    return (
        <article
            className={cn(
                'flex flex-col gap-4 p-4 overflow-hidden bg-white rounded-xl border border-gray-400',
                className,
            )}
        >
            <h2 className='font-bold text-sm text-balance'>{data.title}</h2>

            <div className='relative h-16'>
                <div
                    className={cn(
                        'relative h-16 overflow-hidden rounded-md shadow transition-all',
                        'hover:h-36 hover:-mt-10 hover:shadow-2xl hover:scale-105',
                    )}
                >
                    <Image className='object-cover transition-all' src={data.image} fill alt='' />
                </div>
            </div>

            <p className='flex-1 text-[0.85rem]'>{data.resume}</p>

            <footer>
                <Link href={data.url} target='_blank'>
                    <div className='flex flex-row gap-2 bg-gray-100 py-2 px-4 -m-4 mt-0'>
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
        </article>
    );
}
