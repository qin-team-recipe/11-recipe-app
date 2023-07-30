'use client';

import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <Link href="http://localhost:8080/api/v1/auth/google">Google Login</Link>
    </div>
  );
};

export default LoginPage;
