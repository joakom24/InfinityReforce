import Head from "next/head";
import AnimationVertical from "../components/AnimationVertical";
import Banner from "../components/Banner";
import BannerWelcome from "../components/BannerWelcome";
import Contact from "../components/Contact";
import Follow from "../components/Follow";
import Footer from "../components/Footer";
import Icons from "../components/Icons";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reforce Infinity</title>
        <meta name="description" content="Reforce Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <BannerWelcome />
      <Icons />
      <AnimationVertical />
      <Partners />
      <Team />
      <Contact />
      <Follow />
      <Footer />
    </div>
  );
}
