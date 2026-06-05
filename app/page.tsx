"use client";
export const dynamic = "force-dynamic";
import { useState } from 'react';

const MOCK_DATA = {
  usuarios: [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com' },
    { id: 2, nombre: 'Ana Gómez', email: 'ana.gomez@example.com' }
  ],
  albumes: [
    { id: 1, titulo: 'Dark Side of the Moon', artista: 'Pink Floyd' },
    { id: 2, titulo: 'Abbey Road', artista: 'The Beatles' }
  ],
  bitacoras: [
    { id: 1, usuario: 'Juan Pérez', album: 'Dark Side of the Moon', comentario: 'Excelente álbum, muy recomendado.' },
    { id: 2, usuario: 'Ana Gómez', album: 'Abbey Road', comentario: 'Un clásico que nunca pasa de moda.' }
  ],
  estadisticas: [
    { label: 'Total de Usuarios', valor: 2 },
    { label: 'Total de Álbumes', valor: 2 }
  ]
};

export default function BitacoraApp() {
  const [data] = useState(MOCK_DATA);

  return (
    <div className="p-8 space-y-8 dark:bg-neutral-900">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">Gestión de Bitácoras de Música</h1>
        <p className="text-neutral-500 mt-1 dark:text-neutral-400">Documenta y analiza tus sesiones de escucha.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(data.estadisticas ?? []).map((stat, index) => (
          <div key={index} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-800">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</p>
            <p className="text-3xl font-bold mt-1 text-neutral-800 dark:text-neutral-100">{stat.valor}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-800">
        <h2 className="font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Bitácoras</h2>
        <table className="w-full text-sm text-neutral-800 dark:text-neutral-100">
          <thead>
            <tr className="text-left text-neutral-500 dark:text-neutral-400">
              <th className="py-2">Usuario</th>
              <th className="py-2">Álbum</th>
              <th className="py-2">Comentario</th>
            </tr>
          </thead>
          <tbody>
            {(data.bitacoras ?? []).map((log) => (
              <tr key={log.id} className="border-t border-neutral-100 dark:border-neutral-700">
                <td className="py-3">{log.usuario}</td>
                <td className="py-3">{log.album}</td>
                <td className="py-3">{log.comentario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}