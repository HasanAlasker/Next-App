import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1>
        Hello <span>{session?.user?.name || "World"}</span>!
      </h1>
      <span>{session?.user?.email}</span>
    </>
  );
}
