import ProductDetail from "@/components/product-detail";
import { apparel } from "@/lib/data-sample";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const previousImages = (await parent).openGraph?.images || [];

  const product = apparel[id];

  return {
    title: product.title,
    openGraph: {
      images: ["", ...previousImages],
    },
  };
}

export default function Products({ params, searchParams }: Props) {
  const id = params.id;
  const product = apparel[id];

  return <ProductDetail product={product} />;
}
