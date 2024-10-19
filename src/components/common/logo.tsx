import { type ElementProps } from '@/types/common';
import { cn } from '@/helpers/utils';

export default function Logo({ className }: ElementProps) {
    return <h1 className={cn('text-4xl italic', className)}>Did'nt Read</h1>;
}
