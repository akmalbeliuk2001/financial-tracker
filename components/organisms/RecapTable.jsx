'use client';

export default function RekapTable({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-500 mt-4">Tidak ada data untuk ditampilkan.</p>;
  }

  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">Detail Rekap Bulanan</h2>
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-sm text-gray-600">
            <th>Kategori</th>
            <th>Total Pengeluaran</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.kategori} className="bg-gray-50">
              <td className="py-2 px-3 capitalize">{item.kategori}</td>
              <td className="py-2 px-3">Rp {Number(item.total).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
