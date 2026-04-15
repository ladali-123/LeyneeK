import { FiTruck, FiTag, FiShoppingCart, FiShield, FiZap } from 'react-icons/fi';

const LeyneekServices = () => {
  const features = [
    {
      icon: <FiTruck className="w-8 h-8 text-red-600" />,
      title: 'Free Delivery',
      subtitle: "India's Free Delivery on all Orders",
      description: 'We fulfill every digital requirement of yours. You think and we provide with every possible digital solutions before your next blink.',
      cta: 'Read more'
    },
    {
      icon: <FiTag className="w-8 h-8 text-red-600" />,
      title: 'Sales & Discounts',
      subtitle: 'Maximum Discounts Available on Every Product',
      description: 'We fulfill every digital requirement of yours. You think and we provide with every possible digital solutions before your next blink.',
      cta: 'Read more'
    },
    {
      icon: <FiShoppingCart className="w-8 h-8 text-red-600" />,
      title: 'Buy Online',
      subtitle: 'Buy Online Every Product',
      description: 'We provide proper tech-support for our clients and resolve the issue within the given time.',
      cta: 'Read more'
    },
    {
      icon: <FiShield className="w-8 h-8 text-red-600" />,
      title: 'Quality Assurance',
      subtitle: 'Quality assurance is the term used in both manufacturing and service',
      description: 'We fulfill every digital requirement of yours. You think and we provide with every possible digital solutions before your next blink.',
      cta: 'Read more'
    }
  ];

  return (
    <section className="py-12 bg-white font-sans">
      <div className="container mx-auto px-4 md:px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-semibold tracking-wide uppercase text-sm bg-red-50 
          px-4 py-1.5 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-5 leading-tight">
            What Makes Leyneek <span className="text-red-600">Different</span> From Others
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            We fulfill every digital requirement of yours. You think and we provide with every possible
             digital solutions before your next blink.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 bg-gray-50 rounded-2xl 
        p-6 mb-16 border border-gray-100">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-red-600">50,000+</div>
            <div className="text-gray-700 font-medium">Interactive Solutions</div>
            <div className="text-sm text-gray-500">Successfully Installed PAN India</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-red-600">100%</div>
            <div className="text-gray-700 font-medium">Free Delivery</div>
            <div className="text-sm text-gray-500">India's Free Delivery on all Orders</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-red-600">24/7</div>
            <div className="text-gray-700 font-medium">Tech Support</div>
            <div className="text-sm text-gray-500">Issues resolved within given time</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300
               p-6 border-t-4 border-red-500 hover:border-red-700 flex flex-col h-full"
            >
              <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-red-600 text-sm font-medium mt-1 mb-3">{item.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">{item.description}</p>
              <button className="text-red-600 font-semibold text-sm mt-5 inline-flex items-center gap-1
               group-hover:gap-2 transition-all">
                {item.cta} →
              </button>
            </div>
          ))}
        </div>

        {/* Revolutionary Solutions Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 md:p-8 flex flex-col 
        md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-3 rounded-full text-white">
              <FiZap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">REVOLUTIONARY SOLUTIONS</h3>
              <p className="text-gray-700 max-w-xl">
                You think and we provide every possible digital solution before your next blink.
              </p>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-md">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeyneekServices;