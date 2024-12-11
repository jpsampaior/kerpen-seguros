import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function AvatarComplete({
  src,
  fallback,
}: {
  src: string;
  fallback: string;
}) {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
