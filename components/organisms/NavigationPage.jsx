'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '@/lib/firebase';
import Link from 'next/link';

export default function Navigation() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Gagal logout:', error.message);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-2 mb-6">
      <div className="flex space-x-4">
        <Link href="/dashboard" className="text-blue-600 font-medium hover:underline">
          Dashboard
        </Link>
        <Link href="/recap" className="text-blue-600 font-medium hover:underline">
          Rekap
        </Link>
      </div>

      {user && (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      )}
    </nav>
  );
}
