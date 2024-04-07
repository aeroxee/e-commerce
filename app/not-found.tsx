import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div className="w-full md:w-[350px] lg:w-[520px] mx-auto space-y-6">
        <h1 className="text-4xl text-rose-600 font-semibold">
          Error Not Found!!!
        </h1>
        <p className="text-lg text-rose-500 font-extralight">
          Tidak dapat menemukan konten yang Anda cari.
        </p>
        <Link href="/">
          <Button size="lg" className="font-bold">
            Ke Home
          </Button>
        </Link>
      </div>
    </Container>
  );
}
