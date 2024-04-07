"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Bidang ini dibutuhkan" })
    .max(20, { message: "Nama depan terlalu panjang" }),
  lastName: z
    .string()
    .min(1, { message: "Bidang ini dibutuhkan" })
    .max(30, { message: "Nama belakang terlalu panjang" }),
  username: z
    .string()
    .min(1, { message: "Bidang ini dibutuhkan" })
    .max(15, { message: "Nama pengguna tidak boleh melebihi 15 karakter" }),
  email: z.string().min(1, { message: "Bidang ini dibutuhkan" }),
  password1: z.string().min(1, { message: "Bidang ini dibutuhkan" }),
  password2: z.string().min(1, { message: "Bidang ini dibutuhkan" }),
});

export default function FormRegister() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password1: "",
      password2: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form action="" method="post" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Masukkan nama depan"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Masukkan nama belakang"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Masukkan nama pengguna"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Pilih nama pengguna untuk proses login Anda nanti.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Masukkan email" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password1"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Masukkan kata sandi"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password2"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Masukkan konfirmasi kata sandi"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button type="submit">Login</Button>

          <Link href="/login" className="text-sm font-light underline">
            Sudah mempunyai akun, silahkan login disini.
          </Link>
        </div>
      </form>
    </Form>
  );
}
