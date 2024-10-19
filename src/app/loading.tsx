import DandcingText from '@/components/common/dancing-text';
import Logo from '@/components/common/logo';

export default async function Loading() {
    return (
        <main className='w-screen flex flex-col items-center mt-[10%]'>
            <div className='relative h-[480px] w-[550px]'>
                <DandcingText className='absolute -z-0' />
                <div className='relative z-10 mt-4 h-full flex flex-col gap-6 items-center justify-center'>
                    <Logo />
                </div>
            </div>
        </main>
    );
}
