import { type PageProps } from '@/types/common';
import { cn } from '@/helpers/utils';

import Debugger from '@/components/common/debugger';
import DandcingText from '@/components/common/dancing-text';
import Logo from '@/components/common/logo';
import Tokens from '@/components/common/tokens';
import Omnibox from '@/components/common/omnibox';
import Footer from '@/components/layout/footer';
import ListAbstracts from '@/components/common/list-abstracts';

export default async function Home({ searchParams }: PageProps) {
    const debug = searchParams?.debug !== undefined;

    return (
        <>
            <Debugger show={debug} />
            <main
                className={cn('w-screen flex flex-col items-center mt-[10%]', {
                    debug,
                })}
            >
                <Tokens />

                <div className='relative w-full sm:w-[550px]'>
                    <DandcingText className='absolute -z-0 left-1/2 w-[380px] sm:w-[550px] -ml-[190px] sm:-ml-[275px]' />
                    <div className='relative z-10 mt-[140px] sm:mt-[236px] h-full flex flex-col gap-6 items-center justify-center'>
                        <Logo />
                        <Omnibox />
                    </div>
                </div>

                <ListAbstracts className='mx-4 md:mx-auto max-w-2xl z-10 -mt-24 mb-8' />

                <Footer />
            </main>
        </>
    );
}
