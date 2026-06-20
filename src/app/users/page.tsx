"use client";

import { useState, useEffect } from "react";

type User = {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    const res = await fetch("/api/users");
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    setName("");
    setEmail("");
    setLoading(false);
    loadUsers();
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Usuários</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-gray-700 bg-black p-2"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-gray-700 bg-black p-2"
            placeholder="voce@email.com"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-white px-4 py-2 font-semibold text-black"
        >
          {loading ? "Salvando..." : "Cadastrar"}
        </button>
      </form>

      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="rounded border border-gray-800 bg-black p-3"
          >
            <p className="font-medium">{user.name ?? "Sem nome"}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </li>
        ))}
        {users.length === 0 && (
          <p className="text-gray-500">Nenhum usuário cadastrado.</p>
        )}
      </ul>
    </div>
  );
}
