import Link from "next/link";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"./home"}>
        Home
      </Link>
    </div>
  );
}
