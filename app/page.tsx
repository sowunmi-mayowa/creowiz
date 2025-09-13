import FeaturesGrid from "./components/FeaturesGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Notes from "./components/Notes";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Notes />
      <FeaturesGrid />
      <Footer />
    </div>
  );
}
