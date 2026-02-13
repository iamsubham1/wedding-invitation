import { motion } from "motion/react";

interface LandingPageProps {
  onOpenInvitation: () => void;
}

export function LandingPage({ onOpenInvitation }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B1538] via-[#6B1129] to-[#4A0D1C] flex items-center justify-center overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B1538'%3E%3Cpath d='M40 10c5 10 15 10 20 20-10-5-20-5-20-20zm0 60c-5-10-15-10-20-20 10 5 20 5 20 20zm30-30c-10 5-10 15-20 20 5-10 5-20 20-20zm-60 0c10-5 10-15 20-20-5 10-5 20-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A55A]/10 via-transparent to-[#C9A55A]/10" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Ganesh Ji Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block bg-white/40 backdrop-blur-sm rounded-full p-3 shadow-2xl border-2 border-[#C4A07A]/30">
            <img
              src="/icons/ganesh_ji_logo-removebg-preview.png"
              alt="Ganesh Ji"
              className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <svg width="200" height="30" viewBox="0 0 200 30" className="mx-auto">
            <defs>
              <linearGradient
                id="goldGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#B8860B" />
                <stop offset="50%" stopColor="#DAA520" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
            </defs>
            <path
              d="M 20 15 Q 60 8 100 15 Q 140 22 180 15"
              stroke="url(#goldGradient2)"
              strokeWidth="2"
              fill="none"
            />
            {[40, 80, 120, 160].map((x) => (
              <circle key={x} cx={x} cy="15" r="3" fill="url(#goldGradient2)" />
            ))}
          </svg>
        </motion.div>

        {/* Sanskrit blessing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-[#FFD700] tracking-widest text-lg md:text-xl mb-8 uppercase font-semibold"
          style={{
            fontFamily: "Inter, sans-serif",
            textShadow:
              "0 0 20px rgba(255, 215, 0, 0.5), 0 2px 10px rgba(218, 165, 32, 0.3)",
          }}
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-xl md:text-2xl text-[#FFE4E1] font-serif italic mb-3"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Wedding Invitation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-lg text-white/90 mb-12"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          March 4 - 8, 2026
        </motion.p>

        {/* Open Invitation Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <motion.button
            onClick={onOpenInvitation}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(218, 165, 32, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#DAA520] text-[#4A0D1C] px-12 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300"
            style={{
              fontFamily: "Inter, sans-serif",
              boxShadow:
                "0 10px 40px rgba(218, 165, 32, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <span className="relative z-10">Open Invitation</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
          <svg width="150" height="30" viewBox="0 0 150 30" className="mx-auto">
            <path
              d="M 15 15 Q 45 22 75 15 Q 105 8 135 15"
              stroke="url(#goldGradient2)"
              strokeWidth="2"
              fill="none"
            />
            {[35, 75, 115].map((x) => (
              <circle key={x} cx={x} cy="15" r="3" fill="url(#goldGradient2)" />
            ))}
          </svg>
        </motion.div>

        {/* Animated sparkles */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M10 0 L11 9 L20 10 L11 11 L10 20 L9 11 L0 10 L9 9 Z"
              fill="#FFD700"
              opacity="0.8"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/4"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path
              d="M10 0 L11 9 L20 10 L11 11 L10 20 L9 11 L0 10 L9 9 Z"
              fill="#DAA520"
              opacity="0.8"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
