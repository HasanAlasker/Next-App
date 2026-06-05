import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-5 bg-gray-100 p-4 mb-8 justify-between">
      <div className="flex gap-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/users/new"}>Add User</Link>
      </div>

      <Link href={"/api/auth/signin"}>Login</Link>
    </div>
  );
}
