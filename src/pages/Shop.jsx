

import FeaturedProduct from "../ui/FeaturedProduct"
import Products from "../ui/Products";
import Slider from "../ui/Slider";
export default function Shop() {

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
        <Slider/>
      </section>
 <FeaturedProduct/>
   <Products/>
    </div>
  );
}
