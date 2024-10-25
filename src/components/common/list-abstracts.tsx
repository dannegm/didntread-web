'use client';
import type { ElementProps } from '@/types/common';
import { cn } from '@/helpers/utils';

import { useGetAbstracts } from '@/services/didntread';
import AbstractCard from './abstract-card';

export default function ListAbstracts({ className }: ElementProps) {
    const { data, isLoading } = useGetAbstracts();

    if (isLoading || !data?.length) {
        return <></>;
    }

    return (
        <section className={cn('flex flex-row flex-wrap gap-4 place-content-center', className)}>
            {data
                .filter(i => i !== null)
                .map(abstract => (
                    <AbstractCard
                        className='w-full sm:w-[300px]'
                        key={abstract.hash}
                        data={abstract}
                    />
                ))}
        </section>
    );
}
