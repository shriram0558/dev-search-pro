import Link from "next/link";
import "material-symbols"

export default function Navbar({ pathname }: { pathname: string }) {
  return (
    <nav className="text-primary flex flex-row justify-around items-center py-5 w-full">
      <Link href="/" className="font-bold text-xl text-secondary flex items-center gap-2">
        <span className="material-symbols-outlined">work_update</span>
        DevSearchPro
      </Link>
      <div className="flex gap-8 text-sm">
        <Link href="/" className={`hover:text-secondary ${pathname == '/' ? "text-secondary" : ""}`}>Home</Link>
        <Link href="/about" className={`hover:text-secondary ${pathname == '/about' ? "text-secondary" : ""}`}>About</Link>
        <Link href="/contact" className={`hover:text-secondary ${pathname == '/contact' ? "text-secondary" : ""}`}>Contact</Link>
      </div>
      <button className="bg-secondary text-background px-4 py-2 font-semibold rounded-md">
        Post a Job
      </button>
    </nav>
  )
}