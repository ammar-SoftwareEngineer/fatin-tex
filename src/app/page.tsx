import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Categories from "@/components/home/categories";
import SundusSection from "@/components/home/SundusSection";
import BlogSection from "@/components/home/BlogSection";
 
export default function Home() {
  
  return (
    <>
      <Hero/>
      <AboutSection/>
      <Categories/>
      <SundusSection/>
      <WhyChooseUs/>
      <BlogSection/>
    </>
  );
}