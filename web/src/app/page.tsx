'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Simple Brick Building Animation
const BrickBuilder = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),   // Start building
      setTimeout(() => setStep(2), 3000),   // Show text
      setTimeout(() => setStep(3), 4000),   // Show buttons
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const bricks = [
    { text: "Section 8", color: "bg-yellow-400" },
    { text: "Public Housing", color: "bg-blue-500" },
    { text: "Emergency Rental", color: "bg-yellow-500" },
    { text: "Down Payment", color: "bg-blue-400" },
    { text: "Veterans Housing", color: "bg-yellow-400" },
    { text: "Senior Housing", color: "bg-blue-500" },
    { text: "State Programs", color: "bg-yellow-500" },
    { text: "Local Assistance", color: "bg-blue-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Brick Animation Area */}
      <div className="relative z-10 mb-8">
        <div className="grid grid-cols-4 gap-2 mb-8">
          {bricks.map((brick, index) => (
            <motion.div
              key={index}
              className={`w-20 h-8 ${brick.color} rounded shadow-lg flex items-center justify-center`}
              initial={{ 
                scale: 0,
                opacity: 0,
                y: 100,
                rotate: Math.random() * 90 - 45
              }}
              animate={step >= 1 ? {
                scale: 1,
                opacity: 1,
                y: 0,
                rotate: 0
              } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.6
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                zIndex: 10
              }}
            >
              <span className="text-xs font-bold text-white text-center px-1">
                {brick.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <motion.div
        className="text-center max-w-4xl z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={step >= 2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Building Dreams
          </span>
          <br />
          <span className="text-white text-3xl md:text-5xl">
            Brick by Brick
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Every housing program is a building block toward your new home. 
          Let us help you construct your path to affordable housing.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={step >= 3 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/apply">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-full shadow-xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 212, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Your Future
            </motion.button>
          </Link>
          
          <motion.button
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold text-lg rounded-full hover:bg-blue-400/10 transition-all"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#FFD700",
              color: "#FFD700"
            }}
          >
            Watch How It Works
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={step >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[
            { number: "50,000+", label: "Families Helped" },
            { number: "200+", label: "Housing Programs" },
            { number: "98%", label: "Success Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl md:text-3xl font-black text-yellow-400">
                {stat.number}
              </div>
              <div className="text-blue-200 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={step >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
        </motion.div>
        <p className="text-yellow-400 text-sm mt-2 font-medium text-center">Scroll to explore</p>
      </motion.div>
    </div>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">
            How AHA Works
          </h2>
          <p className="text-xl text-gray-600">
            Our simple 3-step process connects you with housing assistance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Tell Us About You",
              description: "Share your household information, income, and housing needs",
              icon: "📝",
              color: "from-yellow-400 to-yellow-500"
            },
            {
              step: "02",
              title: "We Find Programs", 
              description: "Our AI matches you with relevant housing assistance programs",
              icon: "🔍",
              color: "from-blue-400 to-blue-500"
            },
            {
              step: "03",
              title: "Apply with Confidence",
              description: "Get guidance and track your progress across programs", 
              icon: "🏠",
              color: "from-yellow-400 to-blue-400"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg"
                whileHover={{ y: -10, scale: 1.02, shadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className={`text-4xl font-black mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call to Action Section
const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Find Your 
            <span className="text-yellow-400"> Dream Home?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of families who have found affordable housing through our platform
          </p>
          <Link href="/apply">
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl rounded-full shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(255, 212, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Application Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page
export default function LandingPage() {
  return (
    <div className="relative">
      <BrickBuilder />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
}