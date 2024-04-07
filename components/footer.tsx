import Link from "next/link";
import Container from "./container";
import ThemeMode from "./theme-mode";

export default function Footer() {
  return (
    <footer className="mt-10 bg-neutral-50 dark:bg-slate-900 pb-5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold mb-4">Aeroxee</span>
            <Link href="" className="text-sm text-gray-500 hover:text-sky-600">
              About
            </Link>
            <Link href="" className="text-sm text-gray-500 hover:text-sky-600">
              Documentation
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold mb-4">Collections</span>
            <Link href="" className="text-sm text-gray-500 hover:text-sky-600">
              Featured Products
            </Link>
            <Link href="" className="text-sm text-gray-500 hover:text-sky-600">
              Summer Picks
            </Link>
          </div>
        </div>

        <hr className="my-5" />

        <div className="flex items-center justify-between">
          <span className="font-light text-gray-500">
            Copyright &copy; 2024 Aeroxee, Inc.
          </span>
          <div className="flex items-center gap-3">
            <span className="font-light text-gray-500">Powered by Aeroxee</span>
            <ThemeMode />
          </div>
        </div>
      </Container>
    </footer>
  );
}
