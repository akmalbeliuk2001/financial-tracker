'use client';

import { useState } from 'react';
import { login } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login(form.email, form.password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="w-full h-screen bg-[#155E95] text-[#333] flex items-center justify-center px-4">
      <div className='bg-white rounded-xl w-full max-w-[400px] h-full max-h-[500px] flex items-center justify-center flex-col p-4'>
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[300px]">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-xl"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-xl"
            onChange={handleChange}
            required
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#155E95] text-white p-2 rounded-xl cursor-pointer"
          >
            Sigh In
          </button>
        </form>
      </div>
    </main>
  );
}
