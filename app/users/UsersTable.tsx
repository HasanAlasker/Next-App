import Link from "next/link";
import UserCard from "../components/UserCard";
import { User } from "../types/user";
import { sort } from "fast-sort";
import Btn from "../components/Btn";

interface Props {
  list: User[];
  sortOrder: string;
}

export default function UsersTable({ list, sortOrder }: Props) {
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
      <Btn title={<Link href={'/users'}>Reset Filter</Link>}/>

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
            <UserCard key={u.id} id={u.id} email={u.email} name={u.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
