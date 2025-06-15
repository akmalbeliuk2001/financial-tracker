"use client"

import { useState } from 'react';
import { register } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
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
      await register(form.email, form.password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return(
    <div className="w-full h-screen bg-[#B3C8CF] text-[#333] flex items-center justify-center">
      <div className='bg-white w-full max-w-[800px] h-full max-h-[500px] rounded-xl shadow-2xl overflow-hidden flex items-center justify-center gap-4'>
        <div className='flex items-center justify-center flex-col'>
          <img src="/character/andy-shopping.png" alt="coin" className='w-[300px] shrink-0'/>
          <div className='w-full max-w-[300px]'>
            <p className='font-bold text-2xl'>Take Care You Financial</p>
            <p className='text-xs'>Take care of your money—it’s your quiet partner in everything you do. A little intention today can mean a lot of freedom tomorrow.</p>
          </div>
        </div>
        <div className='w-full max-w-[400px]'>
          <div className='h-full flex flex-col items-center justify-center'>
            <h1 className='w-full max-w-[280px] font-bold text-[40px] leading-none text-center mb-4'>Create Account</h1>
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[300px]">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-full"
                onChange={handleChange}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-full"
                onChange={handleChange}
                required
              />
              {error && <p className="text-red-600">{error}</p>}
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-full cursor-pointer"
              >
                Regist
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}