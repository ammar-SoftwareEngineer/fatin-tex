
import AboutSection from "./components/layout/home/AboutSection";
import BlogSection from "./components/layout/home/BlogSection";
import Categories from "./components/layout/home/categories";
import Hero from "./components/layout/home/Hero";
import SundusSection from "./components/layout/home/SundusSection";
import VideoSection from "./components/layout/home/VideoSection";
import WhyChooseUs from "./components/layout/home/WhyChooseUs";
 
export default function Home() {
  return (
    <>
      <Hero/>
      <AboutSection/>
      <Categories/>
      <SundusSection/>
      <WhyChooseUs/>
      <VideoSection/>
      <BlogSection/>
    </>
  );
}