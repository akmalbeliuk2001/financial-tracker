'use client';

import { format } from 'date-fns';
import ButtonBase from '../atoms/ButtonBase';

export default function TransactionItem({ data, onDelete }) {
  const { id, nominal, kategori, deskripsi, tanggal } = data;

  return (
    <div className="flex items-start justify-between bg-gray-100 rounded-lg p-3 mb-2 shadow-sm mt-4">
      <div>
        <p className="text-lg font-semibold text-blue-700">Rp {Number(nominal).toLocaleString()}</p>
        <p className="text-sm text-gray-600">{kategori} • {deskripsi}</p>
        <p className="text-xs text-gray-500">{format(new Date(tanggal), 'dd MMM yyyy')}</p>
      </div>
      <ButtonBase className="bg-red-500 hover:bg-red-600 px-2 py-1 text-sm text-white rounded cursor-pointer" onClick={() => onDelete(id)}>Hapus</ButtonBase>
    </div>
  );
}
