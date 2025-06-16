"user client"

import { useEffect, useState } from "react"
import TransactionItem from "../molecules/TransactionItem"
import ConfirmationModal from "../atoms/ConfrimationModal"
import { getTransactions, deleteTransaction } from '@/lib/firestore';

export default function TransactionList ({ user }) {
  const [transactions, setTransactions] = useState([]);
  const [idData, setIdData] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false)

  const fetchData = async () => {
    if (!user) return;
    const data = await getTransactions(user.uid);
    setTransactions(data);
  };

  const handleDelete = async () => {
    setShowConfirmation(false);
    await deleteTransaction(user.uid, idData);
    setTransactions(transactions.filter((t) => t.id !== idData));
  };

  useEffect(() => {
    fetchData();
  }, [user]);
  
  return(
    <>
      <div className="bg-white h-full min-h-[300px] max-h-[350px] p-4 rounded-xl text-[#333] overflow-x-auto">
        {transactions.length === 0 ? (
          <div className="w-ful h-full flex items-center justify-center">
            <p className="text-gray-500 text-xl">Belum ada transaksi.</p>
          </div>
        ) : (
          <div className="h-full w-full">
            {transactions.map((t) => (
              <TransactionItem key={t.id} data={t} onDelete={(id) => {setIdData(id), setShowConfirmation(true)}} />
            ))}
          </div>
        )}
      </div>

      {showConfirmation && (
        <ConfirmationModal
          confirmationMessage="Are you sure you want to delete this?"
          cancel={() => setShowConfirmation(false)}
          confirm={handleDelete}
        />
      )}
    </>
  )
}