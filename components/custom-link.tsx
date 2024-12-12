import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

interface CustomLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export function CustomLink({ className, children, ...props }: CustomLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-stone-50 hover:bg-primary/85 h-9 px-4 py-2 w-fit",
        className
      )}
    >
      {children}
    </Link>
  );
}
