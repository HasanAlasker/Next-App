// import styles from './UserCard.module.css'
import { User } from "../types/user";

export default function UserCard({ id, name, email }: User) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
}
