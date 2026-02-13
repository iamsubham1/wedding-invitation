import { motion } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

export function EventCard({
  title,
  date,
  time,
  venue,
  description,
  imageUrl,
  delay = 0,
  href,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-gradient-to-br from-white to-[#FFF8F3] backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500 border-2 border-[#DAA520]/20"
      style={{
        boxShadow:
          "0 10px 40px rgba(139, 21, 56, 0.15), 0 0 0 1px rgba(218, 165, 32, 0.1)",
      }}
    >
      {/* Image Section - Reduced height on mobile */}
      <div className="relative h-48 md:h-120 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/60 to-transparent" />

        {/* Decorative gold accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#B8860B]" />

        {/* Decorative corner ornament */}
        <div className="absolute top-4 right-4">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <defs>
              <linearGradient
                id="cornerGold"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#DAA520" />
              </linearGradient>
            </defs>
            <path
              d="M 5 5 L 10 5 Q 10 10 15 15 M 5 5 L 5 10 Q 10 10 15 15"
              stroke="url(#cornerGold)"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          </svg>
        </div>
      </div>

      {/* Content Section - More compact on mobile */}
      <div className="p-4 md:p-8">
        {/* Title with decorative line */}
        <div className="mb-3 md:mb-4">
          <h3
            className="text-2xl md:text-3xl text-[#8B1538] mb-2 md:mb-3"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            {title}
          </h3>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-transparent rounded-full" />
        </div>

        {/* Event Details - Compact on mobile with premium styling */}
        <div
          className="space-y-2 md:space-y-3 bg-gradient-to-br from-[#FFF8F3] to-white rounded-2xl p-3 md:p-4 border border-[#DAA520]/30"
          style={{ boxShadow: "inset 0 1px 3px rgba(139, 21, 56, 0.05)" }}
        >
          <div className="flex items-start gap-2 md:gap-3 text-[#6B1129]">
            <div className="bg-gradient-to-br from-[#DAA520] to-[#B8860B] p-1.5 rounded-lg flex-shrink-0">
              <Calendar className="size-3 md:size-4 text-white" />
            </div>
            <span
              className="leading-relaxed text-sm md:text-base font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {date}
            </span>
          </div>

          <div className="flex items-start gap-2 md:gap-3 text-[#6B1129]">
            <div className="bg-gradient-to-br from-[#DAA520] to-[#B8860B] p-1.5 rounded-lg flex-shrink-0">
              <Clock className="size-3 md:size-4 text-white" />
            </div>
            <span
              className="leading-relaxed text-sm md:text-base font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {time}
            </span>
          </div>

          <div className="flex items-start gap-2 md:gap-3 text-[#6B1129]">
            <div className="bg-gradient-to-br from-[#DAA520] to-[#B8860B] p-1.5 rounded-lg flex-shrink-0">
              <MapPin className="size-3 md:size-4 text-white" />
            </div>
            <span
              className="leading-relaxed text-sm md:text-base font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4A07A] underline hover:text-[#A8927D] transition-colors"
              >
                {venue}
              </a>
            </span>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-4 md:mt-6 flex justify-center">
          <svg width="60" height="15" viewBox="0 0 60 15">
            <defs>
              <linearGradient
                id="dividerGold"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#DAA520" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M 5 7.5 Q 15 3 30 7.5 Q 45 12 55 7.5"
              stroke="url(#dividerGold)"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="30" cy="7.5" r="2" fill="#DAA520" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
