import bran1 from "../assets/bran1.png";

import bran3 from "../assets/bran3.png";
import bran4 from "../assets/bran4.png";
import bran5 from "../assets/bran5.png";
import bran6 from "../assets/bran6.png";
import bran7 from "../assets/bran7.png";
import bran8 from "../assets/bran8.png";
import bran9 from "../assets/bran9.jpg";
import bran10 from "../assets/bran10.png";

const BrandSection = () => {
  const brands = [
    { id: 1, src: bran1, alt: "Brand 1" },
    { id: 3, src: bran3, alt: "Brand 3" },
    { id: 4, src: bran4, alt: "Brand 4" },
    { id: 5, src: bran5, alt: "Brand 5" },
    { id: 6, src: bran6, alt: "Brand 6" },
    { id: 7, src: bran7, alt: "Brand 7" },
    { id: 8, src: bran8, alt: "Brand 8" },
    { id: 9, src: bran9, alt: "Brand 9" },
    { id: 10, src: bran10, alt: "Brand10"}

  ];

  const allBrands = [...brands, ...brands];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 md:px-4">

        {/* Title */}
        <div className="text-center mb-8">
          <span className="text-red-600 font-semibold uppercase text-xs bg-red-50 px-3 py-1 rounded-full">
            Our Brands
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Trusted By <span className="text-red-600">Leading Partners</span>
          </h2>

          <p className="text-gray-500 mt-2 text-sm">
            We collaborate with top brands
          </p>
        </div>

       
        <div className="relative overflow-hidden">
          <div className="marquee-track flex items-center gap-12 md:gap-20">

            {allBrands.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="flex-shrink-0 w-48 md:w-64 flex items-center justify-center"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-20 md:h-36 w-auto object-contain transition duration-300 hover:scale-110"
                />
              </div>
            ))}

          </div>
        </div>

      </div>

      
      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default BrandSection;