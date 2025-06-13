"use client"

import { useEffect, useState } from "react"
import RecabChart from "@/components/organisms/RecabChart"
import RecabTable from "@/components/organisms/RecabTable"
import { getRekapPerKategori } from '@/lib/firestore';

export default function RecabPage() {
  const [user, setUser] = useState(null)
  const [reakapData, setRekapData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const mockUser = {
      uid: 'demo-user-123',
      name: 'Demo User',
    }
    setUser(mockUser)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      setLoading(true);

       const data = await getRekapPerKategori(user.uid, 1); // bulan lalu
      setRekapData(data);
      setLoading(false);
    }
  }, [user])

  return(
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Rekap Bulanan</h1>
      { loading ? (
        <p>Mengambil Data Recap</p>
      ) : reakapData.length == 0 ? (
        <p>Belum Ada Data Rekap</p>
      ) : (
        <>
          <p>Banyak Datanya!</p>
          <RecabChart></RecabChart>
          <RecabTable></RecabTable>
        </>
      )}
    </main>
  )
}