// ProductSection.jsx
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";
import pro4 from "../assets/pro4.jpg";
import pro5 from "../assets/pro5.jpg";
import pro9 from "../assets/pro9.jpg";
import pro8 from "../assets/pro8.jpg";
const products = [
  {
    id: 1,
    name: "Digital Teaching Device",
    description: "Interactive Flat Panel For Education | All In One Interactive Whiteboard",
    image: pro1,
    buttonText: "ENQUIRY NOW",
  },
  {
    id: 2,
    name: "Virtual Classroom Solution",
    description: "Seamless online teaching with real-time collaboration tools.",
    image: pro2,
    buttonText: "ENQUIRY NOW",
  },
  {
    id: 3,
    name: "Interactive Whiteboard",
    description: "Interactive whiteboard with touch control and wireless presentation.",
    image: pro3,
    buttonText: "ENQUIRY NOW",
  },
  {
    id: 4,
    name: "AI Learning Assistant",
    description: "Personalized AI tutor for students and automated grading.",
    image: pro9,
    buttonText: "ENQUIRY NOW",
  },
  {
    id: 5,
    name: "Digital Podium",
    description: "Real-time quizzes, analytics, and performance reports.",
    image: pro5,
    buttonText: "ENQUIRY NOW",
  },
  
  {
    id: 6,
    name: "Interactive Digital Board",
    description: "High-resolution digital whiteboard with multi-touch, cloud sync, and real-time annotation.",
    image: pro8,
    buttonText: "ENQUIRY NOW",
  },
  
  {
    id: 7,
    name: "AI Virtual Classroom",
    description: "Immersive learning with AI-driven analytics, breakout rooms, and collaboration tools.",
    image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=600&h=400&fit=crop",
    buttonText: "ENQUIRY NOW",
  },
 
  {
    id: 8,
    name: "Cloud Assessment Suite",
    description: "Automated exams, instant feedback, proctoring solutions and performance insights.",
    image: pro4,  
    buttonText: "ENQUIRY NOW",
  },
];

const ProductSection = () => {
  return (
    <section className="py-10 px-2 bg-gray-50 gap-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
            Our Feature Products
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 rounded-full"></span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Cutting-edge solutions for modern education and collaboration
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

             
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                  {product.description}
                </p>
                <button className="mt-auto bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-full text-sm tracking-wide">
                  {product.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;