import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: number }>;
}

export default async function UserId({ params }: Props) {
  const { id } = await params;
  if (id > 10) notFound();

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return (
    <table className="table table-zebra border-gray-50 border">
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address?.city}</td>
        </tr>
      </tbody>
    </table>
  );
}
