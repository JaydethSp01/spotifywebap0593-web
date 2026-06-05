export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/bit-cora", label: "Bit Cora" }, { href: "/estad-sticas", label: "Estad Sticas" }, { href: "/lbum", label: "Lbum" }, { href: "/tarjeta-est-tica", label: "Tarjeta Est Tica" }, { href: "/usuario", label: "Usuarios" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Gestión de Bitácoras de Música", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Gestión de Bitácoras de Música">{children}</ProtectedShell>
      </body>
    </html>
  );
}
