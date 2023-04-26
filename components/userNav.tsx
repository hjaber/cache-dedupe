import { getSession } from "@/lib/session";
import Link from "next/link";

export default async function UserNav() {
  const user = await getSession(42);

  if (!user) {
    return "login";
  }
  return (
    <li>
      <Link href="/">{user.username}</Link>
    </li>
  );
}
