'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import { useAuth } from '../../context/AuthContext';
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";



import ButtonBase from "@/components/atoms/ButtonBase";
import TransactionForm from "@/components/molecules/TransactionForm";
import TransactionList from "@/components/organisms/TransactionList";
import InformationSaldo from "@/components/molecules/InformationSaldo";

export default function Dashboard () {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [showTransactionFrom, setShowTransactionFrom] =  useState(false);

  const toggleShowTransactionForm = () => {
    setShowTransactionFrom(!showTransactionFrom);
  }

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user]);

  if (loading) {
    return <p className="p-4">Mengecek sesi login...</p>
  }

  return(
    <>
      <div className="relative w-full h-screen bg-[#B3C8CF] flex items-center justify-center flex-col gap-y-4">
        <div className="w-full max-w-[800px] px-4">
          <div className="w-full flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-[#333]">Transaction This Month</h2>
            <div className="flex items-center gap-x-2">
              <ButtonBase className="bg-blue-600 px-2 py-1 rounded cursor-pointer" onClick={toggleShowTransactionForm}>Add +</ButtonBase>
              <Link href="/recap" className="bg-white rounded text-[#333] px-2 py-1 cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <p className="whitespace-nowrap">Recap Page</p>
                  <FaArrowRight />
                </div>
              </Link>
              <RiSettings4Fill className="text-black text-xl" />
            </div>
          </div>
          <TransactionList user={user} />
          <InformationSaldo />
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