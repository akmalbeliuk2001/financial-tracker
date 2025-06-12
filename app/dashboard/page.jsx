'use client'

import { useEffect, useState } from "react"

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
        <div>
          <p className="text-[#333] text-[50px] font-extrabold">Your Financial Dashboard</p>
          <TransactionForm user={user} />
          <TransactionList user={user} />

        </div>
      </div>
    </>
  )
}