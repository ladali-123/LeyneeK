// Footer.tsx
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Leyneek<span className="text-red-500">.</span>
            </h2>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Delivering revolutionary digital solutions across India. We turn your ideas into reality before your next blink.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-red-500">
              Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-red-400 transition">About us</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Educational Product</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Corporate Products</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Camera</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-red-500">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Compensation First</a></li>
              <li><a href="#" className="hover:text-red-400 transition">My Account</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Return Policy</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact & Franchise (combined or separate) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-red-500">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <FiPhone className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>+91-9621110734</span>
              </p>
              <p className="flex items-start gap-3">
                <FiMail className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>contact@leyneek.com</span>
              </p>
              <p className="flex items-start gap-3">
                <FiMapPin className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Okhla Industrial Area Phase - 2, New Delhi-110020</span>
              </p>
            </div>
          </div>
        </div>

        {/* Franchise Office Section - spans full width */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4 text-center lg:text-left">
            Franchise Offices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg">
              <FiMapPin className="text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="font-medium text-white">Patna:</span> Raghunath Path, Opposite to RPS School Gate (Indian Bank), RPS More, Patna, Bihar - 801503
              </p>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg">
              <FiMapPin className="text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="font-medium text-white">Prayagraj:</span> 164/22A GT Road, Bai Ka bagh, Near Jeevan Jyoti Hospital, Side of Globe Eye Hospital, Allahabad - 211003
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Leyneek. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-red-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-red-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-red-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;