import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
  Timestamp,
  orderBy,
} from 'firebase/firestore';

// Fungsi menambahkan transaksi
export const addTransaction = async (uid, data) => {
  const { nominal, kategori, deskripsi, tanggal } = data;

  const ref = collection(db, 'users', uid, 'transactions');
  await addDoc(ref, {
    nominal: Number(nominal),
    kategori,
    deskripsi,
    tanggal: Timestamp.fromDate(new Date(tanggal)),
    createdAt: Timestamp.now(),
  });
};

// Ambil transaksi bulan ini
export const getTransactions = async (uid) => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const ref = collection(db, 'users', uid, 'transactions');
  const q = query(
    ref,
    where('tanggal', '>=', Timestamp.fromDate(start)),
    where('tanggal', '<=', Timestamp.fromDate(end)),
    orderBy('tanggal', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    tanggal: doc.data().tanggal.toDate().toISOString(),
  }));
};

// Hapus transaksi berdasarkan ID
export const deleteTransaction = async (uid, id) => {
  const ref = doc(db, 'users', uid, 'transactions', id);
  await deleteDoc(ref);
};

// Ambil rekap total per kategori bulan-bulan lalu
export const getRekapPerKategori = async (uid, monthOffset = 0) => {
  const now = new Date();
  const targetMonth = new Date(now.getFullYear(), now.getMonth() - monthOffset, 1);
  const start = new Date(targetMonth.getFullYear(), targetMonth.getMonth(), 1);
  const end = new Date(targetMonth.getFullYear(), targetMonth.getMonth() + 1, 0);

  const ref = collection(db, 'users', uid, 'transactions');
  console.log("Jalan di firestore", ref)

  const q = query(
    ref,
    where('tanggal', '>=', Timestamp.fromDate(start)),
    where('tanggal', '<=', Timestamp.fromDate(end))
  );

  const snapshot = await getDocs(q);
  console.log("Snapshot", snapshot)
  const kategoriMap = {};

  snapshot.forEach((doc) => {
    console.log("ejeeheheheheheh")
    const { kategori, nominal } = doc.data();
    console.log("Kategori yang didapet", kategori)
    
    if (!kategoriMap[kategori]) kategoriMap[kategori] = 0;
    kategoriMap[kategori] += nominal;
  });

  return Object.entries(kategoriMap).map(([kategori, total]) => ({
    kategori,
    total,
  }));
};
