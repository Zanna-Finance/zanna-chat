import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const Header = dynamic(() => import('@/components/Header'), {
  ssr: false,
});

const Main = dynamic(() => import('@/components/Main'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}