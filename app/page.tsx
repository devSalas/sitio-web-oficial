import Link from "next/link";
import { redirect } from "next/navigation";

export default function App() {
  redirect('/home')
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"./home"}>
        Home
      </Link>
    </div>
  );
}
