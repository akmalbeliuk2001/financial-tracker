'use client'

import { useEffect, useState } from "react"
// import Navigation from '@/components/organisms/Navigation';
import TransactionForm from "@/components/molecules/TransactionForm";
import TransactionList from "@/components/organisms/TransactionList"
import { useAuth } from '../../context/AuthContext';

export default function Dashboard () {
  const { user } = useAuth();

  return(
    <>
      <div className="w-full h-screen bg-white flex items-center justify-center">
        {/* <Navigation /> */}
        <div>
          <p className="text-[#333] text-[50px] font-extrabold">Your Financial Dashboard</p>
          { user ? (
            <>
              <TransactionForm user={user} />
              <TransactionList user={user} />
            </>  
          ) : (
            <p>Silakan login terlebih dahulu</p>
          )}
        </div>
      </div>
    </>
  )
}