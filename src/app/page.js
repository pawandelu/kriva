import Athletes from "@/components/home/Athletes";
import Comfort from "@/components/home/Comfort";
import Essentials from "@/components/home/Essentials";
import Hero from "@/components/home/Hero";
import Magnesium from "@/components/home/Magnesium";
import Marque from "@/components/home/Marque";
import Recovery from "@/components/home/Recovery";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Comfort />
      <Essentials />
      <Magnesium />
      <Team />
      <Athletes />
      <Marque />
      <Recovery />
    </>
  );
}
