import { Suspense } from 'react';
import HomeClient from '@/components/PayClient'; 

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeClient />
    </Suspense>
  );
}
