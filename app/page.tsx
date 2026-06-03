import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="p-6">Hello World!</h1>
      <Link href={'/users'}>Go to users</Link>
      <Link href={'/users/new'}>Go to new</Link>
    </>
  );
}
