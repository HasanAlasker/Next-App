"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data, status } = useSession();

  return (
    <div className="flex gap-5 items-center bg-gray-100 p-4 mb-8 justify-between text-lg">
      <div className="flex gap-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/users/new"}>Add User</Link>
      </div>

      {status === "loading" ? (
        <div className="loading loading-dots" />
      ) : status === "unauthenticated" ? (
        <Link href={"/api/auth/signin"}>Login</Link>
      ) : (
        <div className="flex gap-4 items-center">
          {data?.user?.name}
          {data?.user?.image && (
            <Image
              alt="user avatar"
              src={data.user.image}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <Link className="btn btn-secondary" href={"/api/auth/signout"}>Log out</Link>
        </div>
      )}
    </div>
  );
}
