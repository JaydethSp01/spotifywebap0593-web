"use client";
export const dynamic = "force-dynamic";
import { useState } from 'react';

const MOCK_USERS = [
  { id: 1, nombre: 'Juan Pérez', email: 'juanperez@example.com', rol: 'Administrador' },
  { id: 2, nombre: 'Maria López', email: 'marialopez@example.com', rol: 'Editor' },
  { id: 3, nombre: 'Carlos García', email: 'carlosgarcia@example.com', rol: 'Colaborador' },
  { id: 4, nombre: 'Ana Martínez', email: 'anamartinez@example.com', rol: 'Lector' }
];

export default function UsuarioPage() {
  const [usuarios] = useState(MOCK_USERS);

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Gestión de Usuarios</h1>
        <p className="text-neutral-500 mt-1">Administra los usuarios de la aplicación</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(usuarios ?? []).map((usuario) => (
          <div key={usuario.id} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-xl font-semibold">{usuario.nombre}</h2>
            <p className="text-sm text-neutral-500">Email: {usuario.email}</p>
            <p className="text-sm text-neutral-500">Rol: {usuario.rol}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold mb-4">Lista de Usuarios</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-neutral-500">
              <th className="py-2">Nombre</th>
              <th className="py-2">Email</th>
              <th className="py-2">Rol</th>
            </tr>
          </thead>
          <tbody>
            {(usuarios ?? []).map((usuario) => (
              <tr key={usuario.id} className="border-t border-neutral-100 dark:border-neutral-800">
                <td className="py-3">{usuario.nombre}</td>
                <td className="py-3">{usuario.email}</td>
                <td className="py-3">{usuario.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}