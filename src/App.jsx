import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import SpotLight from "./pages/SpotLight";
import FeaturesSection from "./pages/FeaturesSection";
import FieldForceFeatures from "./pages/FieldForceFeatures";
import AnimationSection from "./pages/AnimationSection";
import WhatsappIcon from "./components/WhatsappIcon";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Fieldiva | A Complete field operation site</title>
        <meta name="description" content="A Complete software for automates and optimizes the end-to-end aspects of your field operations." />
        <meta
          name="keywords"
          content="React, Vite, SEO, Open Graph, Single Page App"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Welcome to Fieldiva" />
        <meta
          property="og:description"
          content="Fieldiva is an Integrated AI Software Platform that automates and optimizes the end-to-end aspects of your field operations."
        />
        <meta property="og:image" content="https://res.cloudinary.com/dvjqkwbzc/image/upload/v1745385583/utility_pwupql.jpg" />
        <meta property="og:url" content="https://fieldiva.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fieldiva" />
        <meta
          name="twitter:description"
          content="Fieldiva is an Integrated AI Software Platform that automates and optimizes the end-to-end aspects of your field operations."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dvjqkwbzc/image/upload/v1745385583/utility_pwupql.jpg"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://fieldiva.com/" />
      </Helmet>
      <Header />
      <SpotLight />
      <FeaturesSection />
      <FieldForceFeatures />
      <AnimationSection />
      <Footer />
      <WhatsappIcon />
    </>
  );
}

export default App;
