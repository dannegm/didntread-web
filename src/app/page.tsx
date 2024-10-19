import DandcingText from '@/components/common/dancing-text';
import Debugger from '@/components/common/debugger';
import Logo from '@/components/common/logo';
import { PageProps } from '@/types/common';

export default async function Home({ searchParams }: PageProps) {
    const debug = searchParams?.debug !== undefined;

    return (
        <main className='h-full w-full flex flex-col justify-center items-center'>
            <Debugger show={debug} />
            <DandcingText />
            <Logo className='-mt-[480px]' />
        </main>
    );
}
