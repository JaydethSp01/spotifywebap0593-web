"use client";
export const dynamic = "force-dynamic";
import { useState } from 'react';

const MOCK_DATA = {
  estadisticas: [
    { id: 1, nombre: 'Álbumes Analizados', valor: 12 },
    { id: 2, nombre: 'Bitácoras Creadas', valor: 8 },
    { id: 3, nombre: 'Usuarios Activos', valor: 5 },
    { id: 4, nombre: 'Tarjetas Estéticas', valor: 15 }
  ],
  registros: [
    { id: 1, usuario: 'Juan Pérez', album: 'Random Access Memories', bitacora: 'Análisis profundo del álbum.' },
    { id: 2, usuario: 'Ana Gómez', album: 'The Dark Side of the Moon', bitacora: 'Observaciones sobre la producción.' },
    { id: 3, usuario: 'Luis Martínez', album: 'Abbey Road', bitacora: 'Comentario sobre la influencia del álbum.' },
    { id: 4, usuario: 'María López', album: 'Thriller', bitacora: 'Reseña sobre el impacto cultural.' }
  ]
};

export default function EstadisticasPage() {
  const [data] = useState(MOCK_DATA);

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Estadísticas de la Aplicación</h1>
        <p className="text-neutral-500 mt-1">Visión general de la actividad</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(data.estadisticas ?? []).map((stat) => (
          <div key={stat.id} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-sm text-neutral-500">{stat.nombre}</p>
            <p className="text-3xl font-bold mt-1">{stat.valor}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold mb-4">Registros de Usuarios</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-neutral-500">
              <th className="py-2">Usuario</th>
              <th className="py-2">Álbum</th>
              <th className="py-2">Bitácora</th>
            </tr>
          </thead>
          <tbody>
            {(data.registros ?? []).map((reg) => (
              <tr key={reg.id} className="border-t border-neutral-100 dark:border-neutral-800">
                <td className="py-3">{reg.usuario}</td>
                <td className="py-3">{reg.album}</td>
                <td className="py-3">{reg.bitacora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}