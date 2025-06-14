"user client"

import { useEffect, useState } from "react"
import TransactionItem from "../molecules/TransactionItem"
import { getTransactions, deleteTransaction } from '@/lib/firestore';

export default function TransactionList ({ user }) {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    if (!user) return;
    const data = await getTransactions(user.uid);
    setTransactions(data);
  };

  
  const handleDelete = async (id) => {
    await deleteTransaction(user.uid, id);
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, [user]);
  
  return(
    <div>
      <h2 className="text-lg font-semibold mb-2">Transaksi Bulan Ini</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500">Belum ada transaksi.</p>
      ) : (
        <div>
          {transactions.map((t) => (
            <TransactionItem key={t.id} data={t} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>

  )
}