// import styles from './UserCard.module.css'
import Link from "next/link";
import { User } from "../types/user";

export default function UserCard({ id, name, email }: User) {
  return (
    <tr>
      <td>
        <Link href={`/users/${id}`}>{id}</Link>
      </td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
}
