"use client";
export const dynamic = "force-dynamic";
import { useState } from 'react';

const MOCK_DATA = {
  tarjetasEsteticas: [
    { id: 1, album: 'The Dark Side of the Moon', artista: 'Pink Floyd', fecha: '1973-03-01' },
    { id: 2, album: 'Abbey Road', artista: 'The Beatles', fecha: '1969-09-26' },
    { id: 3, album: 'Thriller', artista: 'Michael Jackson', fecha: '1982-11-30' },
    { id: 4, album: 'Back in Black', artista: 'AC/DC', fecha: '1980-07-25' },
  ],
};

export default function TarjetaEsteticaPage() {
  const [data] = useState(MOCK_DATA);

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Tarjetas Estéticas</h1>
        <p className="text-neutral-500 mt-1">Explora tus álbumes favoritos con estilo</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(data.tarjetasEsteticas ?? []).map((tarjeta) => (
          <div
            key={tarjeta.id}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h2 className="text-lg font-semibold">{tarjeta.album}</h2>
            <p className="text-sm text-neutral-500">{tarjeta.artista}</p>
            <p className="text-sm text-neutral-400">{tarjeta.fecha}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold mb-4">Detalles de Álbumes</h2>
        <ul className="list-disc list-inside space-y-2">
          {(data.tarjetasEsteticas ?? []).map((tarjeta) => (
            <li key={tarjeta.id} className="text-neutral-700 dark:text-neutral-300">
              <span className="font-semibold">{tarjeta.album}</span> por {tarjeta.artista} (Lanzado en {tarjeta.fecha})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}