"use client"; // error componets must be client

interface Props {
  error: Error;
  reset: () => void;
}

export default function error({ error, reset }: Props) {
  console.log(error);
  return (
    <div>
      un expected error occurd
      <button className="btn" onClick={() => reset}>
        Retry
      </button>
    </div>
  );
}
