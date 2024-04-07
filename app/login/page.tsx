import Container from "@/components/container";
import FormLogin from "@/components/form-login";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Akun - Aeroxee E-Commerce",
  description:
    "Login akun sekarang juga untuk mendapatkan promo spesial bulan ini.",
};

export default function Login() {
  return (
    <Container>
      <Card className="w-[500px] mx-auto p-5">
        <FormLogin />
      </Card>
    </Container>
  );
}
