import { Suspense } from "react";
import { User } from "../types/user";
import UserTable from "./UsersTable";

interface Props {
  searchParams: Promise<{ sortOrder?: string }>;
}

export default async function Users({ searchParams }: Props) {
  const { sortOrder } = await searchParams;

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div>
      <Suspense
        fallback={
          <div>loading</div>
        }
      >
        <UserTable list={users} sortOrder={sortOrder ?? "id"} />
      </Suspense>
    </div>
  );
}
