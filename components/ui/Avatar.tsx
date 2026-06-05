import { cn } from "@/lib/cn";

/** Avatar con iniciales en tinte de marca. Para tablas/listas premium. */
export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = (name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
  return (
    <span
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 text-sm font-semibold text-brand",
        "dark:bg-brand/20 dark:text-brand-light",
        "hover:bg-brand/20 dark:hover:bg-brand/30",
        "focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background",
        "transition-colors duration-200",
        className
      )}
      aria-label={`Avatar de ${name}`}
      role="img"
    >
      {initials}
    </span>
  );
}

export default Avatar;