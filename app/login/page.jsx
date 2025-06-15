'use client';

import { useState } from 'react';
import { login } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
    <main className="w-full h-screen bg-[#B3C8CF] text-[#333] flex items-center justify-center px-4">
      <div className='bg-white w-full max-w-[800px] h-full max-h-[400px] rounded-xl flex items-center justify-between p-4 shadow'>
        <div className='w-full h-full'>
          <img src="/character/andy-yell.png" alt="" className='w-full h-full object-cover'/>
        </div>

        <div className='bg-white rounded-xl w-full max-w-[330px] h-full max-h-[600px] flex items-center justify-center flex-col p-4'>
          <div className='flex flex-col items-center gap-y-2 mb-3 w-full max-w-[200px]'>
            <h1 className="text-3xl font-bold">Hallo!</h1>
            <p className='text-xs text-center'>Hi! Hope everything’s <u>going well</u> for you today!</p>

          </div>
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[300px]">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-full text-md"
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-full text-md"
              onChange={handleChange}
              required
            />
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-md text-white p-2 rounded-full cursor-pointer mt-4"
            >
              Login
            </button>
            <Link href='/register'>
              <div className='text-center rounded-full cursor-pointer'>Regist</div>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
