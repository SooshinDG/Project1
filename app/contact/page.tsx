import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "무료 진단 신청 | 스튜디오 웨이브",
  description:
    "3분이면 충분합니다. 현재 웹사이트의 문제점과 개선 방향을 무료로 진단받으세요.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
