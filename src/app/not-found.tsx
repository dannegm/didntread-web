import Link from 'next/link';
import DandcingText from '@/components/common/dancing-text';
import Logo from '@/components/common/logo';
import Footer from '@/components/layout/footer';

export default async function NotFound() {
    return (
        <main className='w-screen flex flex-col items-center mt-[10%]'>
            <div className='relative h-[480px] w-[550px]'>
                <DandcingText className='absolute -z-0' />
                <div className='relative z-10 mt-4 h-full flex flex-col gap-6 items-center justify-center'>
                    <Logo label="Did'nt Find" />
                    <Link className='bg-black text-white rounded-full px-6 py-2' href='/'>
                        Take me back
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
