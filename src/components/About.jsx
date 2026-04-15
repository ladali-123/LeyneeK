import React from 'react';
import aboutImage from '../assets/About.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.png';

function AboutUs() {
  return (
    <section className="py-16 md:py-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
        </div>

        <div className="text-center mb-6 md:mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
              MAKE SMART
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-700">
              INTERACTIVE WORLD
            </span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-red-100 text-red-800 rounded-full text-sm font-semibold tracking-wide shadow-sm">
              Since 1998
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Leyneek Electronics <span className="text-red-700">Pvt. Ltd.</span>
            </h3>

            <div className="w-16 h-1 bg-red-600 rounded-full"></div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">


              Leyneek Electronics Pvt. Ltd. started at 1998, the company with the mission of bridging the gap
               between state-of-the-art products and a state-of-the-art user experience. They set out to create
                products that were not only impressive in design and features, but were so simple to use that 
                everyone can interact and enjoy the innovation behind them. Truly innovative products help people 
                and organizations find ways to be more successful,
              more efficient, more collaborative, and find more enjoyment in their work.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
              At Leyneek Electronicss Pvt. Ltd. work each day to stay one step ahead of the market’s needs,
               developing ideas for collaboration and productivity that no one else has thought of yet. From our 
               award-winning whiteboard software that lets users draw, annotate and add multimedia files during a
                live presentation, to our cutting-edge interactive touchscreen displays that include top of the line
                 features that make meetings and video conferencing easier than ever,
               we always focus on creating technology that is simply impressive.

            </p>

            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              Discover Our Journey
            </button>
          </div>

          {/* IMAGE FIXED SECTION */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full">

              <div className="absolute -inset-4 bg-gradient-to-r from-red-300 to-red-300 rounded-2xl blur-xl opacity-20"></div>

              <img
                src={aboutImage}
                alt="About Leyneek Electronics"
                className="relative rounded-lg shadow-2xl object-cover w-full max-w-2xl 
                h-64 sm:h-80 md:h-[560px]"
              />

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                <span className="text-xs font-bold text-gray-800">✨ 20+ Years Excellence</span>
              </div>

            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center auto-rows-fr">
          <div className="bg-white rounded-2xl p-6 shadow-md transition duration-300 hover:scale-105 h-full flex flex-col justify-center">
            <div className="text-4xl font-black text-red-600">25+</div>
            <div className="text-gray-600 font-medium mt-1">Years of Innovation</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md transition duration-300 hover:scale-105 h-full flex flex-col justify-center">
            <div className="text-4xl font-black text-red-600">10k+</div>
            <div className="text-gray-600 font-medium mt-1">Happy Institutions</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md transition duration-300 hover:scale-105 h-full flex flex-col justify-center">
            <div className="text-4xl font-black text-red-600">50+</div>
            <div className="text-gray-600 font-medium mt-1">Global Partners</div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800">Our Premium Solutions</h3>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Cutting-edge hardware designed for seamless collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={pic2}
                  alt="Product 1"
                  className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-5">
                <h4 className="text-xl font-bold text-gray-800">PTZ Camera</h4>
                <p className="text-gray-500 text-sm mt-1">4K Ultra HD · Auto-framing</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={pic3}
                  alt="Product 2"
                  className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-5">
                <h4 className="text-xl font-bold text-gray-800">True Wireless Mic</h4>
                <p className="text-gray-500 text-sm mt-1">Noise cancellation · 20m range</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={pic1}
                  alt="Product 3"
                  className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-5">
                <h4 className="text-xl font-bold text-gray-800">Interactive Panel</h4>
                <p className="text-gray-500 text-sm mt-1">4K · 20-point touch · Android 11</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;