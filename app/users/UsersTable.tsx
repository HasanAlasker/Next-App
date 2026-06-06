"use client";

import Link from "next/link";
import UserCard from "../components/UserCard";
import { User } from "../types/user";
import { sort } from "fast-sort";
import Btn from "../components/Btn";
import { useRouter } from "next/navigation";

interface Props {
  list: User[];
  sortOrder: string;
}

export default function UsersTable({ list, sortOrder }: Props) {
  const router = useRouter();

  const sorted = sort(list).asc(
    sortOrder === "email"
      ? (user) => user.email
      : sortOrder === "name"
        ? (user) => user.name
        : (user) => user.id,
  );

  return (
    <div>
      <h1 className="text-2xl mb-5">Users</h1>
      <div className="flex gap-4">
        <Btn
          type="pri"
          onClick={() => router.push("/users")}
          title={"Reset Filter"}
        />
        <Btn onClick={() => router.push("/")} title={"Go back to home"} />
      </div>

      <table className="table table-zebra rounded-lg border-2 border-gray-100">
        <thead>
          <tr>
            <th>
              <Link href={"/users?sortOrder=id"}>Id</Link>
            </th>
            <th>
              <Link href={"/users?sortOrder=name"}>Name</Link>
            </th>
            <th>
              <Link href={"/users?sortOrder=email"}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted?.map((u) => (
            <UserCard
              key={u.id}
              id={u.id}
              image={u.image}
              email={u.email}
              name={u.name}
              emailVerified={u.emailVerified}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
