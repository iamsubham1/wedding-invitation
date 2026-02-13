import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function FamilyDetails() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFF8F3] to-white/80">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-br from-[#8B1538] to-[#6B1129] p-3 rounded-full">
              <Heart className="size-10 text-[#DAA520] fill-[#DAA520]" />
            </div>
          </motion.div>

          <h2
            className="text-3xl md:text-5xl text-[#8B1538] mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Our Families
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
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
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-16">
          {/* Groom's Family - Compact for mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div
              className="bg-gradient-to-br from-white to-[#FFF8F3] backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border-2 border-[#DAA520]/20"
              style={{ boxShadow: "0 10px 40px rgba(139, 21, 56, 0.1)" }}
            >
              {/* Decorative top */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-3 md:mb-6"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 60 60"
                  className="mx-auto md:w-[60px] md:h-[60px]"
                >
                  <defs>
                    <linearGradient
                      id="groomGold"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#DAA520" />
                      <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    fill="none"
                    stroke="url(#groomGold)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="20"
                    fill="none"
                    stroke="url(#groomGold)"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <path
                    d="M 30 10 L 32 25 L 45 25 L 35 32 L 38 45 L 30 38 L 22 45 L 25 32 L 15 25 L 28 25 Z"
                    fill="url(#groomGold)"
                    opacity="0.8"
                  />
                </svg>
              </motion.div>

              <h3
                className="text-xl md:text-4xl text-[#8B1538] mb-3 md:mb-6"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 600,
                }}
              >
                The Groom
              </h3>

              <div className="space-y-2 md:space-y-4 text-[#6B1129]">
                <div>
                  <p
                    className="text-lg md:text-2xl mb-1 md:mb-2"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 600,
                    }}
                  >
                    Samarpan
                  </p>
                  <p
                    className="text-xs md:text-sm text-[#8B1538]/70 italic"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Son of
                  </p>
                </div>

                <div className="my-3 md:my-6">
                  <svg
                    width="30"
                    height="15"
                    viewBox="0 0 40 20"
                    className="mx-auto md:w-[40px] md:h-[20px]"
                  >
                    <path
                      d="M 5 10 Q 12 6 20 10 Q 28 14 35 10"
                      stroke="#DAA520"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="space-y-1">
                  <p
                    className="text-sm md:text-xl font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Mr. Seshadev Sahu
                  </p>
                  <p className="text-xs md:text-sm text-[#DAA520]">&</p>
                  <p
                    className="text-sm md:text-xl font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Mrs. Puspalata Mahapatro
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bride's Family - Compact for mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div
              className="bg-gradient-to-br from-white to-[#FFF8F3] backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border-2 border-[#DAA520]/20"
              style={{ boxShadow: "0 10px 40px rgba(139, 21, 56, 0.1)" }}
            >
              {/* Decorative top */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-3 md:mb-6"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 60 60"
                  className="mx-auto md:w-[60px] md:h-[60px]"
                >
                  <defs>
                    <linearGradient
                      id="brideGold"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#DAA520" />
                      <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    fill="none"
                    stroke="url(#brideGold)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="20"
                    fill="none"
                    stroke="url(#brideGold)"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <circle
                    cx="30"
                    cy="25"
                    r="6"
                    fill="url(#brideGold)"
                    opacity="0.8"
                  />
                  <path
                    d="M 20 38 Q 25 32 30 35 Q 35 32 40 38 Q 35 40 30 39 Q 25 40 20 38"
                    fill="url(#brideGold)"
                    opacity="0.8"
                  />
                </svg>
              </motion.div>

              <h3
                className="text-xl md:text-4xl text-[#8B1538] mb-3 md:mb-6"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 600,
                }}
              >
                The Bride
              </h3>

              <div className="space-y-2 md:space-y-4 text-[#6B1129]">
                <div>
                  <p
                    className="text-lg md:text-2xl mb-1 md:mb-2"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 600,
                    }}
                  >
                    Nibedita
                  </p>
                  <p
                    className="text-xs md:text-sm text-[#8B1538]/70 italic"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Daughter of
                  </p>
                </div>

                <div className="my-3 md:my-6">
                  <svg
                    width="30"
                    height="15"
                    viewBox="0 0 40 20"
                    className="mx-auto md:w-[40px] md:h-[20px]"
                  >
                    <path
                      d="M 5 10 Q 12 6 20 10 Q 28 14 35 10"
                      stroke="#DAA520"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="space-y-1">
                  <p
                    className="text-sm md:text-xl font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Mr. Nabaghana Behera
                  </p>
                  <p className="text-xs md:text-sm text-[#DAA520]">&</p>
                  <p
                    className="text-sm md:text-xl font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Mrs. Mamata Behera
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
