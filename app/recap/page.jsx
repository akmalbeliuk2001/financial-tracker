'use client';

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getRekapPerKategori } from '@/lib/firestore';

import Navigation from '@/components/organisms/NavigationPage';
import RekapChart from '../../components/organisms/RecapChart';
import RekapTable from '../../components/organisms/RecapTable';

export default function RekapPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [rekapData, setRekapData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      setLoading(true);
      const data = await getRekapPerKategori(user.uid, 0);
      setRekapData(data);
      setLoading(false);
    };

    fetchData();
  }, [user]);

  if (user === null) {
    return <p className="p-4">Mengecek sesi login...</p>;
  }

  return (
    <div className='bg-white w-full h-full text-[#333]'>
      <main className="max-w-3xl mx-auto py-10 px-4">
        <Navigation />
        <h1 className="text-2xl font-bold mb-6">Rekap Bulanan</h1>

        {loading ? (
          <p>Mengambil data rekap...</p>
        ) : rekapData.length === 0 ? (
          <p className="text-gray-500">Belum ada data transaksi bulan lalu.</p>
        ) : (
          <>
            <RekapChart data={rekapData} />
            <RekapTable data={rekapData} />
          </>
        )}
      </main>

    </div>
  );
}
