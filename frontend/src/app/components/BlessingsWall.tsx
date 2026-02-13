import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";
import { Heart, Quote } from "lucide-react";

interface Blessing {
  id: string;
  name: string;
  message: string;
  date: string;
}

export function BlessingsWall() {
  const [blessings, setBlessings] = useState<Blessing[]>([]);

  const fetchBlessings = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/blessings");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Fetched blessings:", result);

      if (
        result.success &&
        Array.isArray(result.data) &&
        result.data.length > 0
      ) {
        setBlessings(result.data);
      }
    } catch (error) {
      console.error("Error fetching blessings:", error);
    }
  };

  useEffect(() => {
    fetchBlessings();
  }, []);
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white/80 to-[#FFF8F3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-br from-[#8B1538] to-[#6B1129] p-3 rounded-full">
              <Heart className="size-12 text-[#DAA520] fill-[#DAA520]" />
            </div>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl text-[#8B1538] mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Wall of Blessings
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#DAA520]" />
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle
                cx="8"
                cy="8"
                r="6"
                fill="none"
                stroke="#DAA520"
                strokeWidth="1.5"
              />
              <circle cx="8" cy="8" r="2" fill="#DAA520" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#DAA520]" />
          </div>

          <p
            className="text-[#6B1129] max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Messages of love and well wishes from our beloved family and friends
          </p>
        </motion.div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
        >
          <Masonry gutter="1.5rem">
            {blessings.map((blessing, index) => (
              <motion.div
                key={blessing.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className="bg-gradient-to-br from-white to-[#FFF8F3] backdrop-blur-sm rounded-2xl p-6 transition-shadow duration-300 border-2 border-[#DAA520]/20 relative"
                  style={{ boxShadow: "0 10px 30px rgba(139, 21, 56, 0.1)" }}
                >
                  {/* Decorative quote icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="absolute -top-3 -left-3 bg-gradient-to-br from-[#8B1538] to-[#6B1129] rounded-full p-2 shadow-lg"
                  >
                    <Quote className="size-4 text-[#DAA520]" />
                  </motion.div>

                  {/* Message */}
                  <p
                    className="text-[#6B1129] leading-relaxed mb-4 mt-2 italic"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: 400,
                    }}
                  >
                    "{blessing.message}"
                  </p>

                  {/* Divider */}
                  <div className="flex items-center gap-2 my-3">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#DAA520] to-transparent" />
                    <Heart className="size-3 text-[#DAA520] fill-[#DAA520]" />
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#DAA520] to-transparent" />
                  </div>

                  {/* Author info */}
                  <div className="flex items-center justify-between">
                    <p
                      className="text-[#8B1538] font-medium"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {blessing.name}
                    </p>
                    <p
                      className="text-[#6B1129]/70 text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {blessing.date}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <svg
                    className="absolute bottom-2 right-2 opacity-30"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <defs>
                      <linearGradient
                        id={`accent-${blessing.id}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#DAA520" />
                        <stop offset="100%" stopColor="#B8860B" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 5 5 Q 15 5 15 15 M 5 5 Q 5 15 15 15"
                      stroke={`url(#accent-${blessing.id})`}
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* Show more indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p
            className="text-[#6B1129] italic"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500 }}
          >
            {blessings.length} blessings and counting...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
