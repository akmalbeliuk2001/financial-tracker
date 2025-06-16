'use client'

import { useEffect, useState } from "react"
import { useAuth } from '../../context/AuthContext';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


// import Navigation from '@/components/organisms/NavigationPage';
import TransactionForm from "@/components/molecules/TransactionForm";
import TransactionList from "@/components/organisms/TransactionList"
import ButtonBase from "@/components/atoms/ButtonBase";

export default function Dashboard () {
  const { user } = useAuth();
  const router = useRouter();

  const [showTransactionFrom, setShowTransactionFrom] =  useState(false);

  const toggleShowTransactionForm = () => {
    setShowTransactionFrom(!showTransactionFrom);
  }

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
      <div className="relative w-full h-screen bg-[#B3C8CF] flex items-center justify-center flex-col gap-y-4">
        {/* <Navigation /> */}
        <div className="w-full max-w-[800px] px-4">
          <div className="w-full flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-[#333]">Transaction This Month</h2>
            <div className="flex items-center gap-x-2">
              <ButtonBase className="bg-blue-600 px-2 py-1 rounded cursor-pointer" onClick={toggleShowTransactionForm}>Add +</ButtonBase>
              <Link href="/recap" className="bg-white rounded text-[#333] px-2 py-1 cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <p>Recap Page</p>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
          <TransactionList user={user} />
        </div>

        {showTransactionFrom && (
          <div className="absolute w-full h-full bg-black/80 flex items-center justify-center">
            <TransactionForm closeForm={toggleShowTransactionForm} className="bg-white w-full max-w-[500px] rounded-xl p-4" user={user} />
          </div>
        )}
      </div>
    </>
  )
}