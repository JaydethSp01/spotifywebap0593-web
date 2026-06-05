"use client";
export const dynamic = "force-dynamic";
import { useState } from 'react';

const MOCK_DATA = {
  albums: [
    { id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
    { id: 2, title: 'Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
    { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 },
    { id: 4, title: 'Back to Black', artist: 'Amy Winehouse', year: 2006 }
  ],
  logs: [
    { id: 1, user: 'Juan Perez', album: 'Abbey Road', date: '2023-10-01' },
    { id: 2, user: 'Ana Gomez', album: 'Dark Side of the Moon', date: '2023-10-02' },
    { id: 3, user: 'Carlos Ruiz', album: 'Thriller', date: '2023-10-03' }
  ]
};

export default function AlbumPage() {
  const [data] = useState(MOCK_DATA);

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Álbumes de Música</h1>
        <p className="text-neutral-500 mt-1">Explora y documenta tus álbumes favoritos</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(data.albums ?? []).map((album) => (
          <div key={album.id} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <h3 className="text-xl font-semibold">{album.title}</h3>
            <p className="text-sm text-neutral-500">{album.artist}</p>
            <p className="text-sm text-neutral-500">{album.year}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold mb-4">Bitácoras Recientes</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-neutral-500">
              <th className="py-2">Usuario</th>
              <th className="py-2">Álbum</th>
              <th className="py-2">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {(data.logs ?? []).map((log) => (
              <tr key={log.id} className="border-t border-neutral-100 dark:border-neutral-800">
                <td className="py-3">{log.user}</td>
                <td className="py-3">{log.album}</td>
                <td className="py-3">{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}