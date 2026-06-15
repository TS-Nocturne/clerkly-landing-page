import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Compliance from "./components/Compliance";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Compliance />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
