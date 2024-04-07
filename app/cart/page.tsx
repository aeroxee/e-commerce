import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cart() {
  return (
    <Container>
      <section className="space-y-5">
        <h1 className="text-4xl font-bold">Keranjang Anda Kosong</h1>
        <p className="text-sm font-extralight">
          Sepertinya Anda belum menambahkan beberapa item kedalam keranjang.
        </p>
        <p>
          <Link href="/" className="mt-5">
            <Button size="lg" className="text-lg">
              Eksplor Produk
            </Button>
          </Link>
        </p>
      </section>
    </Container>
  );
}
