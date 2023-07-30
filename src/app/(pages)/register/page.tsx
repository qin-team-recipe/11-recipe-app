'use client';

import { useState } from 'react';

const RegisterPage = () => {
  const [nickname, setNickname] = useState('');

  const onRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch('http://localhost:8080/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname }),
    });

    console.log('res: ', res);
  };

  return (
    <div>
      <form onSubmit={onRegister}>
        <input
          type="text"
          name="nickname"
          placeholder="ニックネームをご入力ください"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <button type="submit">登録する</button>
      </form>
    </div>
  );
};

export default RegisterPage;
