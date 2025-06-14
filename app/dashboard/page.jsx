'use client'

import { useEffect, useState } from "react"
import { useAuth } from '../../context/AuthContext';
import { useRouter } from "next/navigation";

import Navigation from '@/components/organisms/NavigationPage';
import TransactionForm from "@/components/molecules/TransactionForm";
import TransactionList from "@/components/organisms/TransactionList"

export default function Dashboard () {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/login")
    }
  }, [user])

  if (user === null) {
    return <p className="p-4">Mengecek sesi login...</p>
  }

  return(
    <>
      <div className="w-full bg-white flex items-center justify-center flex-col gap-y-4">
        <Navigation />
        <div>
          <p className="text-[#333] text-[50px] font-extrabold">Your Financial Dashboard</p>
          <TransactionForm user={user} />
          <TransactionList user={user} />
        </div>
      </div>
    </>
  )
}