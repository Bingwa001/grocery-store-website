import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy.jsx";
import AppBanner from "./components/AppBanner/AppBanner.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </main>
  )
}

export default App;