"use client";

import { apparel } from "@/lib/data-sample";
import Autoplay from "embla-carousel-autoplay";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import Container from "./container";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

type Props = {
  product: {
    image_url: string;
    title: string;
    price: number;
    category: string;
  };
};

export default function ProductDetail({ product }: Props) {
  const [goal, setGoal] = useState(350);

  const onClick = (adjustment: number) => {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  };

  return (
    <Container>
      <section className="flex items-start flex-col md:flex-row">
        {/* <Image
            src={product.image_url}
            alt={product.title}
            width={1200}
            height={800}
            className="w-full h-full object-contain p-2"
            decoding="async"
          /> */}
        <Carousel
          className="w-full max-w-xs mx-auto"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {apparel.map((v, index) => (
              <CarouselItem key={index}>
                <Image
                  src={v.image_url}
                  alt={v.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain p-2"
                  decoding="async"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="md:ms-20 px-4 py-10 space-y-4">
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <span className="text-sm font-light">Rp. {product.price}</span>
          <ToggleGroup
            variant="outline"
            type="single"
            className="flex items-start justify-start"
          >
            <ToggleGroupItem value="S" aria-label="S">
              <span className="text-2xl font-bold uppercase">S</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="M" aria-label="M">
              <span className="text-2xl font-bold uppercase">M</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="L" aria-label="L">
              <span className="text-2xl font-bold uppercase">L</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="XL" aria-label="XL">
              <span className="text-2xl font-bold uppercase">XL</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="XXL" aria-label="XXL">
              <span className="text-2xl font-bold uppercase">XXL</span>
            </ToggleGroupItem>
          </ToggleGroup>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="default">Tambah ke keranjang</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>
                    Set your daily activity goal.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() => onClick(-10)}
                      disabled={goal <= 200}
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-7xl font-bold tracking-tighter">
                        {goal}
                      </div>
                      <div className="text-[0.70rem] uppercase text-muted-foreground">
                        Calories/day
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() => onClick(10)}
                      disabled={goal >= 400}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase</span>
                    </Button>
                  </div>
                  <div className="mt-3 h-[120px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <Bar
                          dataKey="goal"
                          style={
                            {
                              fill: "hsl(var(--foreground))",
                              opacity: 0.9,
                            } as React.CSSProperties
                          }
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          <p className="text-sm font-light">
            Your t-shirt is your second skin. It’s the version of you that you
            show to the world. Wear the Monospace one that flows with your
            command line kung-fu moves!{" "}
          </p>
        </div>
      </section>
    </Container>
  );
}
