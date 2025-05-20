import { BlogCard } from "./components/BlogCard";
import { BlogTittle } from "./components/BlogTittle";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeaderButtons } from "./components/HeaderButtons";
import { HeaderIcon } from "./components/HeadIcon";
import { PortifolioBanner } from "./components/PortifolioBanner";
import { PortifolioTittle } from "./components/PortifolioTittle";
import blog1 from "../../public/img/img-card-blog1.jpg";
import blog2 from "../../public/img/img-card-blog2.jpg";
import icon1 from "../../public/img/icons/engine.svg";
import icon2 from "../../public/img/icons/lightning.svg";
import icon3 from "../../public/img/icons/star.svg";
import port1 from "../../public/img/img-card-port1.jpg";
import port2 from "../../public/img/img-card-port2.jpg";
import port3 from "../../public/img/img-card-port3.jpg";
import port4 from "../../public/img/img-card-port4.jpg";
import port5 from "../../public/img/img-card-port5.jpg";
import port6 from "../../public/img/img-card-port6.jpg";


export default function Home() {
  return (
    <div className="itens-center">
      <Header />
      <div className="grid lg:grid-cols-3">
        <HeaderIcon imageSrc={icon1} imageAlt="Engine Icon" />
        <HeaderIcon imageSrc={icon2} imageAlt="lightning icon" />
        <HeaderIcon imageSrc={icon3} imageAlt="star icon" />
      </div>
      <HeaderButtons />
      <div className="py-1">
        <PortifolioTittle />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <PortifolioBanner imageSrc={port1} imageAlt="Portifolio 1"/>
          <PortifolioBanner imageSrc={port2} imageAlt="Portifolio 2"/>
          <PortifolioBanner imageSrc={port3} imageAlt="Portifolio 3"/>
          <PortifolioBanner imageSrc={port4} imageAlt="Portifolio 4"/>
          <PortifolioBanner imageSrc={port5} imageAlt="Portifolio 5"/>
          <PortifolioBanner imageSrc={port6} imageAlt="Portifolio 6"/>
        </div>
      </div>
      <BlogTittle />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        <BlogCard imageSrc={blog1} imageAlt="Blog 1" />
        <BlogCard imageSrc={blog2} imageAlt="Blog 2" />
      </div>
      <Footer />
    </div >
  )
}
