"use client"

import { useState } from "react"

export default function RegisterPage() {
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    console.log("Handle Change")
  }

  const handleChange = () => {
    console.log("Handle change")
  }

  return(
    <main className="w-full max-w-md mx-auto">
      <h1>Daftar Akun</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Daftar
        </button>
      </form>

    </main>
  )
}