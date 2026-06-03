import React from "react";
import { User } from "../types/user";
import UserCard from "../components/UserCard";

export default async function BombaClat() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl mb-5">Users</h1>
      <table className="table table-zebra rounded-lg border-2 border-gray-100">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <UserCard key={u.id} id={u.id} email={u.email} name={u.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
