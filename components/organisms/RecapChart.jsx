'use client';

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a0522d', '#20b2aa'];

export default function RecapChart({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">Belum ada data rekap.</p>;
  }

  return (
    <div className="w-full h-80 bg-white p-4 rounded-xl shadow text-[#333]">
      <h2 className="text-lg font-semibold mb-4">Rekap Pengeluaran per Kategori</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            nameKey="kategori"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
