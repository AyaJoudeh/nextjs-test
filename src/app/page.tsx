import Image from 'next/image';
import FirstDev from './components/FirstDev'
import SecondDev from './components/SecondDev'
import ThirdDev from './components/ThirdDev'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FirstDev />
      <SecondDev />
      <ThirdDev />
    </main>
  );
}
