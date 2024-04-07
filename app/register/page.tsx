import Container from "@/components/container";
import FormRegister from "@/components/form-register";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pendaftaran Akun - Aeroxee E-Commerce",
  description:
    "Daftar sekarang juga untuk mendapatkan promo spesial untuk pengguna baru.",
};

export default function Register() {
  return (
    <Container>
      <Card className="w-[700px] mx-auto p-5">
        <FormRegister />
      </Card>
    </Container>
  );
}
