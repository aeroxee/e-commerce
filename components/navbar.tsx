"use client";

import { ArrowLeft, LogIn, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="px-4 py-2 bg-background/60 filter backdrop-blur-md border-b fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            {pathname.startsWith("/products") && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => router.back()}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
            <Link href="/" className="font-extrabold text-lg">
              Aeroxee
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`text-gray-500 text-sm ${
                pathname === "/" ? "text-sky-600" : "hover:text-sky-600"
              }`}
            >
              Semua
            </Link>
            <Link
              href="/"
              className={`text-gray-500 text-sm ${
                pathname.startsWith("/apparel")
                  ? "text-sky-600"
                  : "hover:text-sky-600"
              }`}
            >
              Pakaian
            </Link>
            <Link
              href="/"
              className={`text-gray-500 text-sm ${
                pathname.startsWith("/accessories")
                  ? "text-sky-600"
                  : "hover:text-sky-600"
              }`}
            >
              Aksesoris
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button type="button" size="icon" variant="outline">
            <Search className="w-4 h-4" />
          </Button>
          <Link href="/login">
            <Button type="button" size="icon" variant="outline">
              <LogIn className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button type="button" size="icon" variant="outline">
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
