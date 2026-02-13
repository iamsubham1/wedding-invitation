import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { EventCard } from "@/app/components/EventCard";
import { BlessingsForm } from "@/app/components/BlessingsForm";
import { BlessingsWall } from "@/app/components/BlessingsWall";
import { CountdownTimer } from "@/app/components/CountdownTimer";
import { LandingPage } from "@/app/components/LandingPage";
import { FamilyDetails } from "@/app/components/FamilyDetails";

export default function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // scroll to top
  useEffect(() => {
    if (showInvitation) {
      window.scrollTo(0, 0);
    }
  }, [showInvitation]);

  // auto play music when invitation opens
  useEffect(() => {
    if (!showInvitation || !audioRef.current) return;

    audioRef.current.volume = 0.6;
    audioRef.current
      .play()
      .catch((error: any) => console.error("Audio playback failed:", error));
  }, [showInvitation]);

  if (!showInvitation) {
    return <LandingPage onOpenInvitation={() => setShowInvitation(true)} />;
  }

  const events = [
    {
      title: "Haldi",
      date: "March 4, 2026",
      time: "10:00 AM",
      venue: "Saraswati Mandap, Old Town, Bhubaneswar",
      href: "https://www.google.com/maps/dir//SARASWATI+MANDAP,+Plot+No.992,+Giani+Zail+Singh+Rd,+Sriram+Nagar,+Old+Town,+Bhubaneswar,+Odisha+751002/@17.4686208,78.364672,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a19a6d7a6b769eb:0x182de7a84221a2d3!2m2!1d85.8404333!2d20.2311432?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
      description:
        "Join us for the vibrant Haldi ceremony and beautiful Mehendi designs. A day filled with turmeric blessings and intricate henna art.",
      imageUrl: "/images/haldi_img.jpeg",
    },
    {
      title: "Ring Ceremony & Sangeet",
      date: "March 4, 2026",
      time: "6:00 PM",
      venue: "Saraswati Mandap, Old Town, Bhubaneswar",
      href: "https://www.google.com/maps/dir//SARASWATI+MANDAP,+Plot+No.992,+Giani+Zail+Singh+Rd,+Sriram+Nagar,+Old+Town,+Bhubaneswar,+Odisha+751002/@17.4686208,78.364672,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a19a6d7a6b769eb:0x182de7a84221a2d3!2m2!1d85.8404333!2d20.2311432?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
      description:
        "An evening of music, dance, and celebration. Come dressed in your finest and ready to dance the night away!",
      imageUrl: "/images/mehendi_sangeet.jpeg",
    },
    {
      title: "Shaadi",
      date: "March 5, 2026",
      time: "7:00 PM",
      venue: "Raj Palace and Convention, Lingipur, Bhubaneswar",
      href: "https://www.google.com/maps?sca_esv=96453034df65cf11&sxsrf=ANbL-n5EXFam2DB3mHeOVbtF6_-hnpH4MQ:1770574596510&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXJhaiBwYWxhY2UgYW5kIGNvbnZlbnRpb24qAggAMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMgUQABjvBTIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFIm3ZQ9gZYz2hwA3gAkAEEmAGmA6ABxD6qAQswLjEwLjE3LjUuMbgBA8gBAPgBAZgCHqAC2TeoAhDCAgoQABiwAxjWBBhHwgIKECMYgAQYJxiKBcICBhAAGBYYHsICBxAjGCcY6gLCAg0QIxiABBgnGIoFGOoCwgITEC4YgAQY0QMYxwEYJxiKBRjqAsICFhAAGIAEGEMYtAIY5wYYigUY6gLYAQHCAhAQABgDGLQCGOoCGI8B2AEBwgIQEC4YAxi0AhjqAhiPAdgBAcICBBAjGCfCAgsQLhiABBiRAhiKBcICERAuGIAEGJECGMcBGIoFGK8BwgIOEC4YgAQYsQMYgwEYigXCAg4QLhiABBixAxjRAxjHAcICCBAAGIAEGLEDwgIFEC4YgATCAgsQLhiABBixAxiDAcICChAAGIAEGEMYigXCAhAQLhiABBhDGMcBGIoFGK8BwgIXEC4YgAQYkQIYxwEYmAUYmQUYigUYrwHCAgsQABiABBiRAhiKBcICCBAuGIAEGLEDwgIKEC4YgAQYQxiKBcICJhAuGIAEGJECGMcBGJgFGJkFGIoFGK8BGJcFGNwEGN4EGOAE2AEBwgIOEC4YgAQYxwEYjgUYrwHCAg4QABiABBixAxiDARiKBcICIBAuGIAEGJECGMcBGIoFGK8BGJcFGNwEGN4EGOAE2AEBwgINEC4YgAQYsQMYQxiKBcICDhAuGIAEGMcBGMkDGK8BwgIQEAAYgAQYsQMYQxiDARiKBcICDRAuGIAEGLEDGIMBGArCAgQQABgDwgIREAAYgAQYkQIYsQMYgwEYigXCAhEQLhiABBjHARiYBRiZBRivAcICBhAAGAMYCsICERAuGIAEGMcBGJgFGJoFGK8BwgIOEC4YgAQYxwEYmAUYrwHCAggQABiiBBiJBZgDGvEFjJ_YLK-2it2IBgGQBgS6BgYIARABGAGSBwgzLjEuMTcuOaAHk50EsgcIMC4xLjE3Ljm4B5Q3wgcIMy05LjIwLjHIB7YFgAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Ka2HvxsApxk6MUc9fXsqxcoq&daddr=Nuagaon,+Samantarapur,+Lingipur,+Bhubaneswar,+Odisha+751002",
      description:
        "The sacred wedding ceremony where two souls unite. Witness the beautiful rituals and traditions as we exchange our vows.",
      imageUrl: "/images/shadi_img.jpg",
    },
    {
      title: "Reception",
      date: "March 8, 2026",
      time: "7:00 PM",
      venue: "Gauri Shankar Inn, Konisi, Brahmapur",
      href: "https://www.google.com/maps/dir//Gouri+Shankar+INN,+Pilla+Mill+%7C,+near+NIST+Hostel-7+%7C+Ramaharinager+%7C,+in+front+of+Indian+Oil+petrol+pump+%7C,+Konisi,+Brahmapur,+Odisha+761008/@17.8935864,78.9167959,7z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3a3d452a5448c4b3:0x51f2acb46b8e3d41!2m2!1d84.7701581!2d19.2591933!3e0?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
      description:
        "Celebrate with us as we toast to new beginnings. Dinner, drinks, and dancing under the stars!",
      imageUrl: "/images/reception.jpeg",
    },
  ];



  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#FFF8F3] via-[#FFFBF7] to-[#FFF5ED]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/5 via-transparent to-[#C9A55A]/5" />

        {/* Decorative mandala pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B1538'%3E%3Cpath d='M40 10c5 10 15 10 20 20-10-5-20-5-20-20zm0 60c-5-10-15-10-20-20 10 5 20 5 20 20zm30-30c-10 5-10 15-20 20 5-10 5-20 20-20zm-60 0c10-5 10-15 20-20-5 10-5 20-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Top ornament */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <svg
              width="200"
              height="40"
              viewBox="0 0 200 40"
              className="mx-auto"
            >
              <defs>
                <linearGradient
                  id="goldGradient"
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
                d="M 20 20 Q 60 10 100 20 Q 140 30 180 20"
                stroke="url(#goldGradient)"
                strokeWidth="2"
                fill="none"
              />
              {[40, 80, 120, 160].map((x) => (
                <circle
                  key={x}
                  cx={x}
                  cy="20"
                  r="3"
                  fill="url(#goldGradient)"
                />
              ))}
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#8B1538] tracking-[0.3em] text-xs md:text-sm mb-8 uppercase font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Together with their families
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8"
          >
            <h1
              className="text-5xl md:text-7xl text-[#8B1538] mb-4 tracking-wide"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                textShadow: "0 2px 20px rgba(255,255,255,0.3)",
              }}
            >
              Sai Samarpan
            </h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center justify-center gap-4 my-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#DAA520]" />
              <span className="text-3xl text-[#DAA520]">&</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#DAA520]" />
            </motion.div>
            <h1
              className="text-5xl md:text-7xl text-[#8B1538] tracking-wide"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                textShadow: "0 2px 20px rgba(255,255,255,0.3)",
              }}
            >
              Nibedita Priyadarsini
            </h1>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A55A]" />
            <svg width="20" height="20" viewBox="0 0 20 20">
              <circle
                cx="10"
                cy="10"
                r="8"
                fill="none"
                stroke="#C9A55A"
                strokeWidth="1.5"
              />
              <circle cx="10" cy="10" r="3" fill="#C9A55A" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A55A]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p
              className="text-xl md:text-2xl text-[#6B1129] mb-3 italic"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 500,
              }}
            >
              Request the honor of your presence
            </p>
            <p
              className="text-lg md:text-xl text-[#8B1538]/80 mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              at the celebration of their marriage
            </p>
            <p
              className="text-2xl md:text-3xl text-[#C9A55A] mt-6"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
            >
              March 4 - 8, 2026
            </p>
          </motion.div>

          {/* Bottom ornament */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-12"
          >
            <svg
              width="200"
              height="40"
              viewBox="0 0 200 40"
              className="mx-auto"
            >
              <path
                d="M 20 20 Q 60 30 100 20 Q 140 10 180 20"
                stroke="url(#goldGradient)"
                strokeWidth="2"
                fill="none"
              />
              {[40, 80, 120, 160].map((x) => (
                <circle
                  key={x}
                  cx={x}
                  cy="20"
                  r="3"
                  fill="url(#goldGradient)"
                />
              ))}
            </svg>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <svg
                className="size-6 text-[#C9A55A]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Family Details Section */}
      <FamilyDetails />

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-[#8B1538] mb-4"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
            >
              Celebration Events
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {events.map((event, index) => (
              <EventCard key={event.title} {...event} delay={index * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gradient-to-b from-[#FFF8F3] to-white/50">
        <CountdownTimer />
      </section>

      {/* Blessings Section */}
      <section className="py-20 px-4">
        <BlessingsForm />
      </section>

      {/* Blessings Wall */}
      <BlessingsWall />
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/Jogi.mp3" type="audio/mpeg" />
      </audio>

      {/* Footer */}
      <footer className="py-12 text-center bg-gradient-to-t from-[#8B1538]/5 to-transparent border-t border-[#DAA520]/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="mx-auto">
            <defs>
              <linearGradient
                id="footerGold"
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
              d="M 20 5 L 23 15 L 33 15 L 25 22 L 28 32 L 20 25 L 12 32 L 15 22 L 7 15 L 17 15 Z"
              fill="none"
              stroke="url(#footerGold)"
              strokeWidth="1.5"
            />
          </svg>
          <p
            className="text-[#8B1538]"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
          >
            With love and gratitude
          </p>
          <p
            className="text-[#6B1129] text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Samarpan & Nibedita • March 2026
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
