import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed bottom-4 left-0 w-full z-50">
      <nav className="mx-4 border border-amber-100 shadow-xl py-4 px-4 rounded-2xl backdrop-blur-2xl">
        <div className="text-green-500 text-lg flex justify-between">
          <Link href="/">Home</Link>
          <Link href="/category">Category</Link>
          <Link href="/favorites">Favorites</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </nav>
    </div>
  );
}