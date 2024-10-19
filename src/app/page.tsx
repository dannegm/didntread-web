import DandcingText from './dancing-text';

export default function Home() {
    return (
        <main className='h-full w-full flex flex-col justify-center items-center'>
            <DandcingText />
            <h1 className='text-4xl italic -mt-[480px]'>
                Did'nt Read
            </h1>
        </main>
    );
}
