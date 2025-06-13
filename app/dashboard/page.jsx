'use client'

import { useEffect, useState } from "react"
import Navigation from '@/components/organisms/Navigation';
import TransactionForm from "@/components/molecules/TransactionForm";
import TransactionList from "@/components/organisms/TransactionList"

export default function Dashboard () {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const mockUser = {
      uid: 'demo-user-123', // ganti nanti dengan Firebase Auth jika diaktifkan
      name: 'Demo User',
    }
    setUser(mockUser)
  }, [])

  return(
    <>
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <Navigation />
        <div>
          <p className="text-[#333] text-[50px] font-extrabold">Your Financial Dashboard</p>
          { user ? (
            <>
              <TransactionForm user={user} />
              <TransactionList user={user} />
            </>  
          ) : (
            <p>Loading User...</p>
          )}
          

        </div>
      </div>
    </>
  )
}