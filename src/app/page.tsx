import { BlogCards } from "./components/BlogCards";
import { BlogTittle } from "./components/BlogTittle";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeaderButtons } from "./components/HeaderButtons";
import { HeaderIcons } from "./components/HeadIcons";
import { PortifolioBanner } from "./components/PortifolioBanner";
import { PortifolioTittle } from "./components/PortifolioTittle";

export default function Home() {
  return (
    <div className="itens-center">
      <Header />
      <HeaderIcons />
      <HeaderButtons />
      <div className="py-1">
        <PortifolioTittle />
        <PortifolioBanner />
      </div>
      <BlogTittle />
      <BlogCards />
      <Footer/>
    </div>
  )
}
