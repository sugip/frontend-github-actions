import Link from 'next/link';

const Home = (): JSX.Element => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link href='/todos'>Todo List</Link>
    </main>
  );
};

export default Home;
