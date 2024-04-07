import Container from "@/components/container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { apparel } from "@/lib/data-sample";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <Container>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apparel.map((v, index: number) => (
            <Link href={`/products/${index}`} key={index}>
              <Card className="cursor-pointer">
                <Image
                  src={v.image_url}
                  alt={v.title}
                  width={1200}
                  height={800}
                  className="w-full h-[350px]"
                />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{v.title}</CardTitle>
                    <span className="text-sm font-light">Rp. {v.price}</span>
                  </div>
                  <CardDescription>{v.category}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Home;
