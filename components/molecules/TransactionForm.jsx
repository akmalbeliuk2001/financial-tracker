"use client"

import { useState } from "react";
import ButtonBase from "../atoms/ButtonBase";
import LabelBase from "../atoms/LabelBase";
import InputBase from "../atoms/InputBase";
import SelectBase from "../atoms/SelectBase";
import { addTransaction } from "@/lib/firestore"

export default function TransactionForm ({ user }) {
  const optionItems = [
    { value: '', label: 'Pilih Kategori' },
    { value: 'makan', label: 'Makan' },
    { value: 'hobi', label: 'Hobi' },
    { value: 'transport', label: 'Transportasi' },
    { value: 'lainnya', label: 'Lainnya' },
  ];

  const [form, setForm] = useState({
    nominal: '',
    kategori: '',
    deskripsi: '',
    tanggal: new Date().toISOString().split('T')[0],
  })

  const handleChange = (e) => {
    console.log("ini adalah eventnya:", e.target.value)

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    console.log("Handle submit dari data form input")
    e.preventDefault();
    if (!user) return;
    await addTransaction(user.uid, form);
    setForm({ ...form, nominal: '', deskripsi: '' }); // reset sebagian
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow">
      <div>
        <LabelBase htmlFor="nominal">Nominal</LabelBase>
        <InputBase type="number" name="nominal" value={form.nominal} onChange={handleChange}></InputBase>
      </div>
      <div>
        <LabelBase htmlFor="kategori">Kategori</LabelBase>
        <SelectBase 
          name="kategori"
          value={form.kategori}
          onChange={handleChange}
          options={optionItems}
        />
      </div>
      <div>
        <LabelBase htmlFor="deskripsi">Deskripsi</LabelBase>
        <InputBase name="deskripsi" value={form.deskripsi} onChange={handleChange} />
      </div>
      <div>
        <LabelBase htmlFor="tanggal">Tanggal</LabelBase>
        <InputBase type="date" name="tanggal" value={form.tanggal} onChange={handleChange} />
      </div>
      <ButtonBase type="submit">Simpan</ButtonBase>
    </form>
  )
}