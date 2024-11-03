import Hero from "@/ui/Home/Hero";
import MasVendidos from "./ui/Home/MasVendidos";
import Info from "./ui/Home/Info";
import Socials from "./ui/Home/Socials";
import {fetchData} from '@/lib/actions'
export default async function Home() {


  return (
    <div>
      <Hero/>
      <MasVendidos/>
      <Info/>
      <Socials/>
    </div>
  );
}