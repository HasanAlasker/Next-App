import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="">Hello World!</h1>
      <Link href={"/users"} className="btn btn-soft">
        Go to users
      </Link>
      <Link href={"/users/new"} className="btn btn-soft">
        Go to new
      </Link>
      <button className="btn btn-md sm:btn-sm md:btn-md btn-primary">
        Responsive
      </button>{" "}
    </>
  );
}
