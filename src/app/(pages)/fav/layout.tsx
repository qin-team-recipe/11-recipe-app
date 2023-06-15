import { Footer } from "@/app/components/parts/Footer/Footer";
import { Header } from "@/app/components/parts/Header";

export default function FavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>お気に入り</Header>
      {children}
      <Footer />
    </>
  );
}