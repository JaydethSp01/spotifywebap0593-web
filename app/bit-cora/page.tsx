"use client";
export const dynamic = "force-dynamic";
import { useState } from 'react';

const MOCK_DATA = {
  usuarios: [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan.perez@example.com' },
    { id: 2, nombre: 'Ana Gómez', correo: 'ana.gomez@example.com' },
  ],
  albumes: [
    { id: 1, titulo: 'Dark Side of the Moon', artista: 'Pink Floyd' },
    { id: 2, titulo: 'Abbey Road', artista: 'The Beatles' },
  ],
  bitacoras: [
    { id: 1, usuario: 'Juan Pérez', album: 'Dark Side of the Moon', fecha: '2023-10-01' },
    { id: 2, usuario: 'Ana Gómez', album: 'Abbey Road', fecha: '2023-10-02' },
  ],
};

export default function BitacoraPage() {
  const [data] = useState(MOCK_DATA);

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Gestión de Bitácoras</h1>
        <p className="text-neutral-500 mt-1 dark:text-neutral-400">Documenta tus sesiones musicales</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(data.albumes ?? []).map((album) => (
          <div key={album.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">{album.titulo}</h2>
            <p className="text-neutral-500 dark:text-neutral-400">{album.artista}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Usuarios</h2>
        <ul className="space-y-2">
          {(data.usuarios ?? []).map((usuario) => (
            <li key={usuario.id} className="flex justify-between py-2 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-neutral-800 dark:text-neutral-100">{usuario.nombre}</span>
              <span className="text-neutral-500 dark:text-neutral-400">{usuario.correo}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Bitácoras</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-neutral-500 dark:text-neutral-400">
              <th className="py-2">Usuario</th>
              <th className="py-2">Álbum</th>
              <th className="py-2">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {(data.bitacoras ?? []).map((bitacora) => (
              <tr key={bitacora.id} className="border-t border-neutral-100 dark:border-neutral-800">
                <td className="py-3 text-neutral-800 dark:text-neutral-100">{bitacora.usuario}</td>
                <td className="py-3 text-neutral-800 dark:text-neutral-100">{bitacora.album}</td>
                <td className="py-3 text-neutral-500 dark:text-neutral-400">{bitacora.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}