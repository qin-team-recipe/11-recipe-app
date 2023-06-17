'use client';

import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
};
